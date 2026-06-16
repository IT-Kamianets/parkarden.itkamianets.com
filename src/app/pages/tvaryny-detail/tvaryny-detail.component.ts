import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { parkardenImageForAnimal, parkardenImageForKey } from '../../feature/media/parkarden-images';

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
	story: string;
	rescueStory: string;
	facts: string[];
}

interface CatalogAnimal {
	slug: string;
	name: string;
	category: string;
	shortText: string;
	image?: string;
}

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
		image: 'https://cdn-it.webart.work/parkarden/bears_08.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_03.webp',
		story: 'Гоша − гімалайський ведмідь, який любить ховатися у кущах. Завдяки широкому білому комірцю його образ добре запамʼятовується відвідувачам.',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_103.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_147.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_54.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_97.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_21.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/bears_92.webp',
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
		image: '/images/big-cats/zevs.jpg',
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
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_57.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/wolves_28.webp',
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
		image: 'https://cdn-it.webart.work/parkarden/deer_43.webp',
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
		image: parkardenImageForKey('src/app/pages/tvaryny-detail/tvaryny-detail.component.ts-13'),
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
		image: 'https://cdn-it.webart.work/parkarden/bears_113.webp',
	},
	{
		slug: 'vasyl',
		name: 'Василь',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_57.webp',
	},
	{
		slug: 'yanyk',
		name: 'Яник',
		category: 'Ведмеді',
		shortText: 'Один із мешканців ведмежої частини парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_134.webp',
	},
	{
		slug: 'riki',
		name: 'Рікі',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції «АРДЕНУ».',
		image: 'https://cdn-it.webart.work/parkarden/bears_130.webp',
	},
	{
		slug: 'maks-ta-meri',
		name: 'Макс та Мері',
		category: 'Ведмеді',
		shortText: 'Ведмежа пара з каталогу мешканців парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_129.webp',
	},
	{
		slug: 'grishka-ta-mishka',
		name: 'Грішка та Мішка',
		category: 'Ведмеді',
		shortText: 'Мешканці ведмежої колекції парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_23.webp',
	},
	{
		slug: 'chuk-ta-hek',
		name: 'Чук та Гек',
		category: 'Ведмеді',
		shortText: 'Ведмежий дует із каталогу парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_119.webp',
	},
	{
		slug: 'sharyk',
		name: 'Шарик',
		category: 'Ведмеді',
		shortText: 'Один із ведмедів, які знайшли прихисток у парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_116.webp',
	},
	{
		slug: 'potap-dzhek-ta-dzhon',
		name: 'Потап, Джек та Джон',
		category: 'Ведмеді',
		shortText: 'Троє мешканців ведмежої частини парку.',
		image: 'https://cdn-it.webart.work/parkarden/bears_46.webp',
	},
	{
		slug: 'maksym',
		name: 'Максим',
		category: 'Ведмеді',
		shortText: 'Мешканець ведмежої колекції «АРДЕНУ».',
		image: 'https://cdn-it.webart.work/parkarden/bears_02.webp',
	},
	{
		slug: 'vedmezha-simya',
		name: 'Ведмежа сімʼя',
		category: 'Ведмеді',
		shortText: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.',
		image: 'https://cdn-it.webart.work/parkarden/bears_159.webp',
	},
	{
		slug: 'lyusya',
		name: 'Люся',
		category: 'Великі коти',
		shortText: 'Представниця великих котів парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_54.webp',
	},
	{
		slug: 'leo',
		name: 'Лео',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу мешканців «АРДЕНУ».',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_06.webp',
	},
	{
		slug: 'yasya',
		name: 'Яся',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_07.webp',
	},
	{
		slug: 'pirat',
		name: 'Пірат',
		category: 'Великі коти',
		shortText: 'Хижак із сильним характером і виразним образом.',
		image: 'https://cdn-it.webart.work/parkarden/animals_processed_13.webp',
	},
	{
		slug: 'luna',
		name: 'Луна',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_117.webp',
	},
	{
		slug: 'odin',
		name: 'Одін',
		category: 'Великі коти',
		shortText: 'Представник великих хижаків парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_22.webp',
	},
	{
		slug: 'sultan',
		name: 'Султан',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_71.webp',
	},
	{
		slug: 'zhozefina',
		name: 'Жозефіна',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_84.webp',
	},
	{
		slug: 'elza',
		name: 'Ельза',
		category: 'Великі коти',
		shortText: 'Представниця великих котів парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_01.webp',
	},
	{
		slug: 'aveliya',
		name: 'Авелія',
		category: 'Великі коти',
		shortText: 'Мешканка секції великих котів.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_68.webp',
	},
	{
		slug: 'valyera',
		name: 'Валєра',
		category: 'Великі коти',
		shortText: 'Великий кіт із каталогу мешканців парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_87.webp',
	},
	{
		slug: 'lyova',
		name: 'Льова',
		category: 'Великі коти',
		shortText: 'Представник секції великих котів.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_121.webp',
	},
	{
		slug: 'bilyy-tyhr',
		name: 'Білий тигр',
		category: 'Великі коти',
		shortText: 'Білий тигр − один із найяскравіших хижаків парку.',
		image: 'https://cdn-it.webart.work/parkarden/lions_tigers_21.webp',
	},
	{
		slug: 'simeystvo-kaputsyniv',
		name: 'Сімейство капуцинів',
		category: 'Примати',
		shortText: 'Активні та допитливі примати, за якими цікаво спостерігати.',
		image: 'https://cdn-it.webart.work/parkarden/monkeys_36.webp',
	},
	{
		slug: 'simeystvo-lemuriv',
		name: 'Сімейство лемурів',
		category: 'Примати',
		shortText: 'Лемури − яскраві й рухливі мешканці парку.',
	},
	{
		slug: 'simeystvo-zelenyh-mavp',
		name: 'Сімейство зелених мавп',
		category: 'Примати',
		shortText: 'Родина зелених мавп із характерною поведінкою та активністю.',
	},
	{
		slug: 'simeystvo-babuyiniv',
		name: 'Сімейство бабуїнів',
		category: 'Примати',
		shortText: 'Бабуїни − сильні соціальні примати з виразною поведінкою.',
		image: 'https://cdn-it.webart.work/parkarden/monkeys_09.webp',
	},
	{
		slug: 'muflony',
		name: 'Муфлони',
		category: 'Олені та копитні',
		shortText: 'Копитні тварини, які доповнюють природну різноманітність парку.',
		image: 'https://cdn-it.webart.work/parkarden/mouflons_09.webp',
	},
	{
		slug: 'lani',
		name: 'Лані',
		category: 'Олені та копитні',
		shortText: 'Спокійні й граційні мешканці природного простору.',
		image: 'https://cdn-it.webart.work/parkarden/deer_01.webp',
	},
	{
		slug: 'yastrub',
		name: 'Яструб',
		category: 'Птахи',
		shortText: 'Хижий птах родини яструбових.',
		image: 'https://cdn-it.webart.work/parkarden/eagle_11.webp',
	},
	{
		slug: 'kanyuk',
		name: 'Канюк',
		category: 'Птахи',
		shortText: 'Хижий птах, якого можна побачити у реабілітаційному центрі.',
		image: 'https://cdn-it.webart.work/parkarden/eagle_06.webp',
	},
	{
		slug: 'pidorlyk',
		name: 'Підорлик',
		category: 'Птахи',
		shortText: 'Представник денних хижих птахів України.',
		image: 'https://cdn-it.webart.work/parkarden/eagle_12.webp',
	},
];

const ANIMALS = [...FULL_ANIMAL_DETAILS, ...CATALOG_FALLBACK_ANIMALS.map(_createFallbackAnimal)];

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './tvaryny-detail.component.html',
	styleUrl: './tvaryny-detail.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvarynyDetailComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _title = inject(Title);
	private readonly _meta = inject(Meta);

	private readonly _slug = toSignal(
		this._route.paramMap.pipe(map(params => params.get('slug'))),
	);

	protected readonly animal = computed(() =>
		ANIMALS.find(a => a.slug === this._slug()),
	);

	protected readonly basicInfo = computed(() => {
		const a = this.animal();
		return a ? [
			{ label: 'Імʼя', value: a.name },
			{ label: 'Категорія', value: a.category },
			{ label: 'Вид', value: a.species },
			{ label: 'Вік', value: a.age },
			{ label: 'Стать', value: a.gender },
			{ label: 'Статус', value: a.status },
		] : [];
	});

	protected readonly facts = computed(() => this.animal()?.facts ?? []);

	protected readonly otherAnimals = computed(() => {
		const a = this.animal();
		return a ? this._otherAnimals(a) : [];
	});

	constructor() {
		effect(() => { this._setSeo(); });
	}

	private _setSeo(): void {
		const a = this.animal();
		if (!a) {
			this._title.setTitle('Тварину не знайдено');
			this._meta.updateTag({
				name: 'description',
				content: 'Можливо, сторінку було переміщено або ця картка ще готується.',
			});
			return;
		}

		const title = `${a.name} − ${a.category} парку «АРДЕН»`;
		const description = `Познайомтесь із ${a.name}. ${a.shortText} Дізнайтесь історію, особливості та як підтримати тварин Парку диких тварин «АРДЕН».`;

		this._title.setTitle(title);
		this._meta.updateTag({ name: 'description', content: description });
		this._meta.updateTag({ property: 'og:title', content: title });
		this._meta.updateTag({ property: 'og:description', content: description });
		this._meta.updateTag({ property: 'og:image', content: a.image });
		this._meta.updateTag({ name: 'twitter:title', content: title });
		this._meta.updateTag({ name: 'twitter:description', content: description });
		this._meta.updateTag({ name: 'twitter:image', content: a.image });
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
		image: animal.image ?? parkardenImageForAnimal(animal.slug, animal.category),
		story: FALLBACK_STORY,
		rescueStory: FALLBACK_RESCUE_STORY,
		facts: FALLBACK_FACTS,
	};
}
