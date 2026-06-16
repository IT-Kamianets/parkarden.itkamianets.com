import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';

interface NewsCard {
	title: string;
	slug: string;
	category: string;
	date: string;
	text: string;
	image: string;
}

const SEO_IMAGE = 'https://cdn-it.webart.work/parkarden/animals_processed_03.webp';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './novyny.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovynyComponent {
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);
	protected readonly heroImage = 'https://cdn-it.webart.work/parkarden/deer_31.webp';
	protected readonly followImage = parkardenImageForKey('src/app/pages/novyny/novyny.component.ts-2');
	protected readonly finalCtaImage = 'https://cdn-it.webart.work/parkarden/deer_01.webp';

	protected readonly filters = [
		'Усі новини',
		'Оголошення',
		'Екскурсії',
		'Тварини',
		'Історії порятунку',
		'4 сезони',
		'Для гостей',
	];

	protected readonly featuredCards: NewsCard[] = [
		{
			title: 'Зміна вартості квитків',
			slug: 'zmina-vartosti-kvytkiv',
			category: 'Оголошення',
			date: 'Оновлено з 18.05.2026',
			image: parkardenImageForKey('src/app/pages/novyny/novyny.component.ts-4'),
			text: 'З 18.05.2026 діють оновлені ціни: дорослий квиток − 400 грн, дитячий квиток 6–14 років − 300 грн. Діти відвідують парк лише у супроводі дорослих.',
		},
		{
			title: 'Працюємо кожен день',
			slug: 'praczyuyemo-kozhen-den',
			category: 'Екскурсії',
			date: 'Актуальна інформація для гостей',
			image: parkardenImageForKey('src/app/pages/novyny/novyny.component.ts-5'),
			text: 'Парк працює щодня. Екскурсії розпочинаються з 10:00 та проводяться щогодини. Тривалість екскурсії − мінімум 60 хвилин.',
		},
		{
			title: 'Оновлення графіку екскурсій',
			slug: 'onovlennya-grafiku-ekskursij-parku-hyzhakiv',
			category: 'Екскурсії',
			date: 'Архівне оголошення',
			image: parkardenImageForKey('src/app/pages/novyny/novyny.component.ts-6'),
			text: 'Повідомлення про зміни у графіку екскурсій парку. Перед візитом завжди перевіряйте актуальний час роботи та записуйтеся заздалегідь.',
		},
	];

	protected readonly newsCards: NewsCard[] = [
		{
			title: 'Наближається зима',
			slug: 'nablyzhayetsya-zyma',
			category: '4 сезони',
			date: 'Архівна новина',
			image: 'https://cdn-it.webart.work/parkarden/winter_2024_01_08_123.webp',
			text: 'Зима змінює настрій парку: тварини поводяться інакше, ліс стає тихішим, а маршрути відкривають зовсім іншу атмосферу.',
		},
		{
			title: 'Мотря з ведмежатами',
			slug: 'motrya-z-vedmezhatamy',
			category: 'Тварини',
			date: 'Архівна історія',
			image: 'https://cdn-it.webart.work/parkarden/bears_113.webp',
			text: 'Історія з життя ведмежої родини, яка показує турботу, характер і особливі моменти мешканців парку.',
		},
		{
			title: 'Весняні розваги ведмежат',
			slug: 'vesnyani-rozvagy-vedmezhat',
			category: '4 сезони',
			date: 'Архівна історія',
			image: 'https://cdn-it.webart.work/parkarden/bears_54.webp',
			text: 'Весна приносить більше руху, гри та активності. Ведмежата відкривають світ навколо себе по-новому.',
		},
		{
			title: 'Гімалайські ведмеді',
			slug: 'himalayski-vedmedi',
			category: 'Тварини',
			date: 'Архівна історія',
			image: 'https://cdn-it.webart.work/parkarden/bears_03.webp',
			text: 'Гімалайські ведмеді вирізняються темним хутром, світлим комірцем і спритністю, яка особливо помітна серед дерев.',
		},
		{
			title: 'Осіннє поповнення великих котячих',
			slug: 'osinnye-popovnennya-velykyh-kotyachyh',
			category: 'Тварини',
			date: 'Архівна новина',
			image: 'https://cdn-it.webart.work/parkarden/lions_tigers_57.webp',
			text: 'Поповнення секції великих котячих стало яскравою подією для парку та відвідувачів.',
		},
		{
			title: 'Хижі птахи у парку',
			slug: 'hyzhi-ptahy-u-parku',
			category: 'Тварини',
			date: 'Матеріал про мешканців',
			image: 'https://cdn-it.webart.work/parkarden/eagle_06.webp',
			text: 'У парку мешкають не лише хижаки на землі, а й хижі птахи, серед яких орлан-білохвіст, канюк, яструб та інші представники дикої природи.',
		},
	];

	protected readonly newsTypeItems = [
		{
			title: 'Оголошення для гостей',
			text: 'Графік роботи, ціни, правила відвідування та важливі зміни перед поїздкою.',
		},
		{
			title: 'Життя тварин',
			text: 'Історії мешканців парку, цікаві факти, сезонна поведінка та нові матеріали про тварин.',
		},
		{
			title: 'Історії порятунку',
			text: 'Матеріали про тварин, які знайшли безпечний дім у «АРДЕНІ».',
		},
		{
			title: '4 сезони',
			text: 'Весна, літо, осінь і зима в парку − різні настрої, фото та спостереження.',
		},
		{
			title: 'Події та екскурсії',
			text: 'Новини про групові відвідування, маршрути, екскурсії та життя парку.',
		},
	];

	protected readonly socialButtons = [
		{ label: 'Instagram', url: 'https://www.instagram.com/park_arden_sataniv/' },
		{ label: 'Facebook', url: 'https://www.facebook.com/park.arden.2025/' },
		{ label: 'YouTube', url: 'https://www.youtube.com/channel/UCiIecihp7fyo5mnSISFrV1A' },
	];

	protected readonly ctaButtons = [
		{
			label: 'Екскурсії',
			link: '/ekskursii',
			className: 'bg-[#5f7f35] text-white hover:bg-[#4c692b]',
		},
		{
			label: 'Інформація для гостей',
			link: '/gostiam',
			className: 'border border-[#5f7f35] text-[#3d5f20] hover:bg-white',
		},
	];

	constructor() {
		const title =
			'Новини парку «АРДЕН» − події, екскурсії та історії тварин';
		const description =
			'Читайте новини Парку диких тварин «АРДЕН»: оновлення графіку, ціни, екскурсії, життя мешканців, сезонні історії та події парку.';

		this._title.setTitle(title);
		this._meta.updateTag({ name: 'description', content: description });
		this._meta.updateTag({ property: 'og:title', content: title });
		this._meta.updateTag({ property: 'og:description', content: description });
		this._meta.updateTag({ property: 'og:image', content: SEO_IMAGE });
		this._meta.updateTag({ name: 'twitter:title', content: title });
		this._meta.updateTag({ name: 'twitter:description', content: description });
		this._meta.updateTag({ name: 'twitter:image', content: SEO_IMAGE });
	}
}
