import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './pidtrymaty.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PidtrymatyComponent {
	// TODO: Replace with emotional photo of rescued animal, close-up animal portrait, or care moment from Park Arden.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of rescued animal or animal care in Park Arden.
	protected readonly missionImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real collage or emotional photos of rescued animals.
	protected readonly rescueStoriesImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of park entrance, administrator, or team.
	protected readonly contactImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with strong closing photo of animal looking into camera, rescued animal, or warm park atmosphere.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

	protected readonly heroButtons = [
		{ label: 'Зробити внесок', href: '#donation', variant: 'primary' },
		{ label: 'Познайомитись з тваринами', routerLink: '/tvaryny', variant: 'secondary' },
	];

	protected readonly supportOptions = [
		{
			title: 'Благодійний внесок',
			// TODO: Replace with real photo connected with donation/support campaign.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Допоможіть фінансово, щоб парк міг забезпечувати тварин кормом, лікуванням і доглядом.',
			button: 'Зробити внесок',
		},
		{
			title: 'Допомога кормом',
			// TODO: Replace with real photo of animal feeding or food preparation.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Ви можете підтримати парк кормом або допомогти із закупівлею харчування для тварин.',
			button: 'Уточнити потреби',
		},
		{
			title: 'Купівля сувенірів',
			// TODO: Replace with real photo of souvenir shop.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Купуючи сувеніри у лавці парку, ви також підтримуєте його роботу.',
			button: 'Дізнатись більше',
		},
		{
			title: 'Підтримка конкретної тварини',
			// TODO: Replace with real emotional portrait of animal available for support.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Оберіть тварину, історія якої вам близька, і допоможіть із її щоденним доглядом.',
			button: 'Переглянути тварин',
		},
		{
			title: 'Волонтерство',
			// TODO: Replace with real photo of volunteers, park team, or support activity.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Якщо парк відкриє волонтерські програми, тут можна буде залишити заявку на участь.',
			button: 'Залишити заявку',
		},
	];

	protected readonly donationAmounts = ['100 грн', '300 грн', '500 грн', '1000 грн', 'Інша сума'];

	protected readonly bankDetails = [
		'Отримувач: уточнюється',
		'IBAN: уточнюється',
		'ЄДРПОУ: уточнюється',
		'Призначення платежу: благодійна допомога парку «АРДЕН»',
	];

	protected readonly donationHelpItems = [
		{
			title: 'Харчування тварин',
			text: 'Щоденний раціон для ведмедів, великих котів, вовків, приматів, птахів та інших мешканців парку.',
		},
		{
			title: 'Ветеринарний догляд',
			text: 'Огляд, лікування, профілактика та підтримка здоров’я тварин.',
		},
		{
			title: 'Облаштування простору',
			text: 'Догляд за вольєрами, барлогами, маршрутами та природною територією.',
		},
		{
			title: 'Реабілітація',
			text: 'Адаптація тварин після складного минулого та створення спокійних умов для відновлення.',
		},
		{
			title: 'Екоосвіта',
			text: 'Розвиток екскурсій, матеріалів і програм, які формують відповідальне ставлення до природи.',
		},
	];

	protected readonly rescueStoryCards = [
		{
			title: 'Ведмеді',
			// TODO: Replace with real bear rescue/story photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Багато ведмедів потрапили до парку після життя в неналежних умовах і тепер мають простір для відновлення.',
		},
		{
			title: 'Великі коти',
			// TODO: Replace with real big cat rescue/story photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Леви, тигри та інші хижаки потребують постійного догляду, правильного харчування й безпечного середовища.',
		},
		{
			title: 'Хижі птахи',
			// TODO: Replace with real bird rehabilitation photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'У реабілітаційному центрі створюються умови для птахів, які потребують захисту та догляду.',
		},
	];

	protected readonly transparencyItems = [
		'Актуальні потреби парку',
		'Фото та новини про тварин',
		'Звіти про допомогу',
		'Історії тварин, яким вдалося допомогти',
	];

	protected readonly contactItems = [
		'Телефон: +38 (067) 313-44-00',
		'Email: info@parkarden.com.ua',
	];

	protected readonly contactButtons = [
		{ label: 'Зателефонувати', href: 'tel:+380673134400', variant: 'primary' },
		{ label: 'Написати нам', href: 'mailto:info@parkarden.com.ua', variant: 'secondary' },
	];

	protected readonly finalCtaButtons = [
		{ label: 'Зробити внесок', href: '#donation', variant: 'primary' },
		{ label: 'Записатись на екскурсію', routerLink: '/ekskursii', variant: 'secondary' },
	];
}
