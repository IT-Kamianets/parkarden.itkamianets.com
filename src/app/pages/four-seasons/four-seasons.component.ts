import { NgOptimizedImage } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	PLATFORM_ID,
	inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import type PhotoSwipeLightbox from 'photoswipe/lightbox';
import { allParkardenPhotoSwipeImages } from './four-seasons.all-images';
import { fourSeasonsPhotos, type FourSeasonsPhoto } from './four-seasons.images';

interface ImageCard {
	title: string;
	text: string;
	image: string;
	imageWidth?: number;
	imageHeight?: number;
	imageAlt?: string;
}

interface SeasonDetail extends ImageCard {
	highlights: string[];
	gallery: ImageCard[];
}

const toImageCard = (
	photo: FourSeasonsPhoto,
	_title: string,
	_text = '',
): Pick<ImageCard, 'image' | 'imageWidth' | 'imageHeight' | 'imageAlt'> => ({
	image: photo.src,
	imageWidth: photo.width,
	imageHeight: photo.height,
	imageAlt: photo.alt,
});

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './four-seasons.component.html',
	styleUrl: './four-seasons.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourSeasonsComponent implements AfterViewInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);
	private lightbox?: PhotoSwipeLightbox;
	private readonly allPhotoIndex = new Map<string, number>(
		allParkardenPhotoSwipeImages.map((src, index) => [src, index]),
	);
	private readonly allPhotoSlides = allParkardenPhotoSwipeImages.map((src) => ({
		html: `<div class="pswp-arden-slide"><img src="${src}" alt="" loading="lazy" /></div>`,
	}));

	protected readonly heroImage = fourSeasonsPhotos.hero;
	protected readonly seasonalVisitImage = fourSeasonsPhotos.seasonalVisit;
	protected readonly finalCtaImage = fourSeasonsPhotos.finalCta;
	protected readonly allPhotoCount = allParkardenPhotoSwipeImages.length;
	private readonly seasonGalleryPhotos = [
		fourSeasonsPhotos.details.spring.gallery,
		fourSeasonsPhotos.details.summer.gallery,
		fourSeasonsPhotos.details.autumn.gallery,
		fourSeasonsPhotos.details.winter.gallery,
	];

	protected readonly heroButtons = [
		{ label: 'Записатись на екскурсію', link: '/ekskursii', variant: 'primary' },
		{ label: 'Дивитись галерею', link: '/galereya', variant: 'secondary' },
	];

	protected readonly visitButtons = [
		{ label: 'Записатись на екскурсію', link: '/ekskursii', variant: 'primary' },
		{ label: 'Інформація для гостей', link: '/gostiam', variant: 'secondary' },
	];

	protected readonly finalButtons = [
		{ label: 'Запланувати візит', link: '/ekskursii', variant: 'primary' },
		{ label: 'Дивитись галерею', link: '/galereya', variant: 'secondary' },
	];

	protected readonly seasons: ImageCard[] = [
		{
			title: 'Весна',
			image: fourSeasonsPhotos.seasons.spring.src,
			imageWidth: fourSeasonsPhotos.seasons.spring.width,
			imageHeight: fourSeasonsPhotos.seasons.spring.height,
			imageAlt: fourSeasonsPhotos.seasons.spring.alt,
			text: 'Природа прокидається, на деревах з’являються перші зелені листочки, а молоді тварини стають активнішими й допитливішими.',
		},
		{
			title: 'Літо',
			image: fourSeasonsPhotos.seasons.summer.src,
			imageWidth: fourSeasonsPhotos.seasons.summer.width,
			imageHeight: fourSeasonsPhotos.seasons.summer.height,
			imageAlt: fourSeasonsPhotos.seasons.summer.alt,
			text: 'Найсоковитіший сезон для прогулянок, фото, сімейних екскурсій і спостереження за тваринами серед густої зелені.',
		},
		{
			title: 'Осінь',
			image: fourSeasonsPhotos.seasons.autumn.src,
			imageWidth: fourSeasonsPhotos.seasons.autumn.width,
			imageHeight: fourSeasonsPhotos.seasons.autumn.height,
			imageAlt: fourSeasonsPhotos.seasons.autumn.alt,
			text: 'Ліс змінює кольори, маршрути стають особливо атмосферними, а парк відкривається у теплих природних відтінках.',
		},
		{
			title: 'Зима',
			image: fourSeasonsPhotos.seasons.winter.src,
			imageWidth: fourSeasonsPhotos.seasons.winter.width,
			imageHeight: fourSeasonsPhotos.seasons.winter.height,
			imageAlt: fourSeasonsPhotos.seasons.winter.alt,
			text: 'Більшість ведмедів дрімає у барлогах, але іноді відвідувачам щастить побачити господарів лісу навіть узимку.',
		},
	];

	protected readonly seasonDetails: SeasonDetail[] = [
		{
			title: 'Весна: пробудження парку',
			image: fourSeasonsPhotos.details.spring.hero.src,
			imageWidth: fourSeasonsPhotos.details.spring.hero.width,
			imageHeight: fourSeasonsPhotos.details.spring.hero.height,
			imageAlt: fourSeasonsPhotos.details.spring.hero.alt,
			text: 'Навесні в «АРДЕНІ» відчувається рух і оновлення. На деревах з’являються перші зелені листочки, які дуже смакують ведмедям. Молоді ведмежата можуть вилізти на дерево та посмакувати зеленню прямо з гілок. Весна - це пора активності, гри, цікавості та перших яскравих фото після зими.',
			highlights: [
				'Перші зелені листочки',
				'Більше активності у тварин',
				'Весняні розваги ведмежат',
				'Пробудження лісу',
				'М’яке світло для фото',
			],
			gallery: [
				{
					title: 'Ведмежата навесні',
					...toImageCard(fourSeasonsPhotos.details.spring.gallery[0], 'Spring bears'),
					text: '',
				},
				{
					title: 'Перші зелені листочки',
					...toImageCard(fourSeasonsPhotos.details.spring.gallery[1], 'Spring greenery'),
					text: '',
				},
				{
					title: 'Пробудження лісу',
					...toImageCard(fourSeasonsPhotos.details.spring.gallery[2], 'Spring forest'),
					text: '',
				},
			],
		},
		{
			title: 'Літо: зелень, маршрут і сімейні екскурсії',
			image: fourSeasonsPhotos.details.summer.hero.src,
			imageWidth: fourSeasonsPhotos.details.summer.hero.width,
			imageHeight: fourSeasonsPhotos.details.summer.hero.height,
			imageAlt: fourSeasonsPhotos.details.summer.hero.alt,
			text: 'Влітку парк виглядає особливо насичено: густий ліс, зелений маршрут, чисте повітря та багато можливостей для яскравих фото. Це зручний сезон для родинних поїздок, групових екскурсій і знайомства з мешканцями парку. Літня прогулянка мостом-галереєю дозволяє побачити парк з висоти, пройти крізь зелену атмосферу лісу та відчути простір дикої природи.',
			highlights: [
				'Густа зелень лісу',
				'Сімейні екскурсії',
				'Прогулянка мостом-галереєю',
				'Більше світла для фото',
				'Зручний сезон для групових відвідувань',
			],
			gallery: [
				{
					title: 'Літній міст-галерея',
					...toImageCard(fourSeasonsPhotos.details.summer.gallery[0], 'Summer bridge gallery'),
					text: '',
				},
				{
					title: 'Тварини серед зелені',
					...toImageCard(fourSeasonsPhotos.details.summer.gallery[1], 'Summer animals'),
					text: '',
				},
				{
					title: 'Родинна екскурсія',
					...toImageCard(fourSeasonsPhotos.details.summer.gallery[2], 'Summer route'),
					text: '',
				},
			],
		},
		{
			title: 'Осінь: теплі кольори дикого лісу',
			image: fourSeasonsPhotos.details.autumn.hero.src,
			imageWidth: fourSeasonsPhotos.details.autumn.hero.width,
			imageHeight: fourSeasonsPhotos.details.autumn.hero.height,
			imageAlt: fourSeasonsPhotos.details.autumn.hero.alt,
			text: 'Восени «АРДЕН» стає особливо атмосферним. Ліс змінює кольори, маршрут набуває спокійного настрою, а фото тварин на фоні осінньої природи виглядають дуже виразно. Це пора для неспішних екскурсій, красивих пейзажів і теплого природного світла.',
			highlights: [
				'Осінні кольори лісу',
				'Тиха атмосфера маршруту',
				'Виразні фото тварин',
				'М’яке природне світло',
				'Спокійна прогулянка серед природи',
			],
			gallery: [
				{
					title: 'Осінній ліс',
					...toImageCard(fourSeasonsPhotos.details.autumn.gallery[0], 'Autumn forest'),
					text: '',
				},
				{
					title: 'Тварини восени',
					...toImageCard(fourSeasonsPhotos.details.autumn.gallery[1], 'Autumn animals'),
					text: '',
				},
				{
					title: 'Осінній маршрут',
					...toImageCard(fourSeasonsPhotos.details.autumn.gallery[2], 'Autumn route'),
					text: '',
				},
			],
		},
		{
			title: 'Зима: тиша, сніг і господарі лісу',
			image: fourSeasonsPhotos.details.winter.hero.src,
			imageWidth: fourSeasonsPhotos.details.winter.hero.width,
			imageHeight: fourSeasonsPhotos.details.winter.hero.height,
			imageAlt: fourSeasonsPhotos.details.winter.hero.alt,
			text: 'Взимку парк має зовсім інший настрій. Більшість ведмедів дрімає у барлогах, але іноді деякі з них виходять на короткий час, проходяться територією і знову повертаються у свій зимовий спокій. Зимовий «АРДЕН» - це тиша лісу, сніг, стримані кольори та особлива атмосфера дикої природи.',
			highlights: [
				'Зимова тиша парку',
				'Ведмеді у барлогах',
				'Можливість побачити тварин узимку',
				'Сніг і спокійний ліс',
				'Інший настрій знайомого маршруту',
			],
			gallery: [
				{
					title: 'Ведмідь узимку',
					...toImageCard(fourSeasonsPhotos.details.winter.gallery[0], 'Winter animal'),
					text: '',
				},
				{
					title: 'Сніг у парку',
					...toImageCard(fourSeasonsPhotos.details.winter.gallery[1], 'Winter snow'),
					text: '',
				},
				{
					title: 'Зимовий маршрут',
					...toImageCard(fourSeasonsPhotos.details.winter.gallery[2], 'Winter route'),
					text: '',
				},
			],
		},
	];

	protected readonly animalSeasonCards: ImageCard[] = [
		{
			title: 'Ведмеді',
			image: fourSeasonsPhotos.animals.bears.src,
			imageWidth: fourSeasonsPhotos.animals.bears.width,
			imageHeight: fourSeasonsPhotos.animals.bears.height,
			imageAlt: fourSeasonsPhotos.animals.bears.alt,
			text: 'Навесні ведмеді активізуються, влітку багато рухаються, восени готуються до холодів, а взимку частина з них дрімає у барлогах.',
		},
		{
			title: 'Великі коти',
			image: fourSeasonsPhotos.animals.bigCats.src,
			imageWidth: fourSeasonsPhotos.animals.bigCats.width,
			imageHeight: fourSeasonsPhotos.animals.bigCats.height,
			imageAlt: fourSeasonsPhotos.animals.bigCats.alt,
			text: 'Великі коти виглядають по-різному залежно від світла, погоди та сезону, але завжди зберігають свою силу й грацію.',
		},
		{
			title: 'Вовки',
			image: fourSeasonsPhotos.animals.wolves.src,
			imageWidth: fourSeasonsPhotos.animals.wolves.width,
			imageHeight: fourSeasonsPhotos.animals.wolves.height,
			imageAlt: fourSeasonsPhotos.animals.wolves.alt,
			text: 'Вовки особливо атмосферно виглядають у лісі, а взимку їхній образ стає ще ближчим до дикої природи.',
		},
		{
			title: 'Олені та копитні',
			image: fourSeasonsPhotos.animals.hoofed.src,
			imageWidth: fourSeasonsPhotos.animals.hoofed.width,
			imageHeight: fourSeasonsPhotos.animals.hoofed.height,
			imageAlt: fourSeasonsPhotos.animals.hoofed.alt,
			text: 'Олені, муфлони та лані гармонійно вписуються в природний ландшафт у будь-яку пору року.',
		},
	];

	protected readonly photoChecklist = [
		'Весна: тварини після зими, перша зелень, ведмежата, весняний ліс',
		'Літо: тварини серед зелені, міст-галерея, екскурсії, родини, пік сезону',
		'Осінь: тварини на фоні жовтого листя, осінній ліс, маршрут, міст',
		'Зима: сніг, ведмеді, барлоги, тихий ліс, зимова атмосфера',
		'Окремо: фото одного й того ж місця в різні сезони для порівняння',
	];

	protected seasonGallery(index: number): ImageCard[] {
		return this.seasonGalleryPhotos[index].map((photo, photoIndex) => ({
			title: `${photoIndex + 1}`,
			text: '',
			image: photo.src,
			imageWidth: photo.width,
			imageHeight: photo.height,
			imageAlt: photo.alt,
		}));
	}

	protected openPhoto(src: string, event: MouseEvent): void {
		const index = this.allPhotoIndex.get(src);

		if (!this.lightbox || index === undefined) {
			return;
		}

		event.preventDefault();
		this.lightbox.loadAndOpen(index, this.allPhotoSlides);
	}

	protected openAllPhotos(event: MouseEvent): void {
		if (!this.lightbox) {
			return;
		}

		event.preventDefault();
		this.lightbox.loadAndOpen(0, this.allPhotoSlides);
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
