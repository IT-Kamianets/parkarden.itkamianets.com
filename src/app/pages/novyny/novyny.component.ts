import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface NewsCard {
	title: string;
	slug: string;
	category: string;
	date: string;
	text: string;
	image: string;
	imageTodo: string;
}

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';
const SEO_IMAGE = 'https://parkarden.itkamianets.com/logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './novyny.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovynyComponent {
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);

	// TODO: Replace with real wide photo of park life: animal, visitors, bridge-gallery, or seasonal park atmosphere.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of visitors, animals, or social media-style park content.
	protected readonly followImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with strong closing photo of animal, bridge-gallery, or visitors on excursion.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

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
			// TODO: Replace with real image for ticket price update or park entrance.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real image for ticket price update or park entrance.',
			text: 'З 18.05.2026 діють оновлені ціни: дорослий квиток − 400 грн, дитячий квиток 6–14 років − 300 грн. Діти відвідують парк лише у супроводі дорослих.',
		},
		{
			title: 'Працюємо кожен день',
			slug: 'praczyuyemo-kozhen-den',
			category: 'Екскурсії',
			date: 'Актуальна інформація для гостей',
			// TODO: Replace with real image of visitors on excursion or park entrance.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real image of visitors on excursion or park entrance.',
			text: 'Парк працює щодня. Екскурсії розпочинаються з 10:00 та проводяться щогодини. Тривалість екскурсії − мінімум 60 хвилин.',
		},
		{
			title: 'Оновлення графіку екскурсій',
			slug: 'onovlennya-grafiku-ekskursij-parku-hyzhakiv',
			category: 'Екскурсії',
			date: 'Архівне оголошення',
			// TODO: Replace with real image of guide, group, or bridge-gallery route.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real image of guide, group, or bridge-gallery route.',
			text: 'Повідомлення про зміни у графіку екскурсій парку. Перед візитом завжди перевіряйте актуальний час роботи та записуйтеся заздалегідь.',
		},
	];

	protected readonly newsCards: NewsCard[] = [
		{
			title: 'Наближається зима',
			slug: 'nablyzhayetsya-zyma',
			category: '4 сезони',
			date: 'Архівна новина',
			// TODO: Replace with real winter photo of animals or park nature.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real winter photo of animals or park nature.',
			text: 'Зима змінює настрій парку: тварини поводяться інакше, ліс стає тихішим, а маршрути відкривають зовсім іншу атмосферу.',
		},
		{
			title: 'Мотря з ведмежатами',
			slug: 'motrya-z-vedmezhatamy',
			category: 'Тварини',
			date: 'Архівна історія',
			// TODO: Replace with real photo of Мотря with bear cubs.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Мотря with bear cubs.',
			text: 'Історія з життя ведмежої родини, яка показує турботу, характер і особливі моменти мешканців парку.',
		},
		{
			title: 'Весняні розваги ведмежат',
			slug: 'vesnyani-rozvagy-vedmezhat',
			category: '4 сезони',
			date: 'Архівна історія',
			// TODO: Replace with real spring photo of bear cubs.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real spring photo of bear cubs.',
			text: 'Весна приносить більше руху, гри та активності. Ведмежата відкривають світ навколо себе по-новому.',
		},
		{
			title: 'Гімалайські ведмеді',
			slug: 'himalayski-vedmedi',
			category: 'Тварини',
			date: 'Архівна історія',
			// TODO: Replace with real photo of Himalayan bears.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Himalayan bears.',
			text: 'Гімалайські ведмеді вирізняються темним хутром, світлим комірцем і спритністю, яка особливо помітна серед дерев.',
		},
		{
			title: 'Осіннє поповнення великих котячих',
			slug: 'osinnye-popovnennya-velykyh-kotyachyh',
			category: 'Тварини',
			date: 'Архівна новина',
			// TODO: Replace with real photo of big cats from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of big cats from Park Arden.',
			text: 'Поповнення секції великих котячих стало яскравою подією для парку та відвідувачів.',
		},
		{
			title: 'Хижі птахи у парку',
			slug: 'hyzhi-ptahy-u-parku',
			category: 'Тварини',
			date: 'Матеріал про мешканців',
			// TODO: Replace with real photo of eagle, hawk, buzzard, or other bird from the rehabilitation center.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real photo of eagle, hawk, buzzard, or other bird from the rehabilitation center.',
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

	protected readonly socialButtons = ['Instagram', 'Facebook', 'YouTube'];

	protected readonly ctaButtons = [
		{
			label: 'Записатись на екскурсію',
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
		// TODO: Replace with wide photo of Park Arden animals, visitors, bridge-gallery, or fresh park news moment. Best ratio: 1200x630 for Open Graph.
		this._meta.updateTag({ property: 'og:image', content: SEO_IMAGE });
		this._meta.updateTag({ name: 'twitter:title', content: title });
		this._meta.updateTag({ name: 'twitter:description', content: description });
		// TODO: Replace with wide photo of Park Arden animals, visitors, bridge-gallery, or fresh park news moment. Best ratio: 1200x630 for Twitter.
		this._meta.updateTag({ name: 'twitter:image', content: SEO_IMAGE });
	}
}
