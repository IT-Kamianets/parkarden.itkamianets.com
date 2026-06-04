import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

interface ImageCard {
	title: string;
	text: string;
	image: string;
	imageTodo: string;
}

interface SeasonDetail extends ImageCard {
	highlights: string[];
	gallery: ImageCard[];
}

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './four-seasons.component.html',
	styleUrl: './four-seasons.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourSeasonsComponent {
	// TODO: Replace with strong seasonal hero photo or collage: animals and Park Arden nature across four seasons.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real collage of four seasons or strong seasonal Park Arden photo.
	protected readonly seasonalVisitImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with emotional animal photo or four-season park collage.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

	protected readonly heroButtons = [
		{ label: 'Записатись на екскурсію', link: '/ekskursii', variant: 'primary' },
		{ label: 'Дивитись галерею', link: '/galereya', variant: 'secondary' },
	];

	protected readonly visitButtons = [
		{ label: 'Записатись на екскурсію', link: '/ekskursii', variant: 'primary' },
		{ label: 'Інформація для гостей', link: '/gostiam', variant: 'secondary' },
	];

	protected readonly finalButtons = [
		{ label: 'Запланувати візит', link: '/ekskursii', variant: 'primary' },
		{ label: 'Дивитись галерею', link: '/galereya', variant: 'secondary' },
	];

	protected readonly seasons: ImageCard[] = [
		{
			title: 'Весна',
			// TODO: Replace with real spring photo of animals, bear cubs, first leaves, or forest awakening.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real spring photo of animals, bear cubs, first leaves, or forest awakening.',
			text: 'Природа прокидається, на деревах з’являються перші зелені листочки, а молоді тварини стають активнішими й допитливішими.',
		},
		{
			title: 'Літо',
			// TODO: Replace with real summer photo of green forest, animals, excursion route, or family visitors.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real summer photo of green forest, animals, excursion route, or family visitors.',
			text: 'Найсоковитіший сезон для прогулянок, фото, сімейних екскурсій і спостереження за тваринами серед густої зелені.',
		},
		{
			title: 'Осінь',
			// TODO: Replace with real autumn photo of animals, warm forest colors, leaves, or bridge-gallery route.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real autumn photo of animals, warm forest colors, leaves, or bridge-gallery route.',
			text: 'Ліс змінює кольори, маршрути стають особливо атмосферними, а парк відкривається у теплих природних відтінках.',
		},
		{
			title: 'Зима',
			// TODO: Replace with real winter photo of bears, snow, forest, dens, or quiet park landscape.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real winter photo of bears, snow, forest, dens, or quiet park landscape.',
			text: 'Більшість ведмедів дрімає у барлогах, але іноді відвідувачам щастить побачити господарів лісу навіть узимку.',
		},
	];

	protected readonly seasonDetails: SeasonDetail[] = [
		{
			title: 'Весна: пробудження парку',
			// TODO: Replace with real spring photo: bear cubs, first green leaves, animals after winter, or forest awakening.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real spring photo: bear cubs, first green leaves, animals after winter, or forest awakening.',
			text: 'Навесні в «АРДЕНІ» відчувається рух і оновлення. На деревах з’являються перші зелені листочки, які дуже смакують ведмедям. Молоді ведмежата можуть вилізти на дерево та посмакувати зеленню прямо з гілок. Весна - це пора активності, гри, цікавості та перших яскравих фото після зими.',
			highlights: [
				'Перші зелені листочки',
				'Більше активності у тварин',
				'Весняні розваги ведмежат',
				'Пробудження лісу',
				'М’яке світло для фото',
			],
			gallery: [
				{
					title: 'Ведмежата навесні',
					// TODO: Replace with real spring photo of bear cubs.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real spring photo of bear cubs.',
					text: '',
				},
				{
					title: 'Перші зелені листочки',
					// TODO: Replace with real close-up or forest photo with spring greenery.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real close-up or forest photo with spring greenery.',
					text: '',
				},
				{
					title: 'Пробудження лісу',
					// TODO: Replace with real spring landscape from Park Arden.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real spring landscape from Park Arden.',
					text: '',
				},
			],
		},
		{
			title: 'Літо: зелень, маршрут і сімейні екскурсії',
			// TODO: Replace with real summer photo: green forest, animals, visitors, bridge-gallery, or family excursion.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real summer photo: green forest, animals, visitors, bridge-gallery, or family excursion.',
			text: 'Влітку парк виглядає особливо насичено: густий ліс, зелений маршрут, чисте повітря та багато можливостей для яскравих фото. Це зручний сезон для родинних поїздок, групових екскурсій і знайомства з мешканцями парку. Літня прогулянка мостом-галереєю дозволяє побачити парк з висоти, пройти крізь зелену атмосферу лісу та відчути простір дикої природи.',
			highlights: [
				'Густа зелень лісу',
				'Сімейні екскурсії',
				'Прогулянка мостом-галереєю',
				'Більше світла для фото',
				'Зручний сезон для групових відвідувань',
			],
			gallery: [
				{
					title: 'Літній міст-галерея',
					// TODO: Replace with real summer photo of bridge-gallery.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real summer photo of bridge-gallery.',
					text: '',
				},
				{
					title: 'Тварини серед зелені',
					// TODO: Replace with real summer animal photo.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real summer animal photo.',
					text: '',
				},
				{
					title: 'Родинна екскурсія',
					// TODO: Replace with real summer visitors or family photo.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real summer visitors or family photo.',
					text: '',
				},
			],
		},
		{
			title: 'Осінь: теплі кольори дикого лісу',
			// TODO: Replace with real autumn photo: warm forest, animals, leaves, bridge-gallery, or park route.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo:
				'Replace with real autumn photo: warm forest, animals, leaves, bridge-gallery, or park route.',
			text: 'Восени «АРДЕН» стає особливо атмосферним. Ліс змінює кольори, маршрут набуває спокійного настрою, а фото тварин на фоні осінньої природи виглядають дуже виразно. Це пора для неспішних екскурсій, красивих пейзажів і теплого природного світла.',
			highlights: [
				'Осінні кольори лісу',
				'Тиха атмосфера маршруту',
				'Виразні фото тварин',
				'М’яке природне світло',
				'Спокійна прогулянка серед природи',
			],
			gallery: [
				{
					title: 'Осінній ліс',
					// TODO: Replace with real autumn forest photo from Park Arden.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real autumn forest photo from Park Arden.',
					text: '',
				},
				{
					title: 'Тварини восени',
					// TODO: Replace with real autumn animal photo.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real autumn animal photo.',
					text: '',
				},
				{
					title: 'Осінній маршрут',
					// TODO: Replace with real bridge-gallery or walking path photo in autumn.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real bridge-gallery or walking path photo in autumn.',
					text: '',
				},
			],
		},
		{
			title: 'Зима: тиша, сніг і господарі лісу',
			// TODO: Replace with real winter photo: snow, bears, dens, forest, or quiet park atmosphere.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real winter photo: snow, bears, dens, forest, or quiet park atmosphere.',
			text: 'Взимку парк має зовсім інший настрій. Більшість ведмедів дрімає у барлогах, але іноді деякі з них виходять на короткий час, проходяться територією і знову повертаються у свій зимовий спокій. Зимовий «АРДЕН» - це тиша лісу, сніг, стримані кольори та особлива атмосфера дикої природи.',
			highlights: [
				'Зимова тиша парку',
				'Ведмеді у барлогах',
				'Можливість побачити тварин узимку',
				'Сніг і спокійний ліс',
				'Інший настрій знайомого маршруту',
			],
			gallery: [
				{
					title: 'Ведмідь узимку',
					// TODO: Replace with real winter bear photo.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real winter bear photo.',
					text: '',
				},
				{
					title: 'Сніг у парку',
					// TODO: Replace with real snowy landscape from Park Arden.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real snowy landscape from Park Arden.',
					text: '',
				},
				{
					title: 'Зимовий маршрут',
					// TODO: Replace with real winter photo of bridge-gallery or forest path.
					image: TEMPORARY_PLACEHOLDER_IMAGE,
					imageTodo: 'Replace with real winter photo of bridge-gallery or forest path.',
					text: '',
				},
			],
		},
	];

	protected readonly animalSeasonCards: ImageCard[] = [
		{
			title: 'Ведмеді',
			// TODO: Replace with seasonal bear photos from different months.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with seasonal bear photos from different months.',
			text: 'Навесні ведмеді активізуються, влітку багато рухаються, восени готуються до холодів, а взимку частина з них дрімає у барлогах.',
		},
		{
			title: 'Великі коти',
			// TODO: Replace with real seasonal photos of lions, tigers, or other big cats.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real seasonal photos of lions, tigers, or other big cats.',
			text: 'Великі коти виглядають по-різному залежно від світла, погоди та сезону, але завжди зберігають свою силу й грацію.',
		},
		{
			title: 'Вовки',
			// TODO: Replace with real seasonal wolf photos.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real seasonal wolf photos.',
			text: 'Вовки особливо атмосферно виглядають у лісі, а взимку їхній образ стає ще ближчим до дикої природи.',
		},
		{
			title: 'Олені та копитні',
			// TODO: Replace with real seasonal deer or hoofed animal photos.
			image: TEMPORARY_PLACEHOLDER_IMAGE,
			imageTodo: 'Replace with real seasonal deer or hoofed animal photos.',
			text: 'Олені, муфлони та лані гармонійно вписуються в природний ландшафт у будь-яку пору року.',
		},
	];

	protected readonly photoChecklist = [
		'Весна: тварини після зими, перша зелень, ведмежата, весняний ліс',
		'Літо: тварини серед зелені, міст-галерея, екскурсії, родини, пік сезону',
		'Осінь: тварини на фоні жовтого листя, осінній ліс, маршрут, міст',
		'Зима: сніг, ведмеді, барлоги, тихий ліс, зимова атмосфера',
		'Окремо: фото одного й того ж місця в різні сезони для порівняння',
	];
}
