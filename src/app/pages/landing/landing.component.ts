import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-1');
	protected readonly aboutImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-2');
	protected readonly bearsImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-3');
	protected readonly bridgeGalleryImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-4');
	protected readonly excursionsImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-5');
	protected readonly rescueStoriesImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-6');
	protected readonly supportImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-7');
	protected readonly contactsImage = parkardenImageForKey('src/app/pages/landing/landing.component.ts-8');

	protected readonly facts = [
		'Найбільший в Україні — сучасний парк для диких тварин',
		'32 га — природної території серед лісу',
		'160+ — тварин у парку',
		'1 км — оглядовий лісовий міст-галерея',
		'45 — ведмедів різних видів',
		'15–25 осіб — рекомендований розмір групи для екскурсії',
	];

	protected readonly experienceItems = [
		{
			title: 'Неповторна фауна',
			text: 'Ви зможете відчути унікальність дикої природи лісів подільського краю.',
		},
		{
			title: 'Цікаві екскурсії',
			text: 'Екскурсовод розповість про види тварин, їхнє походження, звички, харчування та історії порятунку.',
		},
		{
			title: 'Міст-галерея',
			text: 'Ви пройдете майже кілометровим оглядовим мостом-галереєю на висоті близько 5 метрів.',
		},
		{
			title: 'Сувенірна лавка',
			text: 'У парку можна придбати сувеніри, які нагадуватимуть про подорож до дикого лісу.',
		},
		{
			title: 'Прогулянка диким лісом',
			text: 'Маршрут проходить серед природного ландшафту, тиші, дерев і чистого повітря.',
		},
	];

	protected readonly animalCategories = [
		{
			title: 'Ведмеді',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-9'),
			text: 'Гордість парку − велика ведмежа колекція з бурими європейськими, гімалайськими та рідкісним бурим камчатським ведмедем.',
		},
		{
			title: 'Великі коти',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-10'),
			text: 'Білі леви, левенята, тигри та інші хижаки, які вражають силою, красою та характером.',
		},
		{
			title: 'Примати',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-11'),
			text: 'Капуцини, лемури, зелені мавпи та бабуїни − активні й цікаві мешканці парку.',
		},
		{
			title: 'Вовки',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-12'),
			text: 'Вовчі зграї живуть на території парку та нагадують про справжню дику природу.',
		},
		{
			title: 'Олені та копитні',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-13'),
			text: 'Благородні олені, муфлони, лані та інші тварини природного лісового середовища.',
		},
		{
			title: 'Птахи',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-14'),
			text: 'У реабілітаційному центрі можна побачити птахів родини яструбових, зокрема орлана.',
		},
	];

	protected readonly bearNames = [
		'Тоша',
		'Гоша',
		'Міша та Маша',
		'Коржик, Бублик і Машуня',
		'Даша та Ася',
		'Микита та Ілля',
	];

	protected readonly excursionDetails = [
		'Тривалість: 60 хвилин',
		'Формат: тільки в складі групи з екскурсоводом',
		'Рекомендована група: 15–25 осіб',
		'Реєстрація: мінімум за 1 день до візиту',
		'Екскурсії проводяться щодня',
	];

	protected readonly excursionSchedule = [
		'Понеділок–п’ятниця: щогодини з 10:00 до 17:00',
		'Субота–неділя: щогодини з 10:00 до 18:00',
	];

	protected readonly excursionPrices = [
		'Дорослий квиток — 400 грн',
		'Дитячий квиток — 300 грн',
		'Діти до 6 років — безкоштовно',
	];

	protected readonly seasons = [
		{
			title: 'Весна',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-15'),
			text: 'Природа прокидається, а тварини стають активнішими після зими.',
		},
		{
			title: 'Літо',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-16'),
			text: 'Найсоковитіший сезон для прогулянок, фото та сімейних екскурсій.',
		},
		{
			title: 'Осінь',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-17'),
			text: 'Теплі кольори лісу, спокійна атмосфера і красиві маршрути.',
		},
		{
			title: 'Зима',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-18'),
			text: 'Особлива тиша парку, сніг і зовсім інший настрій дикої природи.',
		},
	];

	protected readonly guestItems = [
		'Власна парковка на території',
		'Піцерія',
		'Сувенірна лавка',
		'Екскурсії щодня',
		'Вхід тільки з екскурсоводом',
		'З домашніми тваринами вхід на міст-галерею заборонено',
	];

	protected readonly galleryCards = [
		{
			title: 'Тварини парку',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-19'),
		},
		{
			title: 'Міст-галерея',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-20'),
		},
		{
			title: 'Природа Подільських Товтр',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-21'),
		},
		{
			title: 'Екскурсії',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-22'),
		},
		{
			title: '4 сезони',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-23'),
		},
		{
			title: 'Історії порятунку',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-24'),
		},
	];

	protected readonly supportOptions = [
		'Благодійний внесок',
		'Допомога кормом для тварин',
		'Купівля сувенірів',
		'Підтримка конкретної тварини',
	];

	protected readonly newsCards = [
		{
			title: 'Нова історія порятунку',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-25'),
			text: 'Дізнайтесь, як тварини знаходять безпечний дім у парку.',
		},
		{
			title: 'Сезонні екскурсії',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-26'),
			text: 'Що цікавого можна побачити в парку цієї пори року.',
		},
		{
			title: 'Життя мешканців',
			image: parkardenImageForKey('src/app/pages/landing/landing.component.ts-27'),
			text: 'Новини про тварин, їхній догляд і щоденне життя.',
		},
	];

	protected readonly contactItems = [
		'Адреса: вул. Курортна, 40/1, смт Сатанів, Хмельницька область',
		'Телефон: +38 (067) 313-44-00',
		'Email: info@parkarden.com.ua',
		'Графік: Пн-Пт 10:00–17:00, Сб-Нд 10:00–18:00',
		'Формат відвідування: тільки з екскурсоводом',
		'Запис: мінімум за 1 день до візиту',
	];
}
