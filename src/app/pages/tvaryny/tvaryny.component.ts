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
		const b = parkardenImages.animals.bears;
		const c = parkardenImages.animals.bigCats;
		const p = parkardenImages.animals.primates;
		const w = parkardenImages.animals.wolves;
		const h = parkardenImages.animals.hoofed;
		const bi = parkardenImages.animals.birds;
		const pick = (arr: readonly string[], i: number) => arr[i % arr.length]!;

		return [
			{ name: 'Тоша', category: 'Ведмеді', slug: 'tosha', image: pick(b, 0), text: 'Великий бурий ведмідь, один із найвідоміших мешканців парку.' },
			{ name: 'Міша', category: 'Ведмеді', slug: 'misha', image: pick(b, 1), text: 'Один із перших мешканців парку-притулку.' },
			{ name: 'Маша', category: 'Ведмеді', slug: 'masha', image: pick(b, 2), text: 'Ведмедиця, яка живе поруч із Мішею та має свою історію адаптації.' },
			{ name: 'Гоша', category: 'Ведмеді', slug: 'gosha', image: pick(b, 3), text: 'Гімалайський ведмідь із характерним світлим комірцем.' },
			{ name: 'Ірка', category: 'Ведмеді', slug: 'irka', image: pick(b, 4), text: 'Гімалайська ведмедиця з чорним шовковистим хутром.' },
			{ name: 'Даша та Ася', category: 'Ведмеді', slug: 'dasha-ta-asya', image: pick(b, 5), text: 'Спритні ведмедиці, які вражають умінням лазити по деревах.' },
			{ name: 'Бублик та Коржик', category: 'Ведмеді', slug: 'bublyk-ta-korzhyk', image: pick(b, 6), text: 'Молоді активні ведмеді зі світлими комірцями.' },
			{ name: 'Ніка та ведмежа', category: 'Ведмеді', slug: 'nika-ta-vedmezha', image: pick(b, 7), text: 'Ведмежа родина, яка викликає особливе захоплення у відвідувачів.' },
			{ name: 'Василь', category: 'Ведмеді', slug: 'vasyl', image: pick(b, 8), text: 'Мешканець ведмежої колекції парку.' },
			{ name: 'Микита та Ілля', category: 'Ведмеді', slug: 'mykyta-ta-illya', image: pick(b, 0), text: 'Дорослі ведмеді, що вражають силою та могутністю.' },
			{ name: 'Яник', category: 'Ведмеді', slug: 'yanyk', image: pick(b, 1), text: 'Один із мешканців ведмежої частини парку.' },
			{ name: 'Рікі', category: 'Ведмеді', slug: 'riki', image: pick(b, 2), text: 'Мешканець ведмежої колекції «АРДЕНУ».' },
			{ name: 'Макс та Мері', category: 'Ведмеді', slug: 'maks-ta-meri', image: pick(b, 3), text: 'Ведмежа пара з каталогу мешканців парку.' },
			{ name: 'Грішка та Мішка', category: 'Ведмеді', slug: 'grishka-ta-mishka', image: pick(b, 4), text: 'Мешканці ведмежої колекції парку.' },
			{ name: 'Чук та Гек', category: 'Ведмеді', slug: 'chuk-ta-hek', image: pick(b, 5), text: 'Ведмежий дует із каталогу парку.' },
			{ name: 'Шарик', category: 'Ведмеді', slug: 'sharyk', image: pick(b, 6), text: 'Один із ведмедів, які знайшли прихисток у парку.' },
			{ name: 'Потап, Джек та Джон', category: 'Ведмеді', slug: 'potap-dzhek-ta-dzhon', image: pick(b, 7), text: 'Троє мешканців ведмежої частини парку.' },
			{ name: 'Максим', category: 'Ведмеді', slug: 'maksym', image: pick(b, 8), text: 'Мешканець ведмежої колекції «АРДЕНУ».' },
			{ name: "Ведмежа сімя", category: 'Ведмеді', slug: 'vedmezha-simya', image: pick(b, 0), text: 'Ведмежа родина, за якою цікаво спостерігати під час екскурсії.' },
			{ name: 'Білий лев Зевс', category: 'Великі коти', slug: 'bilyy-lev-zevs', image: pick(c, 0), text: 'Білий лев, один із найефектніших великих котів парку.' },
			{ name: 'Франц і Петро', category: 'Великі коти', slug: 'frants-i-petro', image: pick(c, 1), text: 'Молоді левенята, які привертають увагу відвідувачів.' },
			{ name: 'Люся', category: 'Великі коти', slug: 'lyusya', image: pick(c, 2), text: 'Представниця великих котів парку.' },
			{ name: 'Лео', category: 'Великі коти', slug: 'leo', image: pick(c, 3), text: 'Великий кіт із каталогу мешканців «АРДЕНУ».' },
			{ name: 'Яся', category: 'Великі коти', slug: 'yasya', image: pick(c, 4), text: 'Мешканка секції великих котів.' },
			{ name: 'Пірат', category: 'Великі коти', slug: 'pirat', image: pick(c, 5), text: 'Хижак із сильним характером і виразним образом.' },
			{ name: 'Луна', category: 'Великі коти', slug: 'luna', image: pick(c, 6), text: 'Мешканка секції великих котів.' },
			{ name: 'Одін', category: 'Великі коти', slug: 'odin', image: pick(c, 0), text: 'Представник великих хижаків парку.' },
			{ name: 'Султан', category: 'Великі коти', slug: 'sultan', image: pick(c, 1), text: 'Великий кіт із каталогу парку.' },
			{ name: 'Жозефіна', category: 'Великі коти', slug: 'zhozefina', image: pick(c, 2), text: 'Мешканка секції великих котів.' },
			{ name: 'Ельза', category: 'Великі коти', slug: 'elza', image: pick(c, 3), text: 'Представниця великих котів парку.' },
			{ name: 'Авелія', category: 'Великі коти', slug: 'aveliya', image: pick(c, 4), text: 'Мешканка секції великих котів.' },
			{ name: 'Валєра', category: 'Великі коти', slug: 'valyera', image: pick(c, 5), text: 'Великий кіт із каталогу мешканців парку.' },
			{ name: 'Льова', category: 'Великі коти', slug: 'lyova', image: pick(c, 6), text: 'Представник секції великих котів.' },
			{ name: 'Білий тигр', category: 'Великі коти', slug: 'bilyy-tyhr', image: pick(c, 0), text: 'Білий тигр − один із найяскравіших хижаків парку.' },
			{ name: 'Сімейство капуцинів', category: 'Примати', slug: 'simeystvo-kaputsyniv', image: pick(p, 0), text: 'Активні та допитливі примати, за якими цікаво спостерігати.' },
			{ name: 'Сімейство лемурів', category: 'Примати', slug: 'simeystvo-lemuriv', image: pick(p, 4), text: 'Лемури − яскраві й рухливі мешканці парку.' },
			{ name: 'Сімейство зелених мавп', category: 'Примати', slug: 'simeystvo-zelenyh-mavp', image: pick(p, 1), text: 'Родина зелених мавп із характерною поведінкою та активністю.' },
			{ name: 'Сімейство бабуїнів', category: 'Примати', slug: 'simeystvo-babuyiniv', image: pick(p, 5), text: 'Бабуїни − сильні соціальні примати з виразною поведінкою.' },
			{ name: 'Вовчі зграї', category: 'Вовки', slug: 'vovchi-zgrayi', image: pick(w, 0), text: 'Вовки живуть зграями та створюють особливу атмосферу дикого лісу.' },
			{ name: 'Благородні олені', category: 'Олені та копитні', slug: 'blahorodni-oleni', image: pick(h, 0), text: 'Красиві лісові мешканці з розлогими рогами.' },
			{ name: 'Муфлони', category: 'Олені та копитні', slug: 'muflony', image: pick(h, 4), text: 'Копитні тварини, які доповнюють природну різноманітність парку.' },
			{ name: 'Лані', category: 'Олені та копитні', slug: 'lani', image: pick(h, 3), text: 'Спокійні й граційні мешканці природного простору.' },
			{ name: 'Орлан-білохвіст', category: 'Птахи', slug: 'orlan-bilohvist', image: pick(bi, 0), text: 'Один із найбільших пернатих хижаків Європи.' },
			{ name: 'Яструб', category: 'Птахи', slug: 'yastrub', image: pick(bi, 1), text: 'Хижий птах родини яструбових.' },
			{ name: 'Канюк', category: 'Птахи', slug: 'kanyuk', image: pick(bi, 2), text: 'Хижий птах, якого можна побачити у реабілітаційному центрі.' },
			{ name: 'Підорлик', category: 'Птахи', slug: 'pidorlyk', image: pick(bi, 3), text: 'Представник денних хижих птахів України.' },
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
