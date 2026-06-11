import { isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Directive,
	ElementRef,
	NgZone,
	OnDestroy,
	PLATFORM_ID,
	inject,
	input,
} from '@angular/core';
import type SimpleParallax from 'simple-parallax-js/vanilla';

type ParallaxOrientation =
	| 'up'
	| 'right'
	| 'down'
	| 'left'
	| 'up left'
	| 'up right'
	| 'down left'
	| 'down right';

@Directive({
	selector: 'img[appParallaxImage]',
})
export class ParallaxImageDirective implements AfterViewInit, OnDestroy {
	private readonly elementRef = inject<ElementRef<HTMLImageElement>>(ElementRef);
	private readonly ngZone = inject(NgZone);
	private readonly platformId = inject(PLATFORM_ID);
	private instance?: SimpleParallax;
	private isDestroyed = false;

	readonly scale = input(1.14, { alias: 'appParallaxScale' });
	readonly orientation = input<ParallaxOrientation>('up', { alias: 'appParallaxOrientation' });
	readonly delay = input(0, { alias: 'appParallaxDelay' });

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) {
			return;
		}

		this.ngZone.runOutsideAngular(() => {
			void this.initialize();
		});
	}

	ngOnDestroy(): void {
		this.isDestroyed = true;
		this.instance?.destroy();
	}

	private async initialize(): Promise<void> {
		const { default: SimpleParallax } = await import('simple-parallax-js/vanilla');

		if (this.isDestroyed) {
			return;
		}

		this.instance = new SimpleParallax(this.elementRef.nativeElement, {
			delay: this.delay(),
			orientation: this.orientation(),
			overflow: true,
			scale: this.scale(),
			transition: 'cubic-bezier(0,0,0,1)',
		});
	}

	private prefersReducedMotion(): boolean {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}
}
