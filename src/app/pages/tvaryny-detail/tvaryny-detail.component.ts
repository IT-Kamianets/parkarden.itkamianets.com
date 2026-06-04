import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface AnimalDetail {
	slug: string;
	name: string;
	category: string;
	species: string;
	age: string;
	gender: string;
	status: string;
	shortText: string;
	image: string;
	imageTodo: string;
	story: string;
	rescueStory: string;
	facts: string[];
}

interface CatalogAnimal {
	slug: string;
	name: string;
	category: string;
	shortText: string;
	imageTodo: string;
}

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';
const UNKNOWN_VALUE = 'Інформацію уточнюємо';
const FALLBACK_STORY =
	'Детальну історію цієї тварини команда парку ще готує. Поки що ця сторінка служить базовою карткою мешканця парку.';
const FALLBACK_RESCUE_STORY =
	'Історію порятунку потрібно уточнити у команди парку перед фінальним наповненням сайту.';
const FALLBACK_FACTS = [
	'Мешканець Парку диких тварин «АРДЕН»',
	'Детальна інформація готується',
	'Фото та історію потрібно оновити після отримання матеріалів від замовника',
];

const FULL_ANIMAL_DETAILS: AnimalDetail[] = [
	{
		slug: 'tosha',
		name: 'Тоша',
		category: 'Ведмеді',
		species: 'Бурий ведмідь',
		age: '32 роки',
		gender: 'Самець',
		status: 'Мешканець парку',
		shortText: 'Один із найстаріших і найвідоміших ведмедів парку.',
		// TODO: Replace with real photo of bear Тоша.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bear Тоша.',
		story: 'Тоша − великий бурий ведмідь, який вирізняється значними розмірами та чорним блискучим хутром. Він належить до найстаріших мешканців парку.',
		rescueStory: 'Детальну історію порятунку Тоші команда парку ще готує.',
		facts: [
			'Один із найстаріших мешканців парку',
			'Має великі розміри',
			'Вирізняється чорним блискучим хутром',
		],
	},
	{
		slug: 'gosha',
		name: 'Гоша',
		category: 'Ведмеді',
		species: 'Гімалайський ведмідь',
		age: '26 років',
		gender: 'Самець',
		status: 'Мешканець парку',
		shortText: 'Гімалайський ведмідь із характерним світлим комірцем.',
		// TODO: Replace with real photo of Himalayan bear Гоша.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of Himalayan bear Гоша.',
		story: 'Гоша − гімалайський ведмідь, який любить ховатися у кущах. Завдяки широкому білому комірцю його образ добре запам’ятовується відвідувачам.',
		rescueStory: 'Детальну історію порятунку Гоші команда парку ще готує.',
		facts: [
			'Гімалайський ведмідь',
			'Має характерний білий комірець',
			'Любить ховатися серед кущів',
		],
	},
	{
		slug: 'misha',
		name: 'Міша',
		category: 'Ведмеді',
		species: 'Бурий ведмідь',
		age: UNKNOWN_VALUE,
		gender: 'Самець',
		status: 'Один із перших жителів парку-притулку',
		shortText: 'Один із перших мешканців парку-притулку.',
		// TODO: Replace with real photo of bear Міша.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bear Міша.',
		story: 'Міша − один із перших жителів парку-притулку. Він часто перебуває поруч із Машею, і працівники парку добре знають цю ведмежу пару.',
		rescueStory: 'Детальну історію порятунку Міші команда парку ще готує.',
		facts: [
			'Один із перших мешканців парку',
			'Часто тримається поруч із Машею',
			'Узимку може залишатися активним',
		],
	},
	{
		slug: 'masha',
		name: 'Маша',
		category: 'Ведмеді',
		species: 'Бурий ведмідь',
		age: UNKNOWN_VALUE,
		gender: 'Самка',
		status: 'Одна з перших жительок парку-притулку',
		shortText: 'Ведмедиця, яка живе поруч із Мішею.',
		// TODO: Replace with real photo of bear Маша.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bear Маша.',
		story: 'Маша − ведмедиця, яку працівники парку часто згадують разом із Мішею. Однієї зими вона облаштувала собі берлогу у норі під великим каменем.',
		rescueStory: 'Детальну історію порятунку Маші команда парку ще готує.',
		facts: [
			'Одна з перших мешканок парку',
			'Живе поруч із Мішею',
			'Має природну поведінку в лісовому середовищі',
		],
	},
	{
		slug: 'bublyk-ta-korzhyk',
		name: 'Бублик та Коржик',
		category: 'Ведмеді',
		species: 'Ведмеді',
		age: UNKNOWN_VALUE,
		gender: UNKNOWN_VALUE,
		status: 'Мешканці парку',
		shortText: 'Молоді активні ведмеді зі світлими комірцями.',
		// TODO: Replace with real photo of bears Бублик та Коржик.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bears Бублик та Коржик.',
		story: 'Бублик і Коржик належать до молодих активних ведмедів, які вирізняються світлими комірцями та рухливим способом життя.',
		rescueStory: 'Детальну історію порятунку Бублика та Коржика команда парку ще готує.',
		facts: ['Молоді активні ведмеді', 'Мають світлі комірці', 'Люблять рух і активність'],
	},
	{
		slug: 'dasha-ta-asya',
		name: 'Даша та Ася',
		category: 'Ведмеді',
		species: 'Ведмедиці',
		age: UNKNOWN_VALUE,
		gender: 'Самки',
		status: 'Мешканки парку',
		shortText: 'Спритні ведмедиці, які вражають умінням лазити по деревах.',
		// TODO: Replace with real photo of bears Даша та Ася.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bears Даша та Ася.',
		story: 'Даша та Ася − спритні ведмедиці, за якими цікаво спостерігати. Вони лазять по деревах із вправністю гімнастів і створюють яскраві моменти під час екскурсій.',
		rescueStory: 'Детальну історію порятунку Даші та Асі команда парку ще готує.',
		facts: ['Спритні та активні', 'Добре лазять по деревах', 'Привертають увагу відвідувачів'],
	},
	{
		slug: 'irka',
		name: 'Ірка',
		category: 'Ведмеді',
		species: 'Гімалайська ведмедиця',
		age: UNKNOWN_VALUE,
		gender: 'Самка',
		status: 'Мешканка парку',
		shortText: 'Гімалайська ведмедиця з чорним шовковистим хутром.',
		// TODO: Replace with real photo of bear Ірка.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bear Ірка.',
		story: 'Ірка − гімалайська ведмедиця, яка демонструє відвідувачам чорне шовковисте хутро та спокійну силу свого виду.',
		rescueStory: 'Детальну історію порятунку Ірки команда парку ще готує.',
		facts: [
			'Гімалайська ведмедиця',
			'Має чорне шовковисте хутро',
			'Одна з помітних ведмедиць парку',
		],
	},
	{
		slug: 'mykyta-ta-illya',
		name: 'Микита та Ілля',
		category: 'Ведмеді',
		species: 'Дорослі ведмеді',
		age: UNKNOWN_VALUE,
		gender: 'Самці',
		status: 'Мешканці парку',
		shortText: 'Дорослі ведмеді, що вражають силою та могутністю.',
		// TODO: Replace with real photo of bears Микита та Ілля.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of bears Микита та Ілля.',
		story: 'Микита та Ілля − дорослі ведмеді, які вражають відвідувачів грізним виглядом, силою та могутністю.',
		rescueStory: 'Детальну історію порятунку Микити та Іллі команда парку ще готує.',
		facts: ['Дорослі ведмеді', 'Вражають могутністю', 'Одні з найпомітніших ведмедів парку'],
	},
	{
		slug: 'bilyy-lev-zevs',
		name: 'Білий лев Зевс',
		category: 'Великі коти',
		species: 'Білий лев',
		age: UNKNOWN_VALUE,
		gender: 'Самець',
		status: 'Мешканець парку',
		shortText: 'Білий лев, один із найефектніших великих котів парку.',
		// TODO: Replace with real photo of white lion Зевс.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of white lion Зевс.',
		story: 'Зевс − білий лев і один із найбільш вражаючих представників великих котів у парку.',
		rescueStory: 'Детальну історію Зевса команда парку ще готує.',
		facts: [
			'Білий лев',
			'Представник секції великих котів',
			'Один із найефектніших хижаків парку',
		],
	},
	{
		slug: 'frants-i-petro',
		name: 'Франц і Петро',
		category: 'Великі коти',
		species: 'Левенята',
		age: 'Молоді',
		gender: 'Самці',
		status: 'Мешканці парку',
		shortText: 'Молоді левенята, які привертають увагу відвідувачів.',
		// TODO: Replace with real photo of lion cubs Франц і Петро.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of lion cubs Франц і Петро.',
		story: 'Франц і Петро − молоді левенята з секції великих котів. Вони додають парку особливої енергії та завжди привертають увагу гостей.',
		rescueStory: 'Детальну історію Франца і Петра команда парку ще готує.',
		facts: ['Молоді левенята', 'Представники великих котів', 'Активні мешканці парку'],
	},
	{
		slug: 'vovchi-zgrayi',
		name: 'Вовчі зграї',
		category: 'Вовки',
		species: 'Вовки',
		age: UNKNOWN_VALUE,
		gender: UNKNOWN_VALUE,
		status: 'Мешканці парку',
		shortText: 'Вовки живуть зграями та створюють особливу атмосферу дикого лісу.',
		// TODO: Replace with real photo of wolves from Park Arden.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of wolves from Park Arden.',
		story: 'Вовчі зграї проживають на території парку поруч із іншими мешканцями лісових вольєрів. Увечері в парку можна почути протяжне виття вовків із різних куточків лісу.',
		rescueStory: 'Детальну історію вовчих зграй команда парку ще готує.',
		facts: [
			'Живуть зграями',
			'Створюють атмосферу дикого лісу',
			'Їхнє виття можна почути ввечері',
		],
	},
	{
		slug: 'blahorodni-oleni',
		name: 'Благородні олені',
		category: 'Олені та копитні',
		species: 'Благородні олені',
		age: UNKNOWN_VALUE,
		gender: UNKNOWN_VALUE,
		status: 'Мешканці парку',
		shortText: 'Красиві лісові мешканці з розлогими рогами.',
		// TODO: Replace with real photo of red deer.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of red deer.',
		story: 'Благородні олені − справжні красені лісу. Вони гордовито несуть великі розлогі роги та доповнюють природну атмосферу парку.',
		rescueStory: 'Детальну історію благородних оленів команда парку ще готує.',
		facts: [
			'Лісові копитні',
			'Мають великі розлогі роги',
			'Живуть у природному середовищі парку',
		],
	},
	{
		slug: 'orlan-bilohvist',
		name: 'Орлан-білохвіст',
		category: 'Птахи',
		species: 'Орлан-білохвіст',
		age: UNKNOWN_VALUE,
		gender: UNKNOWN_VALUE,
		status: 'Мешканець реабілітаційного центру',
		shortText: 'Один із найбільших пернатих хижаків Європи.',
		// TODO: Replace with real photo of white-tailed eagle.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: 'Replace with real photo of white-tailed eagle.',
		story: 'Орлан-білохвіст − представник хижих птахів, яких можна побачити у реабілітаційному центрі парку. Для таких птахів створені максимально комфортні умови.',
		rescueStory: 'Детальну історію орлана-білохвоста команда парку ще готує.',
		facts: [
			'Хижий птах',
			'Представник родини яструбових',
			'Зустрічається на території України',
		],
	},
];

const CATALOG_FALLBACK_ANIMALS: CatalogAnimal[] = [
	{
		slug: 'nika-ta-vedmezha',
		name: 'Ніка та ведмежа',
		category: 'Ведмеді',
		shortText: 'Ведмежа родина, яка викликає особливе захоплення у відвідувачів.',
		imageTodo: 'Replace with real photo of Ніка та ведмежа.',
	},
	{
		slug: 'vasyl',
		name: 'Василь',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції парку.',
		imageTodo: 'Replace with real photo of bear Василь.',
	},
	{
		slug: 'yanyk',
		name: 'Яник',
		category: 'Ведмеді',
		shortText: 'Один із мешканців ведмежої частини парку.',
		imageTodo: 'Replace with real photo of bear Яник.',
	},
	{
		slug: 'riki',
		name: 'Рікі',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції «АРДЕНУ».',
		imageTodo: 'Replace with real photo of bear Рікі.',
	},
	{
		slug: 'maks-ta-meri',
		name: 'Макс та Мері',
		category: 'Ведмеді',
		shortText: 'Ведмежа пара з каталогу мешканців парку.',
		imageTodo: 'Replace with real photo of bears Макс та Мері.',
	},
	{
		slug: 'grishka-ta-mishka',
		name: 'Грішка та Мішка',
		category: 'Ведмеді',
		shortText: 'Мешканці ведмежої колекції парку.',
		imageTodo: 'Replace with real photo of bears Грішка та Мішка.',
	},
	{
		slug: 'chuk-ta-hek',
		name: 'Чук та Гек',
		category: 'Ведмеді',
		shortText: 'Ведмежий дует із каталогу парку.',
		imageTodo: 'Replace with real photo of bears Чук та Гек.',
	},
	{
		slug: 'sharyk',
		name: 'Шарик',
		category: 'Ведмеді',
		shortText: 'Один із ведмедів, які знайшли прихисток у парку.',
		imageTodo: 'Replace with real photo of bear Шарик.',
	},
	{
		slug: 'potap-dzhek-ta-dzhon',
		name: 'Потап, Джек та Джон',
		category: 'Ведмеді',
		shortText: 'Троє мешканців ведмежої частини парку.',
		imageTodo: 'Replace with real photo of bears Потап, Джек та Джон.',
	},
	{
		slug: 'maksym',
		name: 'Максим',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції «АРДЕНУ».',
		imageTodo: 'Replace with real photo of bear Максим.',
	},
	{
		slug: 'vedmezha-simya',
		name: 'Ведмежа сім’я',
		category: 'Ведмеді',
		shortText: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.',
		imageTodo: 'Replace with real photo of bear family.',
	},
	{
		slug: 'lyusya',
		name: 'Люся',
		category: 'Великі коти',
		shortText: 'Представниця великих котів парку.',
		imageTodo: 'Replace with real photo of Люся.',
	},
	{
		slug: 'leo',
		name: 'Лео',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу мешканців «АРДЕНУ».',
		imageTodo: 'Replace with real photo of Лео.',
	},
	{
		slug: 'yasya',
		name: 'Яся',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		imageTodo: 'Replace with real photo of Яся.',
	},
	{
		slug: 'pirat',
		name: 'Пірат',
		category: 'Великі коти',
		shortText: 'Хижак із сильним характером і виразним образом.',
		imageTodo: 'Replace with real photo of Пірат.',
	},
	{
		slug: 'luna',
		name: 'Луна',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		imageTodo: 'Replace with real photo of Луна.',
	},
	{
		slug: 'odin',
		name: 'Одін',
		category: 'Великі коти',
		shortText: 'Представник великих хижаків парку.',
		imageTodo: 'Replace with real photo of Одін.',
	},
	{
		slug: 'sultan',
		name: 'Султан',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу парку.',
		imageTodo: 'Replace with real photo of Султан.',
	},
	{
		slug: 'zhozefina',
		name: 'Жозефіна',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		imageTodo: 'Replace with real photo of Жозефіна.',
	},
	{
		slug: 'elza',
		name: 'Ельза',
		category: 'Великі коти',
		shortText: 'Представниця великих котів парку.',
		imageTodo: 'Replace with real photo of Ельза.',
	},
	{
		slug: 'aveliya',
		name: 'Авелія',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		imageTodo: 'Replace with real photo of Авелія.',
	},
	{
		slug: 'valyera',
		name: 'Валєра',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу мешканців парку.',
		imageTodo: 'Replace with real photo of Валєра.',
	},
	{
		slug: 'lyova',
		name: 'Льова',
		category: 'Великі коти',
		shortText: 'Представник секції великих котів.',
		imageTodo: 'Replace with real photo of Льова.',
	},
	{
		slug: 'bilyy-tyhr',
		name: 'Білий тигр',
		category: 'Великі коти',
		shortText: 'Білий тигр − один із найяскравіших хижаків парку.',
		imageTodo: 'Replace with real photo of white tiger.',
	},
	{
		slug: 'simeystvo-kaputsyniv',
		name: 'Сімейство капуцинів',
		category: 'Примати',
		shortText: 'Активні та допитливі примати, за якими цікаво спостерігати.',
		imageTodo: 'Replace with real photo of capuchins.',
	},
	{
		slug: 'simeystvo-lemuriv',
		name: 'Сімейство лемурів',
		category: 'Примати',
		shortText: 'Лемури − яскраві й рухливі мешканці парку.',
		imageTodo: 'Replace with real photo of lemurs.',
	},
	{
		slug: 'simeystvo-zelenyh-mavp',
		name: 'Сімейство зелених мавп',
		category: 'Примати',
		shortText: 'Родина зелених мавп із характерною поведінкою та активністю.',
		imageTodo: 'Replace with real photo of green monkeys.',
	},
	{
		slug: 'simeystvo-babuyiniv',
		name: 'Сімейство бабуїнів',
		category: 'Примати',
		shortText: 'Бабуїни − сильні соціальні примати з виразною поведінкою.',
		imageTodo: 'Replace with real photo of baboons.',
	},
	{
		slug: 'muflony',
		name: 'Муфлони',
		category: 'Олені та копитні',
		shortText: 'Копитні тварини, які доповнюють природну різноманітність парку.',
		imageTodo: 'Replace with real photo of mouflons.',
	},
	{
		slug: 'lani',
		name: 'Лані',
		category: 'Олені та копитні',
		shortText: 'Спокійні й граційні мешканці природного простору.',
		imageTodo: 'Replace with real photo of fallow deer.',
	},
	{
		slug: 'yastrub',
		name: 'Яструб',
		category: 'Птахи',
		shortText: 'Хижий птах родини яструбових.',
		imageTodo: 'Replace with real photo of hawk.',
	},
	{
		slug: 'kanyuk',
		name: 'Канюк',
		category: 'Птахи',
		shortText: 'Хижий птах, якого можна побачити у реабілітаційному центрі.',
		imageTodo: 'Replace with real photo of buzzard.',
	},
	{
		slug: 'pidorlyk',
		name: 'Підорлик',
		category: 'Птахи',
		shortText: 'Представник денних хижих птахів України.',
		imageTodo: 'Replace with real photo of spotted eagle.',
	},
];

const ANIMALS = [...FULL_ANIMAL_DETAILS, ...CATALOG_FALLBACK_ANIMALS.map(_createFallbackAnimal)];

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './tvaryny-detail.component.html',
	styleUrl: './tvaryny-detail.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvarynyDetailComponent implements AfterViewInit {
	private readonly _route = inject(ActivatedRoute);
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);

	protected readonly animal = ANIMALS.find(
		(animal) => animal.slug === this._route.snapshot.paramMap.get('slug'),
	);
	// TODO: Replace with emotional photo of this animal or animal care moment.
	protected readonly supportImage = this.animal?.image ?? TEMPORARY_PLACEHOLDER_IMAGE;
	protected readonly basicInfo = this.animal
		? [
				{ label: 'Ім’я', value: this.animal.name },
				{ label: 'Категорія', value: this.animal.category },
				{ label: 'Вид', value: this.animal.species },
				{ label: 'Вік', value: this.animal.age },
				{ label: 'Стать', value: this.animal.gender },
				{ label: 'Статус', value: this.animal.status },
			]
		: [];
	protected readonly facts = this.animal?.facts ?? [];
	protected readonly otherAnimals = this.animal ? this._otherAnimals(this.animal) : [];

	ngAfterViewInit(): void {
		this._setSeo();
	}

	private _setSeo(): void {
		if (!this.animal) {
			this._title.setTitle('Тварину не знайдено');
			this._meta.updateTag({
				name: 'description',
				content: 'Можливо, сторінку було переміщено або ця картка ще готується.',
			});
			return;
		}

		const title = `${this.animal.name} − ${this.animal.category} парку «АРДЕН»`;
		const description = `Познайомтесь із ${this.animal.name}. ${this.animal.shortText} Дізнайтесь історію, особливості та як підтримати тварин Парку диких тварин «АРДЕН».`;
		const image = 'https://parkarden.itkamianets.com/logo.png';

		this._title.setTitle(title);
		this._meta.updateTag({ name: 'description', content: description });
		this._meta.updateTag({ property: 'og:title', content: title });
		this._meta.updateTag({ property: 'og:description', content: description });
		// TODO: Replace with real close-up photo of this animal. Best ratio: 1200x630 for Open Graph.
		this._meta.updateTag({ property: 'og:image', content: image });
		this._meta.updateTag({ name: 'twitter:title', content: title });
		this._meta.updateTag({ name: 'twitter:description', content: description });
		// TODO: Replace with real close-up photo of this animal. Best ratio: 1200x630 for Open Graph.
		this._meta.updateTag({ name: 'twitter:image', content: image });
	}

	private _otherAnimals(currentAnimal: AnimalDetail): AnimalDetail[] {
		const sameCategory = ANIMALS.filter(
			(animal) =>
				animal.category === currentAnimal.category && animal.slug !== currentAnimal.slug,
		);
		const animals =
			sameCategory.length >= 3
				? sameCategory
				: ANIMALS.filter((animal) => animal.slug !== currentAnimal.slug);

		return animals.slice(0, 4);
	}
}

function _createFallbackAnimal(animal: CatalogAnimal): AnimalDetail {
	return {
		slug: animal.slug,
		name: animal.name,
		category: animal.category,
		species: UNKNOWN_VALUE,
		age: UNKNOWN_VALUE,
		gender: UNKNOWN_VALUE,
		status: UNKNOWN_VALUE,
		shortText: animal.shortText,
		// TODO: Replace placeholder with the real animal photo described in imageTodo.
		image: TEMPORARY_PLACEHOLDER_IMAGE,
		imageTodo: animal.imageTodo,
		story: FALLBACK_STORY,
		rescueStory: FALLBACK_RESCUE_STORY,
		facts: FALLBACK_FACTS,
	};
}
