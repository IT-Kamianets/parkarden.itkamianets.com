import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';
const ALL_FILTER = 'Усі фото';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './galereya.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalereyaComponent {
	// TODO: Replace with strong gallery hero photo: animal close-up, bridge-gallery, forest landscape, or seasonal Park Arden atmosphere.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with strong closing photo of animal, bridge-gallery, forest, or happy visitors.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

	protected readonly selectedFilter = signal(ALL_FILTER);
	protected readonly filters = [
		ALL_FILTER,
		'Тварини',
		'Ведмеді',
		'Великі коти',
		'Примати',
		'Вовки',
		'Олені та копитні',
		'Птахи',
		'Міст-галерея',
		'Природа',
		'Екскурсії',
		'4 сезони',
		'Історії порятунку',
		'Відео',
	];

	protected readonly featuredCards = [
		{
			title: 'Тварини парку',
			category: 'Тварини',
			// TODO: Replace with real photo collage or strong animal portrait from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Фото мешканців парку: ведмеді, великі коти, вовки, примати, олені, птахи та інші тварини.',
			alt: 'Тварини парку «АРДЕН»',
		},
		{
			title: 'Міст-галерея',
			category: 'Міст-галерея',
			// TODO: Replace with real photo of the forest bridge-gallery.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Оглядовий лісовий маршрут протяжністю близько 1 км у кронах дерев.',
			alt: 'Міст-галерея у парку «АРДЕН»',
		},
		{
			title: 'Природа Подільських Товтр',
			category: 'Природа',
			// TODO: Replace with real forest, hills, path, trees, or landscape photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Ліс, пагорби, чисте повітря, природні маршрути та тиша Сатанівського лісу.',
			alt: 'Природа Подільських Товтр у парку «АРДЕН»',
		},
		{
			title: '4 сезони',
			category: '4 сезони',
			// TODO: Replace with real seasonal collage: spring, summer, autumn, winter.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Весняне пробудження, літня зелень, осінні барви та зимова тиша парку.',
			alt: '4 сезони у парку «АРДЕН»',
		},
	];

	protected readonly galleryCards = [
		this.galleryCard('Ведмеді у лісових вольєрах', 'Ведмеді', 'Replace with real bear photo from Park Arden.', 'Ведмеді у лісовому вольєрі парку «АРДЕН»'),
		this.galleryCard('Білий лев Зевс', 'Великі коти', 'Replace with real photo of white lion Зевс.', 'Білий лев Зевс у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Тигр у парку', 'Великі коти', 'Replace with real tiger photo from Park Arden.', 'Тигр у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Вовчі зграї', 'Вовки', 'Replace with real wolf photo from Park Arden.', 'Вовки у лісовій частині парку «АРДЕН»'),
		this.galleryCard('Примати', 'Примати', 'Replace with real photo of capuchins, lemurs, green monkeys, or baboons.', 'Примати у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Благородні олені', 'Олені та копитні', 'Replace with real photo of red deer.', 'Благородні олені в природному просторі парку «АРДЕН»'),
		this.galleryCard('Хижі птахи', 'Птахи', 'Replace with real photo of eagle, hawk, buzzard, or other bird.', 'Хижі птахи у реабілітаційному центрі парку «АРДЕН»'),
		this.galleryCard('Оглядовий міст-галерея', 'Міст-галерея', 'Replace with real bridge-gallery photo.', 'Лісовий міст-галерея у парку «АРДЕН»'),
		this.galleryCard('Прогулянка диким лісом', 'Природа', 'Replace with real forest route photo.', 'Лісовий маршрут у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Екскурсія з гідом', 'Екскурсії', 'Replace with real photo of guide and visitor group.', 'Екскурсія з гідом у парку «АРДЕН»'),
		this.galleryCard('Весна в парку', '4 сезони', 'Replace with real spring photo of animals or park nature.', 'Весна у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Літо в парку', '4 сезони', 'Replace with real summer photo of green forest and animals.', 'Літо у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Осінь у лісі', '4 сезони', 'Replace with real autumn photo of forest, animals, or route.', 'Осінь у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Зима в «АРДЕНІ»', '4 сезони', 'Replace with real winter photo with snow, animals, or quiet forest.', 'Зима у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Історія порятунку', 'Історії порятунку', 'Replace with real emotional photo of rescued animal or care moment.', 'Історія порятунку тварини у парку «АРДЕН»'),
	];

	protected readonly filteredGalleryCards = computed(() => {
		const selectedFilter = this.selectedFilter();
		return selectedFilter === ALL_FILTER
			? this.galleryCards
			: this.galleryCards.filter((card) => card.category === selectedFilter);
	});

	protected readonly seasonCards = [
		{
			title: 'Весна',
			// TODO: Replace with real spring photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Природа прокидається, тварини стають активнішими, а ліс наповнюється новими кольорами.',
			alt: 'Весна у галереї парку «АРДЕН»',
		},
		{
			title: 'Літо',
			// TODO: Replace with real summer photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Найзеленіший і найсоковитіший період для сімейних екскурсій та яскравих фото.',
			alt: 'Літо у галереї парку «АРДЕН»',
		},
		{
			title: 'Осінь',
			// TODO: Replace with real autumn photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Теплі кольори лісу, м’яке світло та особлива спокійна атмосфера.',
			alt: 'Осінь у галереї парку «АРДЕН»',
		},
		{
			title: 'Зима',
			// TODO: Replace with real winter photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Сніг, тиша, спокій і зовсім інший характер дикої природи.',
			alt: 'Зима у галереї парку «АРДЕН»',
		},
	];

	protected readonly videoPlaceholders = [
		{
			title: 'Прогулянка мостом-галереєю',
			videoTodo: 'Replace with real YouTube video or uploaded video from Park Arden.',
			text: 'Коротке відео маршруту в кронах дерев.',
		},
		{
			title: 'Життя ведмедів',
			videoTodo: 'Replace with real video of bears from Park Arden.',
			text: 'Ведмеді у природних лісових вольєрах.',
		},
		{
			title: 'Екскурсія парком',
			videoTodo: 'Replace with real video of guided excursion.',
			text: 'Атмосфера групового відвідування парку.',
		},
	];

	protected readonly finalButtons = [
		{ label: 'Записатись на екскурсію', path: '/ekskursii', style: 'primary' },
		{ label: 'Інформація для гостей', path: '/gostiam', style: 'secondary' },
	];

	protected selectFilter(filter: string): void {
		this.selectedFilter.set(filter);
	}

	private galleryCard(title: string, category: string, imageTodo: string, alt: string) {
		return {
			title,
			category,
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo,
			alt,
		};
	}
}
