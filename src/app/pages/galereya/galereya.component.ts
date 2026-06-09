import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';

const ALL_FILTER = 'Усі фото';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './galereya.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalereyaComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-1');
	protected readonly finalCtaImage = parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-2');

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
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-3'),
			text: 'Фото мешканців парку: ведмеді, великі коти, вовки, примати, олені, птахи та інші тварини.',
			alt: 'Тварини парку «АРДЕН»',
		},
		{
			title: 'Міст-галерея',
			category: 'Міст-галерея',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-4'),
			text: 'Оглядовий лісовий маршрут протяжністю близько 1 км у кронах дерев.',
			alt: 'Міст-галерея у парку «АРДЕН»',
		},
		{
			title: 'Природа Подільських Товтр',
			category: 'Природа',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-5'),
			text: 'Ліс, пагорби, чисте повітря, природні маршрути та тиша Сатанівського лісу.',
			alt: 'Природа Подільських Товтр у парку «АРДЕН»',
		},
		{
			title: '4 сезони',
			category: '4 сезони',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-6'),
			text: 'Весняне пробудження, літня зелень, осінні барви та зимова тиша парку.',
			alt: '4 сезони у парку «АРДЕН»',
		},
	];

	protected readonly galleryCards = [
		this.galleryCard('Ведмеді у лісових вольєрах', 'Ведмеді', 'Ведмеді у лісовому вольєрі парку «АРДЕН»'),
		this.galleryCard('Білий лев Зевс', 'Великі коти', 'Білий лев Зевс у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Тигр у парку', 'Великі коти', 'Тигр у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Вовчі зграї', 'Вовки', 'Вовки у лісовій частині парку «АРДЕН»'),
		this.galleryCard('Примати', 'Примати', 'Примати у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Благородні олені', 'Олені та копитні', 'Благородні олені в природному просторі парку «АРДЕН»'),
		this.galleryCard('Хижі птахи', 'Птахи', 'Хижі птахи у реабілітаційному центрі парку «АРДЕН»'),
		this.galleryCard('Оглядовий міст-галерея', 'Міст-галерея', 'Лісовий міст-галерея у парку «АРДЕН»'),
		this.galleryCard('Прогулянка диким лісом', 'Природа', 'Лісовий маршрут у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Екскурсія з гідом', 'Екскурсії', 'Екскурсія з гідом у парку «АРДЕН»'),
		this.galleryCard('Весна в парку', '4 сезони', 'Весна у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Літо в парку', '4 сезони', 'Літо у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Осінь у лісі', '4 сезони', 'Осінь у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Зима в «АРДЕНІ»', '4 сезони', 'Зима у Парку диких тварин «АРДЕН»'),
		this.galleryCard('Історія порятунку', 'Історії порятунку', 'Історія порятунку тварини у парку «АРДЕН»'),
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
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-7'),
			text: 'Природа прокидається, тварини стають активнішими, а ліс наповнюється новими кольорами.',
			alt: 'Весна у галереї парку «АРДЕН»',
		},
		{
			title: 'Літо',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-8'),
			text: 'Найзеленіший і найсоковитіший період для сімейних екскурсій та яскравих фото.',
			alt: 'Літо у галереї парку «АРДЕН»',
		},
		{
			title: 'Осінь',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-9'),
			text: 'Теплі кольори лісу, м’яке світло та особлива спокійна атмосфера.',
			alt: 'Осінь у галереї парку «АРДЕН»',
		},
		{
			title: 'Зима',
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-10'),
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

	private galleryCard(title: string, category: string, alt: string) {
		return {
			title,
			category,
			image: parkardenImageForKey('src/app/pages/galereya/galereya.component.ts-11'),
			alt,
		};
	}
}
