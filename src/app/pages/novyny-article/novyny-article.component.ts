import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';

interface NewsArticle {
	slug: string;
	title: string;
	category: string;
	dateLabel: string;
	image: string;
	excerpt: string;
	paragraphs: string[];
	bullets: string[];
}

const SEO_IMAGE = 'https://cdn-it.webart.work/parkarden/animals_processed_03.webp';

const NEWS_ARTICLES: NewsArticle[] = [
	{
		slug: 'zmina-vartosti-kvytkiv',
		title: 'Зміна вартості квитків',
		category: 'Оголошення',
		dateLabel: 'Оновлено з 18.05.2026',
		image: parkardenImageForKey('src/app/pages/novyny-article/novyny-article.component.ts-1'),
		excerpt:
			'З 18.05.2026 діють оновлені ціни на відвідування парку: дорослий квиток − 400 грн, дитячий квиток 6–14 років − 300 грн.',
		paragraphs: [
			'З 18.05.2026 у Парку диких тварин «АРДЕН» діють оновлені ціни на вхідні квитки.',
			'Дорослий вхідний квиток коштує 400 грн.',
			'Дитячий вхідний квиток для школярів або дітей від 6 до 14 років коштує 300 грн.',
			'Діти до 6 років відвідують парк безкоштовно, виключно у супроводі дорослих.',
		],
		bullets: [
			'Дорослий квиток − 400 грн',
			'Дитячий квиток 6–14 років − 300 грн',
			'Діти до 6 років − безкоштовно',
			'Діти відвідують парк лише у супроводі дорослих',
		],
	},
	{
		slug: 'praczyuyemo-kozhen-den',
		title: 'Працюємо кожен день',
		category: 'Для гостей',
		dateLabel: 'Актуальна інформація для гостей',
		image: parkardenImageForKey('src/app/pages/novyny-article/novyny-article.component.ts-2'),
		excerpt:
			'Парк працює щодня, екскурсії стартують з 10:00 та проводяться щогодини.',
		paragraphs: [
			'Парк диких тварин «АРДЕН» працює кожен день.',
			'У вихідні та святкові дні парк також приймає відвідувачів.',
			'Усі екскурсії розпочинаються з 10:00 та проводяться щогодини.',
			'Тривалість екскурсії − мінімум 60 хвилин.',
			'Вхід на оглядовий міст дозволений виключно у складі групи, яку очолює екскурсовод.',
			'Без екскурсовода самостійно зайти на міст не можна.',
			'За приміщенням каси знаходиться піцерія, де можна перекусити.',
			'З домашніми тваринами вхід на оглядовий міст заборонено.',
		],
		bullets: [
			'Парк працює щодня',
			'Екскурсії стартують з 10:00',
			'Екскурсії проводяться щогодини',
			'Тривалість екскурсії − мінімум 60 хвилин',
			'Вхід на міст тільки з екскурсоводом',
		],
	},
	{
		slug: 'onovlennya-grafiku-ekskursij-parku-hyzhakiv',
		title: 'Оновлення графіку екскурсій «Парку хижаків»',
		category: 'Екскурсії',
		dateLabel: 'Архівне оголошення',
		image: parkardenImageForKey('src/app/pages/novyny-article/novyny-article.component.ts-3'),
		excerpt:
			'Повідомлення про зміни у графіку екскурсій парку на жовтень-листопад.',
		paragraphs: [
			'Шановні відвідувачі!',
			'Звертаємо вашу увагу на зміни в графіку роботи «Парку хижаків» на жовтень та листопад.',
			'Остання екскурсія у цей період розпочинається о 17:00.',
			'Перед візитом рекомендуємо уточнювати актуальний графік та записуватись заздалегідь.',
		],
		bullets: [
			'Оголошення стосується графіку на жовтень-листопад',
			'Остання екскурсія − о 17:00',
			'Перед поїздкою варто перевірити актуальний час роботи',
		],
	},
	{
		slug: 'nablyzhayetsya-zyma',
		title: 'Наближається зима',
		category: '4 сезони',
		dateLabel: 'Сезонна новина',
		image: 'https://cdn-it.webart.work/parkarden/winter_2024_01_08_123.webp',
		excerpt:
			'Більшість ведмедів у парку вже дрімають у барлогах, але іноді відвідувачам щастить побачити їх і взимку.',
		paragraphs: [
			'Більшість ведмедів у парку вже дрімають у барлогах.',
			'Але бувають і такі, як дорослий ведмідь Пафнутій: вийде на декілька годин, померзне, побродить і знову, позіхаючи, мерщій у барліг.',
			'Тож відвідувачам може поталанити побачити цих господарів лісу і взимку.',
		],
		bullets: [
			'Взимку більшість ведмедів дрімає у барлогах',
			'Деякі ведмеді можуть виходити на короткий час',
			'Зимовий парк має особливу тиху атмосферу',
		],
	},
	{
		slug: 'motrya-z-vedmezhatamy',
		title: 'Мотря з ведмежатами',
		category: 'Тварини',
		dateLabel: 'Історія з життя парку',
		image: 'https://cdn-it.webart.work/parkarden/bears_113.webp',
		excerpt:
			'Чотиримісячні ведмежата з мамою Мотрею досліджують територію вольєра.',
		paragraphs: [
			'Вже чотиримісячні ведмежата з мамою Мотрею досліджують територію вольєра.',
			'Все треба спробувати, всюди залізти, але під пильним доглядом мами.',
			'Такі моменти показують живий характер тварин і турботу, яку можна побачити під час спостереження за мешканцями парку.',
		],
		bullets: [
			'Ведмежата досліджують територію вольєра',
			'Мотря уважно доглядає за малюками',
			'Це одна з теплих історій з життя парку',
		],
	},
	{
		slug: 'vesnyani-rozvagy-vedmezhat',
		title: 'Весняні розваги ведмежат',
		category: '4 сезони',
		dateLabel: 'Весняна історія',
		image: 'https://cdn-it.webart.work/parkarden/bears_54.webp',
		excerpt:
			'Навесні молоді ведмежата можуть вилізти на дерево та поласувати першими зеленими листочками.',
		paragraphs: [
			'На деревах з’являються перші зелені листочки, які дуже смакують ведмедям.',
			'Старші ведмеді мусять задовольнятися гіллям, яке ламає вітер.',
			'А молоді ведмежата мають змогу вилізти та посмакувати прямо на дереві.',
			'Приїжджайте, самі побачите!',
		],
		bullets: [
			'Весна робить ведмедів активнішими',
			'Молоді ведмежата можуть лазити по деревах',
			'Перші зелені листочки дуже смакують тваринам',
		],
	},
	{
		slug: 'gimalajski-vedmedi-vzhe-potrohu-vyhodyat-z-berlogy',
		title: 'Гімалайські ведмеді вже потроху виходять з берлоги',
		category: 'Тварини',
		dateLabel: 'Сезонна історія',
		image: 'https://cdn-it.webart.work/parkarden/bears_03.webp',
		excerpt:
			'Гімалайський ведмідь Гоша вийшов з барлоги раніше та навіть спробував вилізти на дерево.',
		paragraphs: [
			'Цього року гімалайський ведмідь Гоша вийшов з барлоги раніше.',
			'Скоріше за все, його розбудив сусід по території Тоша.',
			'Вдалося відзняти, як Гоша силкується вилізти на дерево.',
			'У підсумку він підліз тільки на один метр.',
			'Треба ще тренуватися.',
		],
		bullets: [
			'Гоша − гімалайський ведмідь',
			'Він вийшов з барлоги раніше',
			'Спробував вилізти на дерево',
			'Поруч на території перебуває Тоша',
		],
	},
];

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './novyny-article.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovynyArticleComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);

	protected readonly article = NEWS_ARTICLES.find(
		(article) => article.slug === this._route.snapshot.paramMap.get('slug'),
	);
	protected readonly relatedNews = this.article
		? NEWS_ARTICLES.filter((article) => article.slug !== this.article?.slug).slice(0, 3)
		: NEWS_ARTICLES.slice(0, 3);

	constructor() {
		this._setSeo();
	}

	private _setSeo(): void {
		if (!this.article) {
			this._title.setTitle('Новину не знайдено');
			this._meta.updateTag({
				name: 'description',
				content:
					'Можливо, сторінку було переміщено або ця новина ще готується.',
			});
			return;
		}

		const title = `${this.article.title} − новини парку «АРДЕН»`;
		const description = this.article.excerpt;

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
