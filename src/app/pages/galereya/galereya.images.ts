const CDN = 'https://cdn-it.webart.work/parkarden';

const image = (name: string): string => `${CDN}/${name}.webp`;

export interface GalleryPhoto {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface GalleryAlbum {
	id: string;
	title: string;
	kicker: string;
	description: string;
	feature: GalleryPhoto;
	photos: GalleryPhoto[];
}

const photo = (name: string, alt: string): GalleryPhoto => ({
	src: image(name),
	alt,
	width: 1200,
	height: 900,
});

export const galleryHeroPhoto = photo(
	'bridge_11',
	'Лісовий міст-галерея у Парку диких тварин АРДЕН',
);

export const galleryFinalPhoto = photo(
	'animals_processed_03',
	'Тварини і природа Парку диких тварин АРДЕН',
);

export const galleryAlbums: GalleryAlbum[] = [
	{
		id: 'bears',
		title: 'Ведмежа колекція',
		kicker: '168 фото в архіві',
		description:
			'Ведмеді є однією з найсильніших візуальних тем парку: спокійні портрети, активні моменти, зимові кадри та природні вольєри.',
		feature: photo('bears_103', 'Ведмідь у природному вольєрі парку АРДЕН'),
		photos: [
			photo('bears_85', 'Ведмідь у лісовому вольєрі'),
			photo('bears_02', 'Ведмідь серед дерев'),
			photo('bears_17', 'Портрет ведмедя у парку'),
			photo('bears_31', 'Ведмідь на території парку'),
			photo('bears_57', 'Ведмідь у зеленому вольєрі'),
			photo('bears_82', 'Ведмідь під час прогулянки'),
			photo('bears_104', 'Ведмідь у природному середовищі'),
			photo('bears_136', 'Ведмідь у лісовому просторі'),
		],
	},
	{
		id: 'big-cats',
		title: 'Великі коти',
		kicker: '129 фото в архіві',
		description:
			'Леви й тигри формують найвиразніші портретні кадри галереї: погляд, рух, фактура хутра і масштаб хижаків.',
		feature: photo('animals_processed_01', 'Великий кіт у Парку диких тварин АРДЕН'),
		photos: [
			photo('lions_tigers_22', 'Великий кіт у природному вольєрі'),
			photo('lions_tigers_18', 'Портрет хижака у парку'),
			photo('lions_tigers_83', 'Великий хижак серед зелені'),
			photo('lions_tigers_07', 'Великий кіт у природному вольєрі'),
			photo('lions_tigers_19', 'Великий кіт у парку АРДЕН'),
			photo('lions_tigers_21', 'Великий кіт у вольєрі'),
			photo('lions_tigers_121', 'Хижак у парку АРДЕН'),
			photo('lions_tigers_68', 'Великий кіт серед зелені'),
		],
	},
	{
		id: 'bridge',
		title: 'Міст-галерея і маршрут',
		kicker: '16 фото в архіві',
		description:
			'Міст-галерея показує парк як простір прогулянки: дерева, маршрут, висота, тихі оглядові точки і природна перспектива.',
		feature: photo('bridge_06', 'Маршрут мостом-галереєю серед дерев'),
		photos: [
			photo('bridge_11', 'Широкий вид мосту-галереї'),
			photo('bridge_08', 'Лісовий маршрут парку АРДЕН'),
			photo('winter_2024_01_08_103', 'Зимовий міст-галерея у парку АРДЕН'),
			photo('bridge_02', 'Міст-галерея у парку АРДЕН'),
			photo('bridge_01', 'Вхід до мосту-галереї'),
			photo('deer_14', 'Олень на маршруті парку АРДЕН'),
		],
	},
	{
		id: 'winter',
		title: 'Зима в АРДЕНІ',
		kicker: '128 фото в архіві',
		description:
			'Зимова серія додає галереї інший темп: сніг, тиша, контраст темного лісу і світлих маршрутів, спокійні кадри тварин.',
		feature: photo('winter_2024_01_08_97', 'Зимовий пейзаж у Парку диких тварин АРДЕН'),
		photos: [
			photo('winter_2024_01_08_05', 'Зимовий вид парку АРДЕН'),
			photo('winter_2024_01_08_103', 'Сніг у лісі парку'),
			photo('winter_2024_01_08_114', 'Зимова тиша у парку'),
			photo('winter_2024_01_08_123', 'Засніжений маршрут парком'),
			photo('winter_2024_01_08_52', 'Зимовий кадр з території парку'),
			photo('winter_2024_01_08_65', 'Парк АРДЕН взимку'),
			photo('winter_2024_01_08_69', 'Зимовий ліс у парку АРДЕН'),
			photo('winter_2024_01_08_66', 'Засніжена природа парку'),
		],
	},
	{
		id: 'primates',
		title: 'Примати і лемури',
		kicker: '137 фото в архіві',
		description:
			'Цей альбом працює як жива частина галереї: багато руху, міміки, деталей поведінки і коротких моментів спостереження.',
		feature: photo('lemurs_18', 'Лемур у Парку диких тварин АРДЕН'),
		photos: [
			photo('monkeys_18', 'Примат у вольєрі парку'),
			photo('monkeys_42', 'Мавпа під час руху'),
			photo('monkeys_67', 'Портрет примата у парку'),
			photo('lemurs_04', 'Лемур у природному просторі'),
			photo('monkeys_34', 'Мавпа у парку АРДЕН'),
			photo('lemurs_11', 'Лемур на території парку'),
			photo('monkeys_20', 'Примат у вольєрі парку'),
		],
	},
	{
		id: 'forest-animals',
		title: 'Лісові тварини',
		kicker: '128 фото в архіві',
		description:
			'Олені, вовки, муфлони, лані, хижі птахи та інші мешканці показують парк як природний ландшафт, а не лише набір вольєрів.',
		feature: photo('deer_27', 'Олень у природному просторі парку АРДЕН'),
		photos: [
			photo('deer_52', 'Олені серед дерев'),
			photo('deer_10', 'Лісовий кадр з оленем'),
			photo('deer_51', 'Олень у природному просторі'),
			photo('mouflons_05', 'Муфлон на території парку'),
			photo('mouflons_02', 'Муфлони у парку АРДЕН'),
			photo('wolves_28', 'Вовк у лісовому просторі'),
			photo('wolves_08', 'Вовк у парку АРДЕН'),
			photo('wolves_33', 'Вовк у Парку диких тварин АРДЕН'),
			photo('eagle_11', 'Хижий птах у реабілітаційному центрі'),
			photo('eagle_01', 'Орлан у парку АРДЕН'),
		],
	},
];

export const allGalleryPhotos = galleryAlbums.flatMap((album) => [
	album.feature,
	...album.photos,
]);
