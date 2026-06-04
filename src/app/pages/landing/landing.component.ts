import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	// TODO: Replace with strong hero photo or video frame: wild animal, forest, bridge-gallery, or natural Park Arden atmosphere.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real wide photo of Park Arden territory, forest path, bridge-gallery, or natural landscape.
	protected readonly aboutImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with emotional real photo of bears in Park Arden forest enclosure.
	protected readonly bearsImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of the forest bridge-gallery.
	protected readonly bridgeGalleryImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of visitors on excursion, guide with group, or bridge-gallery route.
	protected readonly excursionsImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of rescued animal, care moment, or emotional animal portrait.
	protected readonly rescueStoriesImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with emotional real photo of rescued animal or animal care moment.
	protected readonly supportImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Use placeholder for now if map is not implemented. Later replace with Google Maps embed or map preview.
	protected readonly contactsImage = TEMPORARY_PLACEHOLDER_IMAGE;

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
			// TODO: Replace with real bear photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Гордість парку − велика ведмежа колекція з бурими європейськими, гімалайськими та рідкісним бурим камчатським ведмедем.',
		},
		{
			title: 'Великі коти',
			// TODO: Replace with real big cat photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Білі леви, левенята, тигри та інші хижаки, які вражають силою, красою та характером.',
		},
		{
			title: 'Примати',
			// TODO: Replace with real primates photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Капуцини, лемури, зелені мавпи та бабуїни − активні й цікаві мешканці парку.',
		},
		{
			title: 'Вовки',
			// TODO: Replace with real wolf photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Вовчі зграї живуть на території парку та нагадують про справжню дику природу.',
		},
		{
			title: 'Олені та копитні',
			// TODO: Replace with real deer or hoofed animals photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Благородні олені, муфлони, лані та інші тварини природного лісового середовища.',
		},
		{
			title: 'Птахи',
			// TODO: Replace with real bird photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
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
			// TODO: Replace with real spring photo of animals or park nature.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Природа прокидається, а тварини стають активнішими після зими.',
		},
		{
			title: 'Літо',
			// TODO: Replace with real summer photo with green nature and animals.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Найсоковитіший сезон для прогулянок, фото та сімейних екскурсій.',
		},
		{
			title: 'Осінь',
			// TODO: Replace with real autumn photo with warm forest colors and animals.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Теплі кольори лісу, спокійна атмосфера і красиві маршрути.',
		},
		{
			title: 'Зима',
			// TODO: Replace with real winter photo with snow, animals, or quiet park atmosphere.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
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
			// TODO: Replace with real animal gallery photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
		},
		{
			title: 'Міст-галерея',
			// TODO: Replace with real bridge-gallery photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
		},
		{
			title: 'Природа Подільських Товтр',
			// TODO: Replace with real landscape photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
		},
		{
			title: 'Екскурсії',
			// TODO: Replace with real visitors/excursion photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
		},
		{
			title: '4 сезони',
			// TODO: Replace with real seasonal photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
		},
		{
			title: 'Історії порятунку',
			// TODO: Replace with real rescue story animal photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
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
			// TODO: Replace with real rescue story news image.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Дізнайтесь, як тварини знаходять безпечний дім у парку.',
		},
		{
			title: 'Сезонні екскурсії',
			// TODO: Replace with real seasonal excursion image.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Що цікавого можна побачити в парку цієї пори року.',
		},
		{
			title: 'Життя мешканців',
			// TODO: Replace with real animal life/care image.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
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
