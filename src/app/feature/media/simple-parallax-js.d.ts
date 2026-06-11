declare module 'simple-parallax-js/vanilla' {
	type Orientation =
		| 'up'
		| 'right'
		| 'down'
		| 'left'
		| 'up left'
		| 'up right'
		| 'down left'
		| 'down right';

	interface SimpleParallaxOptions {
		customContainer?: Element | string;
		customWrapper?: string;
		delay?: number;
		maxTransition?: number;
		orientation?: Orientation;
		overflow?: boolean;
		scale?: number;
		transition?: string;
	}

	export default class SimpleParallax {
		constructor(
			elements: Element | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | string,
			options?: SimpleParallaxOptions,
		);

		refresh(): void;
		destroy(): void;
	}
}
