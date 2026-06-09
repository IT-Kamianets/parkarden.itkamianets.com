import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './tvaryny.component.html',
	styleUrl: './tvaryny.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvarynyComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-1');
	protected readonly rescueCtaImage = parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-2');

	protected readonly filters = [
		'Усі тварини',
		'Ведмеді',
		'Великі коти',
		'Примати',
		'Вовки',
		'Олені та копитні',
		'Птахи',
		'Інші',
	];

	protected readonly sortOptions = ['За назвою', 'За категорією', 'Новіші спочатку'];

	protected readonly groupCards = [
		{
			title: 'Ведмеді',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-3'),
			text: 'Гордість парку − велика ведмежа колекція з бурими європейськими, гімалайськими та рідкісним бурим камчатським ведмедем.',
		},
		{
			title: 'Великі коти',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-4'),
			text: 'Леви, тигри та інші хижаки, які вражають силою, грацією та характером.',
		},
		{
			title: 'Примати',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-5'),
			text: 'Капуцини, лемури, зелені мавпи та бабуїни − активні й допитливі мешканці парку.',
		},
		{
			title: 'Вовки',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-6'),
			text: 'Вовчі зграї живуть на території парку та нагадують про справжній голос дикого лісу.',
		},
		{
			title: 'Олені та копитні',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-7'),
			text: 'Благородні олені, муфлони та лані доповнюють природну атмосферу парку.',
		},
		{
			title: 'Хижі птахи',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-8'),
			text: 'Орлан-білохвіст, яструб, канюк та інші хижі птахи, для яких створені комфортні умови.',
		},
	];

	protected readonly animalCards = [
		{
			name: 'Тоша',
			category: 'Ведмеді',
			slug: 'tosha',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-9'),
			text: 'Великий бурий ведмідь, один із найвідоміших мешканців парку.',
		},
		{
			name: 'Міша',
			category: 'Ведмеді',
			slug: 'misha',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-10'),
			text: 'Один із перших мешканців парку-притулку.',
		},
		{
			name: 'Маша',
			category: 'Ведмеді',
			slug: 'masha',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-11'),
			text: 'Ведмедиця, яка живе поруч із Мішею та має свою історію адаптації.',
		},
		{
			name: 'Гоша',
			category: 'Ведмеді',
			slug: 'gosha',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-12'),
			text: 'Гімалайський ведмідь із характерним світлим комірцем.',
		},
		{
			name: 'Ірка',
			category: 'Ведмеді',
			slug: 'irka',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-13'),
			text: 'Гімалайська ведмедиця з чорним шовковистим хутром.',
		},
		{
			name: 'Даша та Ася',
			category: 'Ведмеді',
			slug: 'dasha-ta-asya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-14'),
			text: 'Спритні ведмедиці, які вражають умінням лазити по деревах.',
		},
		{
			name: 'Бублик та Коржик',
			category: 'Ведмеді',
			slug: 'bublyk-ta-korzhyk',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-15'),
			text: 'Молоді активні ведмеді зі світлими комірцями.',
		},
		{
			name: 'Ніка та ведмежа',
			category: 'Ведмеді',
			slug: 'nika-ta-vedmezha',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-16'),
			text: 'Ведмежа родина, яка викликає особливе захоплення у відвідувачів.',
		},
		{
			name: 'Василь',
			category: 'Ведмеді',
			slug: 'vasyl',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-17'),
			text: 'Мешканець ведмежої колекції парку.',
		},
		{
			name: 'Микита та Ілля',
			category: 'Ведмеді',
			slug: 'mykyta-ta-illya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-18'),
			text: 'Дорослі ведмеді, що вражають силою та могутністю.',
		},
		{
			name: 'Яник',
			category: 'Ведмеді',
			slug: 'yanyk',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-19'),
			text: 'Один із мешканців ведмежої частини парку.',
		},
		{
			name: 'Рікі',
			category: 'Ведмеді',
			slug: 'riki',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-20'),
			text: 'Мешканець ведмежої колекції «АРДЕНУ».',
		},
		{
			name: 'Макс та Мері',
			category: 'Ведмеді',
			slug: 'maks-ta-meri',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-21'),
			text: 'Ведмежа пара з каталогу мешканців парку.',
		},
		{
			name: 'Грішка та Мішка',
			category: 'Ведмеді',
			slug: 'grishka-ta-mishka',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-22'),
			text: 'Мешканці ведмежої колекції парку.',
		},
		{
			name: 'Чук та Гек',
			category: 'Ведмеді',
			slug: 'chuk-ta-hek',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-23'),
			text: 'Ведмежий дует із каталогу парку.',
		},
		{
			name: 'Шарик',
			category: 'Ведмеді',
			slug: 'sharyk',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-24'),
			text: 'Один із ведмедів, які знайшли прихисток у парку.',
		},
		{
			name: 'Потап, Джек та Джон',
			category: 'Ведмеді',
			slug: 'potap-dzhek-ta-dzhon',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-25'),
			text: 'Троє мешканців ведмежої частини парку.',
		},
		{
			name: 'Максим',
			category: 'Ведмеді',
			slug: 'maksym',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-26'),
			text: 'Мешканець ведмежої колекції «АРДЕНУ».',
		},
		{
			name: 'Ведмежа сім’я',
			category: 'Ведмеді',
			slug: 'vedmezha-simya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-27'),
			text: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.',
		},
		{
			name: 'Білий лев Зевс',
			category: 'Великі коти',
			slug: 'bilyy-lev-zevs',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-28'),
			text: 'Білий лев, один із найефектніших великих котів парку.',
		},
		{
			name: 'Франц і Петро',
			category: 'Великі коти',
			slug: 'frants-i-petro',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-29'),
			text: 'Молоді левенята, які привертають увагу відвідувачів.',
		},
		{
			name: 'Люся',
			category: 'Великі коти',
			slug: 'lyusya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-30'),
			text: 'Представниця великих котів парку.',
		},
		{
			name: 'Лео',
			category: 'Великі коти',
			slug: 'leo',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-31'),
			text: 'Великий кіт із каталогу мешканців «АРДЕНУ».',
		},
		{
			name: 'Яся',
			category: 'Великі коти',
			slug: 'yasya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-32'),
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Пірат',
			category: 'Великі коти',
			slug: 'pirat',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-33'),
			text: 'Хижак із сильним характером і виразним образом.',
		},
		{
			name: 'Луна',
			category: 'Великі коти',
			slug: 'luna',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-34'),
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Одін',
			category: 'Великі коти',
			slug: 'odin',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-35'),
			text: 'Представник великих хижаків парку.',
		},
		{
			name: 'Султан',
			category: 'Великі коти',
			slug: 'sultan',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-36'),
			text: 'Великий кіт із каталогу парку.',
		},
		{
			name: 'Жозефіна',
			category: 'Великі коти',
			slug: 'zhozefina',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-37'),
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Ельза',
			category: 'Великі коти',
			slug: 'elza',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-38'),
			text: 'Представниця великих котів парку.',
		},
		{
			name: 'Авелія',
			category: 'Великі коти',
			slug: 'aveliya',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-39'),
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Валєра',
			category: 'Великі коти',
			slug: 'valyera',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-40'),
			text: 'Великий кіт із каталогу мешканців парку.',
		},
		{
			name: 'Льова',
			category: 'Великі коти',
			slug: 'lyova',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-41'),
			text: 'Представник секції великих котів.',
		},
		{
			name: 'Білий тигр',
			category: 'Великі коти',
			slug: 'bilyy-tyhr',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-42'),
			text: 'Білий тигр − один із найяскравіших хижаків парку.',
		},
		{
			name: 'Сімейство капуцинів',
			category: 'Примати',
			slug: 'simeystvo-kaputsyniv',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-43'),
			text: 'Активні та допитливі примати, за якими цікаво спостерігати.',
		},
		{
			name: 'Сімейство лемурів',
			category: 'Примати',
			slug: 'simeystvo-lemuriv',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-44'),
			text: 'Лемури − яскраві й рухливі мешканці парку.',
		},
		{
			name: 'Сімейство зелених мавп',
			category: 'Примати',
			slug: 'simeystvo-zelenyh-mavp',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-45'),
			text: 'Родина зелених мавп із характерною поведінкою та активністю.',
		},
		{
			name: 'Сімейство бабуїнів',
			category: 'Примати',
			slug: 'simeystvo-babuyiniv',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-46'),
			text: 'Бабуїни − сильні соціальні примати з виразною поведінкою.',
		},
		{
			name: 'Вовчі зграї',
			category: 'Вовки',
			slug: 'vovchi-zgrayi',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-47'),
			text: 'Вовки живуть зграями та створюють особливу атмосферу дикого лісу.',
		},
		{
			name: 'Благородні олені',
			category: 'Олені та копитні',
			slug: 'blahorodni-oleni',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-48'),
			text: 'Красиві лісові мешканці з розлогими рогами.',
		},
		{
			name: 'Муфлони',
			category: 'Олені та копитні',
			slug: 'muflony',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-49'),
			text: 'Копитні тварини, які доповнюють природну різноманітність парку.',
		},
		{
			name: 'Лані',
			category: 'Олені та копитні',
			slug: 'lani',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-50'),
			text: 'Спокійні й граційні мешканці природного простору.',
		},
		{
			name: 'Орлан-білохвіст',
			category: 'Птахи',
			slug: 'orlan-bilohvist',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-51'),
			text: 'Один із найбільших пернатих хижаків Європи.',
		},
		{
			name: 'Яструб',
			category: 'Птахи',
			slug: 'yastrub',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-52'),
			text: 'Хижий птах родини яструбових.',
		},
		{
			name: 'Канюк',
			category: 'Птахи',
			slug: 'kanyuk',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-53'),
			text: 'Хижий птах, якого можна побачити у реабілітаційному центрі.',
		},
		{
			name: 'Підорлик',
			category: 'Птахи',
			slug: 'pidorlyk',
			image: parkardenImageForKey('src/app/pages/tvaryny/tvaryny.component.ts-54'),
			text: 'Представник денних хижих птахів України.',
		},
	];

	protected readonly rescueCtaButtons = [
		{
			label: 'Підтримати тварин',
			path: '/pidtrymaty',
			style: 'primary',
		},
		{
			label: 'Дізнатись про парк',
			path: '/pro-park',
			style: 'secondary',
		},
	];

	protected readonly finalCtaButtons = [
		{
			label: 'Записатись на екскурсію',
			path: '/ekskursii',
			style: 'primary',
		},
		{
			label: 'Інформація для гостей',
			path: '/gostiam',
			style: 'secondary',
		},
	];
}
