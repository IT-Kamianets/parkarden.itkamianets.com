import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './pro-park.component.html',
	styleUrl: './pro-park.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProParkComponent {
	// TODO: Replace with atmospheric wide photo of Park Arden: forest, bridge-gallery, or wild animal in natural surroundings.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of Park Arden territory, forest path, bridge-gallery, or natural landscape.
	protected readonly introImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo connected with the creation of the park, entrance, territory, or founder-related material.
	protected readonly historyImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of Podільські Товтри, Sатaнівський forest, park hills, trees, or walking route.
	protected readonly natureImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of the forest bridge-gallery.
	protected readonly bridgeGalleryImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of bears in Park Arden forest enclosures.
	protected readonly bearsImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with emotional real photo of rescued animal, animal care moment, or close-up animal portrait.
	protected readonly rescueStoriesImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with strong closing photo: animal portrait, bridge-gallery, family excursion, or warm park landscape.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

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
			// TODO: Replace with real bear photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Велика ведмежа колекція − одна з головних особливостей парку.',
		},
		{
			title: 'Великі коти',
			// TODO: Replace with real lion, tiger, or big cat photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Білі леви, левенята, тигри та інші хижаки, які вражають силою й красою.',
		},
		{
			title: 'Примати',
			// TODO: Replace with real primates photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Капуцини, лемури, зелені мавпи та бабуїни.',
		},
		{
			title: 'Вовки',
			// TODO: Replace with real wolf photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Вовчі зграї нагадують про справжній характер дикого лісу.',
		},
		{
			title: 'Олені та копитні',
			// TODO: Replace with real deer, mouflon, or fallow deer photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Благородні олені, муфлони, лані та інші тварини лісового простору.',
		},
		{
			title: 'Птахи',
			// TODO: Replace with real bird or rehabilitation center photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
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
			// TODO: Replace with real photo of family visitors.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Безпечний і пізнавальний формат для спільного відпочинку.',
		},
		{
			title: 'Школи та дитячі табори',
			// TODO: Replace with real photo of school group or children on excursion.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Екскурсія як частина екоосвіти та живого знайомства з природою.',
		},
		{
			title: 'Туристи',
			// TODO: Replace with real tourist route or park atmosphere photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Атмосферна природна локація для тих, хто подорожує Поділлям.',
		},
		{
			title: 'Меценати та партнери',
			// TODO: Replace with real animal care, feeding, or support-related photo.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			text: 'Можливість підтримати важливий природоохоронний проєкт.',
		},
	];
}
