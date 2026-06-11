import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	PLATFORM_ID,
	computed,
	inject,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type PhotoSwipeLightbox from 'photoswipe/lightbox';
import { ParallaxImageDirective } from '../../feature/media/parallax-image.directive';
import {
	allGalleryPhotos,
	galleryAlbums,
	galleryFinalPhoto,
	galleryHeroPhoto,
	type GalleryAlbum,
	type GalleryPhoto,
} from './galereya.images';

const ALL_ALBUMS = 'all';

@Component({
	imports: [NgOptimizedImage, ParallaxImageDirective, RouterLink],
	templateUrl: './galereya.component.html',
	styleUrl: './galereya.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalereyaComponent implements AfterViewInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);
	private lightbox?: PhotoSwipeLightbox;
	private readonly photoIndex = new Map<string, number>(
		allGalleryPhotos.map((photo, index) => [photo.src, index]),
	);
	private readonly photoSlides = allGalleryPhotos.map((photo) => ({
		html: `<div class="pswp-arden-slide"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" /></div>`,
	}));

	protected readonly allAlbumsId = ALL_ALBUMS;
	protected readonly selectedAlbumId = signal(ALL_ALBUMS);
	protected readonly heroPhoto = galleryHeroPhoto;
	protected readonly finalPhoto = galleryFinalPhoto;
	protected readonly albums = galleryAlbums;
	protected readonly photoCount = allGalleryPhotos.length;
	protected readonly archiveCount = 743;

	protected readonly featuredAlbums = galleryAlbums.slice(0, 3);
	protected readonly visibleAlbums = computed(() => {
		const selectedAlbumId = this.selectedAlbumId();

		return selectedAlbumId === ALL_ALBUMS
			? this.albums
			: this.albums.filter((album) => album.id === selectedAlbumId);
	});

	protected selectAlbum(albumId: string): void {
		this.selectedAlbumId.set(albumId);
	}

	protected openPhoto(photo: GalleryPhoto, event: MouseEvent): void {
		const index = this.photoIndex.get(photo.src);

		if (!this.lightbox || index === undefined) {
			return;
		}

		event.preventDefault();
		this.lightbox.loadAndOpen(index, this.photoSlides);
	}

	protected albumTrack(_: number, album: GalleryAlbum): string {
		return album.id;
	}

	protected photoTrack(_: number, photo: GalleryPhoto): string {
		return photo.src;
	}

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		void this.initializeLightbox();
	}

	ngOnDestroy(): void {
		this.lightbox?.destroy();
	}

	private async initializeLightbox(): Promise<void> {
		const { default: PhotoSwipeLightbox } = await import('photoswipe/lightbox');

		this.lightbox = new PhotoSwipeLightbox({
			pswpModule: () => import('photoswipe'),
			preload: [1, 2],
		});
		this.lightbox.init();
	}
}
