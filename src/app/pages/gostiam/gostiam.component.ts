import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './gostiam.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GostiamComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-1');
	protected readonly rulesImage = parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-2');
	protected readonly mapImage = parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-3');
	protected readonly finalCtaImage = parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-4');

	protected readonly quickInfoCards = [
		{
			title: 'Формат відвідування',
			text: 'Вхід на територію парку тільки в складі групи з екскурсоводом.',
		},
		{
			title: 'Тривалість екскурсії',
			text: 'Екскурсія триває 60 хвилин.',
		},
		{
			title: 'Попередній запис',
			text: 'Для групового відвідування потрібна реєстрація мінімум за 1 день.',
		},
		{
			title: 'Рекомендована група',
			text: '15–25 осіб.',
		},
		{
			title: 'Парковка',
			text: 'На території є власна парковка.',
		},
	];

	protected readonly scheduleCards = [
		{
			title: 'Понеділок − п’ятниця',
			time: 'Щогодини з 10:00 до 17:00',
		},
		{
			title: 'Субота − неділя',
			time: 'Щогодини з 10:00 до 18:00',
		},
	];

	protected readonly priceCards = [
		{
			title: 'Дорослий вхідний квиток',
			price: '400 грн',
			text: 'Для дорослих відвідувачів.',
		},
		{
			title: 'Дитячий вхідний квиток',
			price: '300 грн',
			text: 'Для школярів або дітей від 6 до 14 років, виключно в супроводі дорослих.',
		},
		{
			title: 'Діти до 6 років',
			price: 'Безкоштовно',
			text: 'Виключно в супроводі дорослих.',
		},
	];

	protected readonly rules = [
		'Вхід на територію парку дозволений тільки в складі групи, яку очолює екскурсовод.',
		'Самостійний вхід на територію парку заборонено.',
		'З домашніми тваринами вхід на оглядовий міст-галерею заборонено.',
		'Діти можуть відвідувати парк тільки у супроводі дорослих.',
		'Для групового відвідування потрібен попередній запис.',
		'Рекомендований розмір групи − 15–25 осіб.',
		'Під час екскурсії потрібно дотримуватись інструкцій екскурсовода.',
	];

	protected readonly territoryItems = [
		{
			title: 'Власна парковка',
			image: parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-5'),
			text: 'Для гостей передбачена власна парковка на території.',
		},
		{
			title: 'Піцерія',
			image: parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-6'),
			text: 'Після прогулянки можна смачно поїсти та відпочити.',
		},
		{
			title: 'Сувенірна лавка',
			image: parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-7'),
			text: 'Тут можна придбати чашку з логотипом парку, фотографії тварин, магніти та інші сувеніри.',
		},
		{
			title: 'Природний маршрут',
			image: parkardenImageForKey('src/app/pages/gostiam/gostiam.component.ts-8'),
			text: 'Прогулянка проходить серед лісу, чистого повітря та природних краєвидів.',
		},
	];

	protected readonly contactItems = [
		'Телефон: +38 (067) 313-44-00',
		'Email: info@parkarden.com.ua',
		'Адреса: вул. Курортна, 40/1, смт Сатанів, Хмельницька область',
	];

	protected readonly faqItems = [
		{
			question: 'Чи можна зайти в парк самостійно?',
			answer: 'Ні. Вхід на територію парку дозволений тільки в складі групи з екскурсоводом.',
		},
		{
			question: 'Скільки триває екскурсія?',
			answer: 'Екскурсія триває 60 хвилин.',
		},
		{
			question: 'Чи потрібен попередній запис?',
			answer: 'Так. Для групового відвідування потрібна попередня реєстрація мінімум за 1 день.',
		},
		{
			question: 'Який рекомендований розмір групи?',
			answer: 'Рекомендований розмір групи − 15–25 осіб.',
		},
		{
			question: 'Чи можна приходити з дітьми?',
			answer: 'Так. Діти можуть відвідувати парк у супроводі дорослих. Для дітей до 6 років вхід безкоштовний.',
		},
		{
			question: 'Чи можна приходити з домашніми тваринами?',
			answer: 'З домашніми тваринами вхід на оглядовий міст-галерею заборонено.',
		},
		{
			question: 'Чи є парковка?',
			answer: 'Так. На території є власна парковка для гостей.',
		},
		{
			question: 'Чи можна поїсти на території?',
			answer: 'Так. У парку є піцерія.',
		},
	];

	protected readonly heroButtons = [
		{ label: 'Записатись на екскурсію', path: '/ekskursii', fragment: undefined, style: 'primary' },
		{ label: 'Як дістатись', path: '/gostiam', fragment: 'how-to-get-there', style: 'secondary' },
	];

	protected readonly finalButtons = [
		{ label: 'Записатись на екскурсію', path: '/ekskursii', style: 'primary' },
		{ label: 'Переглянути тварин', path: '/tvaryny', style: 'secondary' },
	];
}
