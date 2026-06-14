import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForAnimal, parkardenImageForKey, parkardenImages } from '../../feature/media/parkarden-images';


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
			image: parkardenImages.specific.bears103,
			text: 'Гордість парку − велика ведмежа колекція з бурими європейськими, гімалайськими та рідкісним бурим камчатським ведмедем.',
		},
		{
			title: 'Великі коти',
			image: parkardenImages.specific.lionsTigers121,
			text: 'Леви, тигри та інші хижаки, які вражають силою, грацією та характером.',
		},
		{
			title: 'Примати',
			image: parkardenImageForAnimal('мавпи капуцини бабуїни tvaryny'),
			text: 'Капуцини, лемури, зелені мавпи та бабуїни − активні й допитливі мешканці парку.',
		},
		{
			title: 'Вовки',
			image: parkardenImages.specific.wolves06,
			text: 'Вовчі зграї живуть на території парку та нагадують про справжній голос дикого лісу.',
		},
		{
			title: 'Олені та копитні',
			image: parkardenImages.specific.deer58,
			text: 'Благородні олені, муфлони та лані доповнюють природну атмосферу парку.',
		},
		{
			title: 'Хижі птахи',
			image: parkardenImages.specific.eagle07,
			text: 'Орлан-білохвіст, яструб, канюк та інші хижі птахи, для яких створені комфортні умови.',
		},
	];

	protected readonly animalCards = (() => {
		const c = parkardenImages.animals.bigCats;
		const p = parkardenImages.animals.primates;
		const w = parkardenImages.animals.wolves;
		const h = parkardenImages.animals.hoofed;
		const bi = parkardenImages.animals.birds;
		const pick = (arr: readonly string[], i: number) => arr[i % arr.length]!;

		return [
			{ name: 'Тоша', category: 'Ведмеді', slug: 'tosha', image: '/images/bears/tosha.jpg', text: '32-річний бурий ведмідь з великими розмірами й чорним блискучим хутром.' },
			{ name: 'Міша', category: 'Ведмеді', slug: 'misha', image: '/images/bears/misha.jpg', text: 'Самець темно-каштанового кольору, що не залягав взимку.' },
			{ name: 'Маша', category: 'Ведмеді', slug: 'masha', image: '/images/bears/masha.jpg', text: 'Ведмедиця, що зробила берлогу у норі під каменем.' },
			{ name: 'Гоша', category: 'Ведмеді', slug: 'gosha', image: '/images/bears/gosha.webp', text: '26-річний гімалайський ведмідь, що любить ховатися у кущах.' },
			{ name: 'Ірка', category: 'Ведмеді', slug: 'irka', image: '/images/bears/irka.jpg', text: 'Гімалайська ведмедиця з чорним шовковистим хутром.' },
			{ name: 'Даша та Ася', category: 'Ведмеді', slug: 'dasha-ta-asya', image: '/images/bears/dasha-asya.jpg', text: 'Молоді ведмеді, що лазять по деревах з вправністю гімнастів.' },
			{ name: 'Бублик та Коржик', category: 'Ведмеді', slug: 'bublyk-ta-korzhyk', image: '/images/bears/bublyk-korzhyk.jpg', text: 'Молоді ведмеді зі світлими комірцями.' },
			{ name: 'Ніка та ведмежа', category: 'Ведмеді', slug: 'nika-ta-vedmezha', image: '/images/bears/nika-vedmezha.jpg', text: 'Ведмедиця з малям, яка викликає особливе захоплення у відвідувачів.' },
			{ name: 'Василь', category: 'Ведмеді', slug: 'vasyl', image: '/images/bears/vasyl.jpg', text: 'Мешканець ведмежої колекції парку.' },
			{ name: 'Микита та Ілля', category: 'Ведмеді', slug: 'mykyta-ta-illya', image: '/images/bears/mykyta-illya.webp', text: 'Величезні дорослі ведмеді, що вражають силою та могутністю.' },
			{ name: 'Яник', category: 'Ведмеді', slug: 'yanyk', image: '/images/bears/yanyk.jpg', text: 'Один із мешканців ведмежої частини парку.' },
			{ name: 'Рікі', category: 'Ведмеді', slug: 'riki', image: '/images/bears/riki.jpg', text: 'Мешканець ведмежої колекції «АРДЕНУ».' },
			{ name: 'Макс та Мері', category: 'Ведмеді', slug: 'maks-ta-meri', image: '/images/bears/maks-meri.jpg', text: 'Ведмежа пара з каталогу мешканців парку.' },
			{ name: 'Грішка та Мішка', category: 'Ведмеді', slug: 'grishka-ta-mishka', image: '/images/bears/grishka-mishka.jpg', text: 'Мешканці ведмежої колекції парку.' },
			{ name: 'Чук та Гек', category: 'Ведмеді', slug: 'chuk-ta-hek', image: '/images/bears/chuk-hek.jpg', text: 'Ведмежий дует із каталогу парку.' },
			{ name: 'Шарик', category: 'Ведмеді', slug: 'sharyk', image: '/images/bears/sharyk.jpg', text: 'Один із ведмедів, які знайшли прихисток у парку.' },
			{ name: 'Потап, Джек та Джон', category: 'Ведмеді', slug: 'potap-dzhek-ta-dzhon', image: '/images/bears/potap-dzhek-dzhon.jpg', text: 'Троє мешканців ведмежої частини парку.' },
			{ name: 'Максим', category: 'Ведмеді', slug: 'maksym', image: '/images/bears/maksym.jpg', text: 'Мешканець ведмежої колекції «АРДЕНУ».' },
			{ name: 'Ведмежа сімʼя', category: 'Ведмеді', slug: 'vedmezha-simya', image: '/images/bears/vedmezha-simya.webp', text: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.' },
			{ name: 'Білий лев Зевс', category: 'Великі коти', slug: 'bilyy-lev-zevs', image: '/images/big-cats/zevs.jpg', text: 'Білий лев, один із найефектніших великих котів парку.' },
			{ name: 'Франц і Петро', category: 'Великі коти', slug: 'frants-i-petro', image: '/images/big-cats/frants-petro.jpg', text: 'Молоді левенята, які привертають увагу відвідувачів.' },
			{ name: 'Люся', category: 'Великі коти', slug: 'lyusya', image: '/images/big-cats/lyusya.jpg', text: 'Представниця великих котів парку.' },
			{ name: 'Лео', category: 'Великі коти', slug: 'leo', image: '/images/big-cats/leo.jpg', text: 'Великий кіт із каталогу мешканців «АРДЕНУ».' },
			{ name: 'Яся', category: 'Великі коти', slug: 'yasya', image: '/images/big-cats/yasya.jpg', text: 'Мешканка секції великих котів.' },
			{ name: 'Пірат', category: 'Великі коти', slug: 'pirat', image: '/images/big-cats/pirat.jpg', text: 'Хижак із сильним характером і виразним образом.' },
			{ name: 'Луна', category: 'Великі коти', slug: 'luna', image: '/images/big-cats/luna.jpg', text: 'Мешканка секції великих котів.' },
			{ name: 'Одін', category: 'Великі коти', slug: 'odin', image: '/images/big-cats/odin.jpg', text: 'Представник великих хижаків парку.' },
			{ name: 'Султан', category: 'Великі коти', slug: 'sultan', image: '/images/big-cats/sultan.jpg', text: 'Великий кіт із каталогу парку.' },
			{ name: 'Жозефіна', category: 'Великі коти', slug: 'zhozefina', image: '/images/big-cats/zhozefina.jpg', text: 'Мешканка секції великих котів.' },
			{ name: 'Ельза', category: 'Великі коти', slug: 'elza', image: '/images/big-cats/elza.jpg', text: 'Представниця великих котів парку.' },
			{ name: 'Авелія', category: 'Великі коти', slug: 'aveliya', image: '/images/big-cats/aveliya.jpg', text: 'Мешканка секції великих котів.' },
			{ name: 'Валєра', category: 'Великі коти', slug: 'valyera', image: '/images/big-cats/valyera.jpg', text: 'Великий кіт із каталогу мешканців парку.' },
			{ name: 'Льова', category: 'Великі коти', slug: 'lyova', image: '/images/big-cats/lyova.jpg', text: 'Представник секції великих котів.' },
			{ name: 'Білий тигр', category: 'Великі коти', slug: 'bilyy-tyhr', image: pick(c, 0), text: 'Білий тигр − один із найяскравіших хижаків парку.' },
			{ name: 'Сімейство капуцинів', category: 'Примати', slug: 'simeystvo-kaputsyniv', image: 'https://cdn-it.webart.work/parkarden/monkeys_36.webp', text: 'Активні та допитливі примати, за якими цікаво спостерігати.' },
			{ name: 'Сімейство лемурів', category: 'Примати', slug: 'simeystvo-lemuriv', image: pick(p, 4), text: 'Лемури − яскраві й рухливі мешканці парку.' },
			{ name: 'Сімейство зелених мавп', category: 'Примати', slug: 'simeystvo-zelenyh-mavp', image: pick(p, 1), text: 'Родина зелених мавп із характерною поведінкою та активністю.' },
			{ name: 'Сімейство бабуїнів', category: 'Примати', slug: 'simeystvo-babuyiniv', image: 'https://cdn-it.webart.work/parkarden/monkeys_09.webp', text: 'Бабуїни − сильні соціальні примати з виразною поведінкою.' },
			{ name: 'Вовчі зграї', category: 'Вовки', slug: 'vovchi-zgrayi', image: 'https://cdn-it.webart.work/parkarden/wolves_28.webp', text: 'Вовки живуть зграями та створюють особливу атмосферу дикого лісу.' },
			{ name: 'Благородні олені', category: 'Олені та копитні', slug: 'blahorodni-oleni', image: 'https://cdn-it.webart.work/parkarden/deer_43.webp', text: 'Красиві лісові мешканці з розлогими рогами.' },
			{ name: 'Муфлони', category: 'Олені та копитні', slug: 'muflony', image: 'https://cdn-it.webart.work/parkarden/mouflons_09.webp', text: 'Копитні тварини, які доповнюють природну різноманітність парку.' },
			{ name: 'Лані', category: 'Олені та копитні', slug: 'lani', image: 'https://cdn-it.webart.work/parkarden/deer_01.webp', text: 'Спокійні й граційні мешканці природного простору.' },
			{ name: 'Орлан-білохвіст', category: 'Птахи', slug: 'orlan-bilohvist', image: pick(bi, 0), text: 'Один із найбільших пернатих хижаків Європи.' },
			{ name: 'Яструб', category: 'Птахи', slug: 'yastrub', image: 'https://cdn-it.webart.work/parkarden/eagle_11.webp', text: 'Хижий птах родини яструбових.' },
			{ name: 'Канюк', category: 'Птахи', slug: 'kanyuk', image: 'https://cdn-it.webart.work/parkarden/eagle_06.webp', text: 'Хижий птах, якого можна побачити у реабілітаційному центрі.' },
			{ name: 'Підорлик', category: 'Птахи', slug: 'pidorlyk', image: 'https://cdn-it.webart.work/parkarden/eagle_12.webp', text: 'Представник денних хижих птахів України.' },
		];
	})();

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
