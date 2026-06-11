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
		feature: photo('bears_120', 'Ведмідь у природному вольєрі парку АРДЕН'),
		photos: [
			photo('bears_01', 'Ведмідь у лісовому вольєрі'),
			photo('bears_08', 'Ведмідь серед дерев'),
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
		feature: photo('lions_tigers_58', 'Великий кіт у Парку диких тварин АРДЕН'),
		photos: [
			photo('lions_tigers_01', 'Лев у парку АРДЕН'),
			photo('lions_tigers_07', 'Великий кіт у природному вольєрі'),
			photo('lions_tigers_18', 'Портрет хижака у парку'),
			photo('lions_tigers_33', 'Тигр у Парку диких тварин АРДЕН'),
			photo('lions_tigers_83', 'Великий хижак серед зелені'),
			photo('lions_tigers_108', 'Лев або тигр у просторому вольєрі'),
		],
	},
	{
		id: 'bridge',
		title: 'Міст-галерея і маршрут',
		kicker: '16 фото в архіві',
		description:
			'Міст-галерея показує парк як простір прогулянки: дерева, маршрут, висота, тихі оглядові точки і природна перспектива.',
		feature: photo('bridge_15', 'Маршрут мостом-галереєю серед дерев'),
		photos: [
			photo('bridge_01', 'Вхід до мосту-галереї'),
			photo('bridge_03', 'Літній міст-галерея у парку'),
			photo('bridge_04', 'Оглядовий маршрут у кронах дерев'),
			photo('bridge_08', 'Лісовий маршрут парку АРДЕН'),
			photo('bridge_11', 'Широкий вид мосту-галереї'),
			photo('bridge_16', 'Прогулянка мостом-галереєю'),
		],
	},
	{
		id: 'winter',
		title: 'Зима в АРДЕНІ',
		kicker: '128 фото в архіві',
		description:
			'Зимова серія додає галереї інший темп: сніг, тиша, контраст темного лісу і світлих маршрутів, спокійні кадри тварин.',
		feature: photo('winter_2024_01_08_72', 'Зимовий пейзаж у Парку диких тварин АРДЕН'),
		photos: [
			photo('winter_2024_01_08_01', 'Зимовий вид парку АРДЕН'),
			photo('winter_2024_01_08_03', 'Сніг у лісі парку'),
			photo('winter_2024_01_08_08', 'Зимова тиша у парку'),
			photo('winter_2024_01_08_43', 'Засніжений маршрут парком'),
			photo('winter_2024_01_08_72', 'Зимовий кадр з території парку'),
			photo('winter_2024_01_08_96', 'Парк АРДЕН взимку'),
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
			photo('monkeys_03', 'Мавпа у парку АРДЕН'),
			photo('monkeys_18', 'Примат у вольєрі парку'),
			photo('monkeys_42', 'Мавпа під час руху'),
			photo('monkeys_67', 'Портрет примата у парку'),
			photo('lemurs_04', 'Лемур у природному просторі'),
			photo('lemurs_36', 'Лемур на території парку'),
		],
	},
	{
		id: 'forest-animals',
		title: 'Лісові тварини',
		kicker: '128 фото в архіві',
		description:
			'Олені, вовки, муфлони, лані, хижі птахи та інші мешканці показують парк як природний ландшафт, а не лише набір вольєрів.',
		feature: photo('deer_35', 'Олень у природному просторі парку АРДЕН'),
		photos: [
			photo('deer_03', 'Олень у парку АРДЕН'),
			photo('deer_16', 'Олені серед дерев'),
			photo('deer_41', 'Лісовий кадр з оленем'),
			photo('wolves_07', 'Вовк у лісовому просторі'),
			photo('wolves_23', 'Вовк у Парку диких тварин АРДЕН'),
			photo('mouflons_04', 'Муфлон на території парку'),
			photo('fallow_deer_02', 'Лань у природному середовищі'),
			photo('eagle_10', 'Хижий птах у реабілітаційному центрі'),
		],
	},
];

export const allGalleryPhotos = galleryAlbums.flatMap((album) => [
	album.feature,
	...album.photos,
]);
