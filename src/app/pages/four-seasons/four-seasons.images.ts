export interface FourSeasonsPhoto {
	src: string;
	width: number;
	height: number;
	alt: string;
}

const cdn = 'https://cdn-it.webart.work/parkarden/';

const photo = (file: string, alt: string): FourSeasonsPhoto => ({
	src: `${cdn}${file}`,
	width: 1024,
	height: 768,
	alt,
});

export const fourSeasonsPhotos = {
	hero: photo('deer_51.webp', 'Олень у парку диких тварин АРДЕН'),
	seasonalVisit: photo('bridge_01.webp', 'Bridge gallery route at Park Arden'),
	finalCta: photo('animals_processed_01.webp', 'Animals and nature at Park Arden'),
	seasons: {
		spring: photo('bears_01.webp', 'Spring animals at Park Arden'),
		summer: photo('bridge_02.webp', 'Green summer route at Park Arden'),
		autumn: photo('deer_01.webp', 'Deer in the seasonal forest at Park Arden'),
		winter: photo('winter_2024_01_08_02.webp', 'Winter forest at Park Arden'),
	},
	details: {
		spring: {
			hero: photo('deer_11.webp', 'Олень у весняному парку АРДЕН'),
			gallery: [
				photo('deer_07.webp', 'Олень у парку АРДЕН'),
				photo('eagle_07.webp', 'Хижий птах у парку АРДЕН'),
				photo('lions_tigers_52.webp', 'Великий кіт навесні'),
				photo('deer_36.webp', 'Олень у весняному лісі'),
				photo('lions_tigers_27.webp', 'Хижак у парку АРДЕН'),
				photo('deer_31.webp', 'Олень у природному просторі'),
				photo('lions_tigers_36.webp', 'Великий кіт у вольєрі'),
				photo('llama_pony_06.webp', 'Тварини парку АРДЕН навесні'),
				photo('monkeys_58.webp', 'Примат у весняному парку'),
			],
		},
		summer: {
			hero: photo('bridge_11.webp', 'Міст-галерея у парку АРДЕН'),
			gallery: [
				photo('eagle_01.webp', 'Орлан у парку АРДЕН'),
				photo('llama_pony_01.webp', 'Тварини парку АРДЕН влітку'),
				photo('monkeys_18.webp', 'Примат у вольєрі парку'),
				photo('lions_tigers_121.webp', 'Хижак у парку АРДЕН'),
				photo('lemurs_04.webp', 'Лемур у природному просторі'),
				photo('monkeys_44.webp', 'Мавпа у парку АРДЕН'),
				photo('deer_01.webp', 'Олень у парку АРДЕН'),
				photo('lions_tigers_106.webp', 'Великий кіт у вольєрі'),
				photo('monkeys_01.webp', 'Мавпа у літньому парку'),
				photo('deer_60.webp', 'Олень у лісі парку АРДЕН'),
			],
		},
		autumn: {
			hero: photo('deer_14.webp', 'Олень у осінньому лісі парку АРДЕН'),
			gallery: [
				photo('deer_51.webp', 'Олень у парку АРДЕН'),
				photo('mouflons_02.webp', 'Муфлони у природному середовищі'),
				photo('wolves_04.webp', 'Вовк в осінньому лісі'),
				photo('bears_02.webp', 'Ведмідь у парку АРДЕН'),
				photo('bears_57.webp', 'Ведмідь у зеленому вольєрі'),
				photo('lions_tigers_21.webp', 'Великий кіт у вольєрі'),
				photo('bears_136.webp', 'Ведмідь у лісовому просторі'),
				photo('wolves_08.webp', 'Вовк у парку АРДЕН'),
				photo('bears_97.webp', 'Ведмідь на території парку'),
				photo('llama_pony_05.webp', 'Тварини парку АРДЕН'),
				photo('bears_103.webp', 'Ведмідь у природному вольєрі'),
				photo('bridge_08.webp', 'Маршрут парку АРДЕН'),
			],
		},
		winter: {
			hero: photo('winter_2024_01_08_03.webp', 'Quiet winter at Park Arden'),
			gallery: [
				photo('winter_2024_01_08_97.webp', 'Зима у парку АРДЕН'),
				photo('winter_2024_01_08_05.webp', 'Зимовий вид парку АРДЕН'),
				photo('winter_2024_01_08_103.webp', 'Сніг у лісі парку'),
				photo('winter_2024_01_08_96.webp', 'Зимовий маршрут парком'),
				photo('winter_2024_01_08_80.webp', 'Засніжений ліс парку'),
				photo('winter_2024_01_08_24.webp', 'Зимова атмосфера парку'),
				photo('winter_2024_01_08_73.webp', 'Парк АРДЕН взимку'),
				photo('winter_2024_01_08_68.webp', 'Зимова природа парку'),
				photo('winter_2024_01_08_60.webp', 'Зимовий кадр з парку'),
				photo('winter_2024_01_08_75.webp', 'Засніжений маршрут'),
				photo('winter_2024_01_08_52.webp', 'Зима в АРДЕНІ'),
				photo('winter_2024_01_08_114.webp', 'Зимова тиша у парку'),
			],
		},
	},
	animals: {
		bears: photo('bears_57.webp', 'Bears through the seasons at Park Arden'),
		bigCats: photo('lions_tigers_01.webp', 'Big cats at Park Arden'),
		wolves: photo('wolves_02.webp', 'Wolves in the forest at Park Arden'),
		hoofed: photo('deer_31.webp', 'Deer and hoofed animals at Park Arden'),
	},
};
