import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './pidtrymaty.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PidtrymatyComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-1');
	protected readonly missionImage = parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-2');
	protected readonly rescueStoriesImage = parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-3');
	protected readonly contactImage = parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-4');
	protected readonly finalCtaImage = parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-5');

	protected readonly heroButtons = [
		{ label: 'Зробити внесок', href: '#donation', variant: 'primary' },
		{ label: 'Познайомитись з тваринами', routerLink: '/tvaryny', variant: 'secondary' },
	];

	protected readonly supportOptions = [
		{
			title: 'Благодійний внесок',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-6'),
			text: 'Допоможіть фінансово, щоб парк міг забезпечувати тварин кормом, лікуванням і доглядом.',
			button: 'Зробити внесок',
		},
		{
			title: 'Допомога кормом',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-7'),
			text: 'Ви можете підтримати парк кормом або допомогти із закупівлею харчування для тварин.',
			button: 'Уточнити потреби',
		},
		{
			title: 'Купівля сувенірів',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-8'),
			text: 'Купуючи сувеніри у лавці парку, ви також підтримуєте його роботу.',
			button: 'Дізнатись більше',
		},
		{
			title: 'Підтримка конкретної тварини',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-9'),
			text: 'Оберіть тварину, історія якої вам близька, і допоможіть із її щоденним доглядом.',
			button: 'Переглянути тварин',
		},
		{
			title: 'Волонтерство',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-10'),
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
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-11'),
			text: 'Багато ведмедів потрапили до парку після життя в неналежних умовах і тепер мають простір для відновлення.',
		},
		{
			title: 'Великі коти',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-12'),
			text: 'Леви, тигри та інші хижаки потребують постійного догляду, правильного харчування й безпечного середовища.',
		},
		{
			title: 'Хижі птахи',
			image: parkardenImageForKey('src/app/pages/pidtrymaty/pidtrymaty.component.ts-13'),
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
		{ label: 'Екскурсії', routerLink: '/ekskursii', variant: 'secondary' },
	];
}
