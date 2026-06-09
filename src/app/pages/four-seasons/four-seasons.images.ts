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
	hero: photo('winter_2024_01_08_01.webp', 'Snowy winter view at Park Arden'),
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
			hero: photo('bears_02.webp', 'Spring awakening at Park Arden'),
			gallery: [
				photo('bears_03.webp', 'Young bears in spring'),
				photo('animals_processed_02.webp', 'Fresh spring nature in the park'),
				photo('animals_processed_03.webp', 'Animals after winter at Park Arden'),
				photo('bears_04.webp', 'Bear activity in spring'),
				photo('animals_processed_04.webp', 'Spring forest atmosphere'),
				photo('bears_06.webp', 'Bears among spring greenery'),
				photo('animals_processed_05.webp', 'Spring animal photo at Park Arden'),
				photo('animals_processed_06.webp', 'Park Arden nature after winter'),
				photo('bears_07.webp', 'Spring bears in the park'),
				photo('animals_processed_07.webp', 'Forest waking up in spring'),
				photo('bears_08.webp', 'Curious bears in spring'),
				photo('animals_processed_08.webp', 'Spring route atmosphere'),
			],
		},
		summer: {
			hero: photo('bridge_03.webp', 'Summer bridge gallery at Park Arden'),
			gallery: [
				photo('bridge_04.webp', 'Bridge gallery surrounded by greenery'),
				photo('deer_02.webp', 'Animals among summer greenery'),
				photo('bridge_05.webp', 'Summer walking route in the park'),
				photo('lemurs_01.webp', 'Animals during a summer visit'),
				photo('monkeys_01.webp', 'Summer animal photo at Park Arden'),
				photo('bridge_07.webp', 'Green bridge-gallery route'),
				photo('deer_06.webp', 'Deer in summer greenery'),
				photo('lemurs_02.webp', 'Lemurs during the warm season'),
				photo('monkeys_02.webp', 'Monkeys in the summer gallery'),
				photo('bridge_08.webp', 'Summer route through the forest'),
				photo('llama_pony_01.webp', 'Summer animals at Park Arden'),
				photo('eagle_01.webp', 'Birds of prey at Park Arden'),
			],
		},
		autumn: {
			hero: photo('deer_03.webp', 'Autumn mood in the wild forest'),
			gallery: [
				photo('deer_04.webp', 'Deer in seasonal forest colors'),
				photo('wolves_01.webp', 'Animals in autumn atmosphere'),
				photo('bridge_06.webp', 'Bridge route in a calm season'),
				photo('mouflons_01.webp', 'Hoofed animals at Park Arden'),
				photo('fallow_deer_01.webp', 'Fallow deer in the park'),
				photo('deer_07.webp', 'Deer in a quiet forest season'),
				photo('wolves_03.webp', 'Wolves in the seasonal forest'),
				photo('mouflons_02.webp', 'Mouflons in natural surroundings'),
				photo('fallow_deer_02.webp', 'Fallow deer in the forest'),
				photo('deer_08.webp', 'Autumn animal portrait'),
				photo('wolves_04.webp', 'Wild forest atmosphere with wolves'),
				photo('bridge_09.webp', 'Seasonal bridge-gallery route'),
			],
		},
		winter: {
			hero: photo('winter_2024_01_08_03.webp', 'Quiet winter at Park Arden'),
			gallery: [
				photo('winter_2024_01_08_04.webp', 'Snow in the park'),
				photo('winter_2024_01_08_05.webp', 'Winter route at Park Arden'),
				photo('winter_2024_01_08_06.webp', 'Snowy forest atmosphere'),
				photo('winter_2024_01_08_07.webp', 'Winter animal habitat'),
				photo('winter_2024_01_08_08.webp', 'Park Arden in winter'),
				photo('winter_2024_01_08_09.webp', 'Winter walking route'),
				photo('winter_2024_01_08_10.webp', 'Snow-covered Park Arden'),
				photo('winter_2024_01_08_11.webp', 'Quiet snowy forest'),
				photo('winter_2024_01_08_12.webp', 'Winter landscape in the park'),
				photo('winter_2024_01_08_13.webp', 'Park Arden winter details'),
				photo('winter_2024_01_08_14.webp', 'Snowy seasonal atmosphere'),
				photo('winter_2024_01_08_15.webp', 'Winter photo from Park Arden'),
			],
		},
	},
	animals: {
		bears: photo('bears_05.webp', 'Bears through the seasons at Park Arden'),
		bigCats: photo('lions_tigers_01.webp', 'Big cats at Park Arden'),
		wolves: photo('wolves_02.webp', 'Wolves in the forest at Park Arden'),
		hoofed: photo('deer_05.webp', 'Deer and hoofed animals at Park Arden'),
	},
};
