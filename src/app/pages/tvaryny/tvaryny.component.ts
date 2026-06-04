import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './tvaryny.component.html',
	styleUrl: './tvaryny.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvarynyComponent {
	// TODO: Replace with wide photo of several Park Arden animals or strong animal portrait in forest surroundings.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with emotional photo of rescued animal, animal care, or close-up portrait.
	protected readonly rescueCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

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
			// TODO: Replace with real bear photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Гордість парку − велика ведмежа колекція з бурими європейськими, гімалайськими та рідкісним бурим камчатським ведмедем.',
		},
		{
			title: 'Великі коти',
			// TODO: Replace with real lion, tiger, or big cat photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Леви, тигри та інші хижаки, які вражають силою, грацією та характером.',
		},
		{
			title: 'Примати',
			// TODO: Replace with real primates photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Капуцини, лемури, зелені мавпи та бабуїни − активні й допитливі мешканці парку.',
		},
		{
			title: 'Вовки',
			// TODO: Replace with real wolf photo from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Вовчі зграї живуть на території парку та нагадують про справжній голос дикого лісу.',
		},
		{
			title: 'Олені та копитні',
			// TODO: Replace with real deer, mouflon, or fallow deer photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Благородні олені, муфлони та лані доповнюють природну атмосферу парку.',
		},
		{
			title: 'Хижі птахи',
			// TODO: Replace with real bird photo from the rehabilitation center.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Орлан-білохвіст, яструб, канюк та інші хижі птахи, для яких створені комфортні умови.',
		},
	];

	protected readonly animalCards = [
		{
			name: 'Тоша',
			category: 'Ведмеді',
			slug: 'tosha',
			// TODO: Replace with real photo of bear Тоша.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Тоша.',
			text: 'Великий бурий ведмідь, один із найвідоміших мешканців парку.',
		},
		{
			name: 'Міша',
			category: 'Ведмеді',
			slug: 'misha',
			// TODO: Replace with real photo of bear Міша.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Міша.',
			text: 'Один із перших мешканців парку-притулку.',
		},
		{
			name: 'Маша',
			category: 'Ведмеді',
			slug: 'masha',
			// TODO: Replace with real photo of bear Маша.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Маша.',
			text: 'Ведмедиця, яка живе поруч із Мішею та має свою історію адаптації.',
		},
		{
			name: 'Гоша',
			category: 'Ведмеді',
			slug: 'gosha',
			// TODO: Replace with real photo of Himalayan bear Гоша.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Himalayan bear Гоша.',
			text: 'Гімалайський ведмідь із характерним світлим комірцем.',
		},
		{
			name: 'Ірка',
			category: 'Ведмеді',
			slug: 'irka',
			// TODO: Replace with real photo of bear Ірка.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Ірка.',
			text: 'Гімалайська ведмедиця з чорним шовковистим хутром.',
		},
		{
			name: 'Даша та Ася',
			category: 'Ведмеді',
			slug: 'dasha-ta-asya',
			// TODO: Replace with real photo of bears Даша та Ася.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Даша та Ася.',
			text: 'Спритні ведмедиці, які вражають умінням лазити по деревах.',
		},
		{
			name: 'Бублик та Коржик',
			category: 'Ведмеді',
			slug: 'bublyk-ta-korzhyk',
			// TODO: Replace with real photo of bears Бублик та Коржик.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Бублик та Коржик.',
			text: 'Молоді активні ведмеді зі світлими комірцями.',
		},
		{
			name: 'Ніка та ведмежа',
			category: 'Ведмеді',
			slug: 'nika-ta-vedmezha',
			// TODO: Replace with real photo of Ніка та ведмежа.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Ніка та ведмежа.',
			text: 'Ведмежа родина, яка викликає особливе захоплення у відвідувачів.',
		},
		{
			name: 'Василь',
			category: 'Ведмеді',
			slug: 'vasyl',
			// TODO: Replace with real photo of bear Василь.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Василь.',
			text: 'Мешканець ведмежої колекції парку.',
		},
		{
			name: 'Микита та Ілля',
			category: 'Ведмеді',
			slug: 'mykyta-ta-illya',
			// TODO: Replace with real photo of bears Микита та Ілля.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Микита та Ілля.',
			text: 'Дорослі ведмеді, що вражають силою та могутністю.',
		},
		{
			name: 'Яник',
			category: 'Ведмеді',
			slug: 'yanyk',
			// TODO: Replace with real photo of bear Яник.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Яник.',
			text: 'Один із мешканців ведмежої частини парку.',
		},
		{
			name: 'Рікі',
			category: 'Ведмеді',
			slug: 'riki',
			// TODO: Replace with real photo of bear Рікі.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Рікі.',
			text: 'Мешканець ведмежої колекції «АРДЕНУ».',
		},
		{
			name: 'Макс та Мері',
			category: 'Ведмеді',
			slug: 'maks-ta-meri',
			// TODO: Replace with real photo of bears Макс та Мері.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Макс та Мері.',
			text: 'Ведмежа пара з каталогу мешканців парку.',
		},
		{
			name: 'Грішка та Мішка',
			category: 'Ведмеді',
			slug: 'grishka-ta-mishka',
			// TODO: Replace with real photo of bears Грішка та Мішка.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Грішка та Мішка.',
			text: 'Мешканці ведмежої колекції парку.',
		},
		{
			name: 'Чук та Гек',
			category: 'Ведмеді',
			slug: 'chuk-ta-hek',
			// TODO: Replace with real photo of bears Чук та Гек.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Чук та Гек.',
			text: 'Ведмежий дует із каталогу парку.',
		},
		{
			name: 'Шарик',
			category: 'Ведмеді',
			slug: 'sharyk',
			// TODO: Replace with real photo of bear Шарик.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Шарик.',
			text: 'Один із ведмедів, які знайшли прихисток у парку.',
		},
		{
			name: 'Потап, Джек та Джон',
			category: 'Ведмеді',
			slug: 'potap-dzhek-ta-dzhon',
			// TODO: Replace with real photo of bears Потап, Джек та Джон.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bears Потап, Джек та Джон.',
			text: 'Троє мешканців ведмежої частини парку.',
		},
		{
			name: 'Максим',
			category: 'Ведмеді',
			slug: 'maksym',
			// TODO: Replace with real photo of bear Максим.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear Максим.',
			text: 'Мешканець ведмежої колекції «АРДЕНУ».',
		},
		{
			name: 'Ведмежа сім’я',
			category: 'Ведмеді',
			slug: 'vedmezha-simya',
			// TODO: Replace with real photo of bear family.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of bear family.',
			text: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.',
		},
		{
			name: 'Білий лев Зевс',
			category: 'Великі коти',
			slug: 'bilyy-lev-zevs',
			// TODO: Replace with real photo of white lion Зевс.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of white lion Зевс.',
			text: 'Білий лев, один із найефектніших великих котів парку.',
		},
		{
			name: 'Франц і Петро',
			category: 'Великі коти',
			slug: 'frants-i-petro',
			// TODO: Replace with real photo of lion cubs Франц і Петро.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of lion cubs Франц і Петро.',
			text: 'Молоді левенята, які привертають увагу відвідувачів.',
		},
		{
			name: 'Люся',
			category: 'Великі коти',
			slug: 'lyusya',
			// TODO: Replace with real photo of Люся.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Люся.',
			text: 'Представниця великих котів парку.',
		},
		{
			name: 'Лео',
			category: 'Великі коти',
			slug: 'leo',
			// TODO: Replace with real photo of Лео.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Лео.',
			text: 'Великий кіт із каталогу мешканців «АРДЕНУ».',
		},
		{
			name: 'Яся',
			category: 'Великі коти',
			slug: 'yasya',
			// TODO: Replace with real photo of Яся.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Яся.',
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Пірат',
			category: 'Великі коти',
			slug: 'pirat',
			// TODO: Replace with real photo of Пірат.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Пірат.',
			text: 'Хижак із сильним характером і виразним образом.',
		},
		{
			name: 'Луна',
			category: 'Великі коти',
			slug: 'luna',
			// TODO: Replace with real photo of Луна.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Луна.',
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Одін',
			category: 'Великі коти',
			slug: 'odin',
			// TODO: Replace with real photo of Одін.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Одін.',
			text: 'Представник великих хижаків парку.',
		},
		{
			name: 'Султан',
			category: 'Великі коти',
			slug: 'sultan',
			// TODO: Replace with real photo of Султан.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Султан.',
			text: 'Великий кіт із каталогу парку.',
		},
		{
			name: 'Жозефіна',
			category: 'Великі коти',
			slug: 'zhozefina',
			// TODO: Replace with real photo of Жозефіна.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Жозефіна.',
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Ельза',
			category: 'Великі коти',
			slug: 'elza',
			// TODO: Replace with real photo of Ельза.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Ельза.',
			text: 'Представниця великих котів парку.',
		},
		{
			name: 'Авелія',
			category: 'Великі коти',
			slug: 'aveliya',
			// TODO: Replace with real photo of Авелія.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Авелія.',
			text: 'Мешканка секції великих котів.',
		},
		{
			name: 'Валєра',
			category: 'Великі коти',
			slug: 'valyera',
			// TODO: Replace with real photo of Валєра.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Валєра.',
			text: 'Великий кіт із каталогу мешканців парку.',
		},
		{
			name: 'Льова',
			category: 'Великі коти',
			slug: 'lyova',
			// TODO: Replace with real photo of Льова.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of Льова.',
			text: 'Представник секції великих котів.',
		},
		{
			name: 'Білий тигр',
			category: 'Великі коти',
			slug: 'bilyy-tyhr',
			// TODO: Replace with real photo of white tiger.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of white tiger.',
			text: 'Білий тигр − один із найяскравіших хижаків парку.',
		},
		{
			name: 'Сімейство капуцинів',
			category: 'Примати',
			slug: 'simeystvo-kaputsyniv',
			// TODO: Replace with real photo of capuchins.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of capuchins.',
			text: 'Активні та допитливі примати, за якими цікаво спостерігати.',
		},
		{
			name: 'Сімейство лемурів',
			category: 'Примати',
			slug: 'simeystvo-lemuriv',
			// TODO: Replace with real photo of lemurs.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of lemurs.',
			text: 'Лемури − яскраві й рухливі мешканці парку.',
		},
		{
			name: 'Сімейство зелених мавп',
			category: 'Примати',
			slug: 'simeystvo-zelenyh-mavp',
			// TODO: Replace with real photo of green monkeys.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of green monkeys.',
			text: 'Родина зелених мавп із характерною поведінкою та активністю.',
		},
		{
			name: 'Сімейство бабуїнів',
			category: 'Примати',
			slug: 'simeystvo-babuyiniv',
			// TODO: Replace with real photo of baboons.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of baboons.',
			text: 'Бабуїни − сильні соціальні примати з виразною поведінкою.',
		},
		{
			name: 'Вовчі зграї',
			category: 'Вовки',
			slug: 'vovchi-zgrayi',
			// TODO: Replace with real photo of wolves from Park Arden.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of wolves from Park Arden.',
			text: 'Вовки живуть зграями та створюють особливу атмосферу дикого лісу.',
		},
		{
			name: 'Благородні олені',
			category: 'Олені та копитні',
			slug: 'blahorodni-oleni',
			// TODO: Replace with real photo of red deer.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of red deer.',
			text: 'Красиві лісові мешканці з розлогими рогами.',
		},
		{
			name: 'Муфлони',
			category: 'Олені та копитні',
			slug: 'muflony',
			// TODO: Replace with real photo of mouflons.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of mouflons.',
			text: 'Копитні тварини, які доповнюють природну різноманітність парку.',
		},
		{
			name: 'Лані',
			category: 'Олені та копитні',
			slug: 'lani',
			// TODO: Replace with real photo of fallow deer.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of fallow deer.',
			text: 'Спокійні й граційні мешканці природного простору.',
		},
		{
			name: 'Орлан-білохвіст',
			category: 'Птахи',
			slug: 'orlan-bilohvist',
			// TODO: Replace with real photo of white-tailed eagle.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of white-tailed eagle.',
			text: 'Один із найбільших пернатих хижаків Європи.',
		},
		{
			name: 'Яструб',
			category: 'Птахи',
			slug: 'yastrub',
			// TODO: Replace with real photo of hawk.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of hawk.',
			text: 'Хижий птах родини яструбових.',
		},
		{
			name: 'Канюк',
			category: 'Птахи',
			slug: 'kanyuk',
			// TODO: Replace with real photo of buzzard.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of buzzard.',
			text: 'Хижий птах, якого можна побачити у реабілітаційному центрі.',
		},
		{
			name: 'Підорлик',
			category: 'Птахи',
			slug: 'pidorlyk',
			// TODO: Replace with real photo of spotted eagle.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real photo of spotted eagle.',
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
