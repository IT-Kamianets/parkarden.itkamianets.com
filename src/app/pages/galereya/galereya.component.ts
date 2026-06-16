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
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './galereya.component.html',
	styleUrl: './galereya.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalereyaComponent implements AfterViewInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);
	private lightbox?: PhotoSwipeLightbox;

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

	protected openPhoto(album: GalleryAlbum, photo: GalleryPhoto, event: MouseEvent): void {
		if (!this.lightbox) return;
		event.preventDefault();

		const albumPhotos = [album.feature, ...album.photos];
		const index = albumPhotos.findIndex((p) => p.src === photo.src);
		if (index === -1) return;

		const slides = albumPhotos.map((p) => ({
			html: `<div class="pswp-arden-slide"><img src="${p.src}" alt="${p.alt}" loading="lazy" /></div>`,
		}));

		this.lightbox.loadAndOpen(index, slides);
	}

	protected albumTrack(_: number, album: GalleryAlbum): string {
		return album.id;
	}

	protected photoTrack(_: number, photo: GalleryPhoto): string {
		return photo.src;
	}

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) return;
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
			loop: false,
		});

		this.lightbox.init();
	}
}
