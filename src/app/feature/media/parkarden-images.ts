const CDN = 'https://cdn-it.webart.work/parkarden';

const _image = (name: string): string => `${CDN}/${name}.webp`;

const _hash = (value: string): number =>
	Array.from(value).reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0);

const _pick = (images: readonly string[], key: string): string => images[_hash(key) % images.length];

export const parkardenImages = {
	animals: {
		general: [_image('animals_processed_01'), _image('animals_processed_06'), _image('animals_processed_14'), _image('animals_processed_22')],
		bears: [_image('bears_01'), _image('bears_08'), _image('bears_17'), _image('bears_31'), _image('bears_57'), _image('bears_82'), _image('bears_104'), _image('bears_136')],
		bigCats: [_image('lions_tigers_01'), _image('lions_tigers_07'), _image('lions_tigers_18'), _image('lions_tigers_33'), _image('lions_tigers_58'), _image('lions_tigers_83'), _image('lions_tigers_108')],
		primates: [_image('monkeys_03'), _image('monkeys_18'), _image('monkeys_42'), _image('monkeys_67'), _image('lemurs_04'), _image('lemurs_18'), _image('lemurs_36')],
		wolves: [_image('wolves_02'), _image('wolves_07'), _image('wolves_14'), _image('wolves_23'), _image('wolves_31')],
		hoofed: [_image('deer_03'), _image('deer_16'), _image('deer_41'), _image('fallow_deer_02'), _image('mouflons_04'), _image('llama_pony_03')],
		birds: [_image('eagle_01'), _image('eagle_05'), _image('eagle_10'), _image('eagle_14')],
	},
	place: {
		hero: _image('animals_processed_03'),
		forest: _image('winter_2024_01_08_43'),
		bridge: _image('bridge_04'),
		bridgeWide: _image('bridge_11'),
		route: _image('bridge_15'),
		entrance: _image('bridge_01'),
		map: _image('bridge_08'),
	},
	seasons: {
		spring: _image('bears_120'),
		summer: _image('animals_processed_18'),
		autumn: _image('deer_35'),
		winter: _image('winter_2024_01_08_08'),
		winterBear: _image('winter_2024_01_08_72'),
	},
} as const;

export function parkardenImageForAnimal(key: string, category?: string): string {
	const normalized = `${category ?? ''} ${key}`.toLowerCase();

	if (normalized.includes('wolf') || normalized.includes('vov') || normalized.includes('вов')) {
		return _pick(parkardenImages.animals.wolves, key);
	}

	if (
		normalized.includes('deer') ||
		normalized.includes('mouflon') ||
		normalized.includes('лани') ||
		normalized.includes('ол') ||
		normalized.includes('муфлон')
	) {
		return _pick(parkardenImages.animals.hoofed, key);
	}

	if (
		normalized.includes('eagle') ||
		normalized.includes('hawk') ||
		normalized.includes('buzzard') ||
		normalized.includes('орлан') ||
		normalized.includes('яструб') ||
		normalized.includes('канюк') ||
		normalized.includes('птах')
	) {
		return _pick(parkardenImages.animals.birds, key);
	}

	if (
		normalized.includes('monkey') ||
		normalized.includes('lemur') ||
		normalized.includes('capuchin') ||
		normalized.includes('мавп') ||
		normalized.includes('лемур') ||
		normalized.includes('капуц')
	) {
		return _pick(parkardenImages.animals.primates, key);
	}

	if (
		normalized.includes('lion') ||
		normalized.includes('tiger') ||
		normalized.includes('лев') ||
		normalized.includes('тигр') ||
		normalized.includes('кот')
	) {
		return _pick(parkardenImages.animals.bigCats, key);
	}

	if (normalized.includes('bear') || normalized.includes('ведм')) {
		return _pick(parkardenImages.animals.bears, key);
	}

	return _pick(parkardenImages.animals.general, key);
}

export function parkardenImageForKey(key: string): string {
	return _pick(
		[
			...parkardenImages.animals.general,
			...parkardenImages.animals.bears,
			...parkardenImages.animals.bigCats,
			...parkardenImages.animals.primates,
			...parkardenImages.animals.wolves,
			...parkardenImages.animals.hoofed,
			...parkardenImages.animals.birds,
			parkardenImages.place.bridge,
			parkardenImages.place.forest,
			parkardenImages.seasons.winter,
		],
		key,
	);
}
