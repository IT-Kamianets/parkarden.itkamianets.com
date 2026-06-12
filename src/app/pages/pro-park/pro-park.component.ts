import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForAnimal, parkardenImageForKey, parkardenImages } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './pro-park.component.html',
	styleUrl: './pro-park.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProParkComponent {
	protected readonly heroImage = parkardenImages.specific.animalsProcessed01;
	protected readonly introImage = parkardenImages.place.bridgeWide;
	protected readonly historyImage = parkardenImageForKey('src/app/pages/pro-park/pro-park.component.ts-3');
	protected readonly natureImage = parkardenImages.specific.lemurs11;
	protected readonly bridgeGalleryImage = parkardenImages.place.bridge06;
	protected readonly bearsImage = parkardenImages.specific.bears83;
	protected readonly rescueStoriesImage = parkardenImageForKey('src/app/pages/pro-park/pro-park.component.ts-7');
	protected readonly finalCtaImage = parkardenImages.place.bridge;

	protected readonly missionItems = [
		{
			title: 'Порятунок тварин',
			text: 'Допомога тваринам, які були врятовані з неволі, тісних кліток, приватних садиб, цирків або небезпечних територій.',
		},
		{
			title: 'Реабілітація',
			text: 'Створення умов для поступового відновлення завдяки простору, якісному харчуванню, ветеринарному догляду та щоденній турботі.',
		},
		{
			title: 'Екоосвіта',
			text: 'Екскурсії допомагають дітям і дорослим краще зрозуміти дику природу, хижаків та роль людини у збереженні тварин.',
		},
		{
			title: 'Екотуризм',
			text: 'Парк поєднує пізнавальну подорож, природний відпочинок і відповідальне ставлення до довкілля.',
		},
	];

	protected readonly bridgeFacts = [
		'Протяжність: близько 1 км',
		'Висота: близько 5 метрів',
		'Формат: оглядовий маршрут у кронах дерев',
		'Перевага: безпечне спостереження за природою та тваринами',
	];

	protected readonly bearHighlights = [
		'Тоша − один із найстаріших мешканців парку',
		'Гоша − гімалайський ведмідь із характерним білим комірцем',
		'Міша та Маша − перші жителі парку-притулку',
		'Коржик, Бублик і Машуня − молоді активні ведмеді',
		'Даша та Ася − спритні ведмедиці, які лазять по деревах',
		'Микита та Ілля − дорослі ведмеді, що вражають могутністю',
	];

	protected readonly animalGroups = [
		{
			title: 'Ведмеді',
			image: parkardenImageForAnimal('ведмеді про парк'),
			text: 'Велика ведмежа колекція − одна з головних особливостей парку.',
		},
		{
			title: 'Великі коти',
			image: parkardenImages.specific.animalsProcessed02,
			text: 'Білі леви, левенята, тигри та інші хижаки, які вражають силою й красою.',
		},
		{
			title: 'Примати',
			image: parkardenImages.specific.animalsProcessed04,
			text: 'Капуцини, лемури, зелені мавпи та бабуїни.',
		},
		{
			title: 'Вовки',
			image: parkardenImageForAnimal('вовчі зграї ліс 2'),
			text: 'Вовчі зграї нагадують про справжній характер дикого лісу.',
		},
		{
			title: 'Олені та копитні',
			image: parkardenImages.specific.deer06,
			text: 'Благородні олені, муфлони, лані та інші тварини лісового простору.',
		},
		{
			title: 'Птахи',
			image: parkardenImages.specific.eagle07,
			text: 'У реабілітаційному центрі можна побачити хижих птахів родини яструбових.',
		},
	];

	protected readonly experienceItems = [
		{
			title: 'Неповторна фауна',
			text: 'Знайомство з дикою природою лісів подільського краю.',
		},
		{
			title: 'Цікаві екскурсії',
			text: 'Розповіді про походження тварин, їхні звички, харчування та таємниці Сатанівського лісу.',
		},
		{
			title: 'Прогулянка диким лісом',
			text: 'Атмосфера природного маршруту серед дерев, тиші та чистого повітря.',
		},
		{
			title: 'Сувенірна лавка',
			text: 'Можливість придбати сувеніри, які нагадуватимуть про подорож до парку.',
		},
	];

	protected readonly audienceCards = [
		{
			title: 'Родини з дітьми',
			image: parkardenImages.specific.lemurs18,
			text: 'Безпечний і пізнавальний формат для спільного відпочинку.',
		},
		{
			title: 'Школи та дитячі табори',
			image: parkardenImages.specific.bears57,
			text: 'Екскурсія як частина екоосвіти та живого знайомства з природою.',
		},
		{
			title: 'Туристи',
			image: parkardenImages.place.route,
			text: 'Атмосферна природна локація для тих, хто подорожує Поділлям.',
		},
		{
			title: 'Меценати та партнери',
			image: parkardenImages.specific.lionsTigers18,
			text: 'Можливість підтримати важливий природоохоронний проєкт.',
		},
	];
}
