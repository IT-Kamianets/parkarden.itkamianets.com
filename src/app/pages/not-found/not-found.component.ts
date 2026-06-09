import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './not-found.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
	protected readonly notFoundImage = parkardenImageForKey('src/app/pages/not-found/not-found.component.ts-1');

	protected readonly quickLinks = [
		{ label: 'Головна', path: '/' },
		{ label: 'Тварини', path: '/tvaryny' },
		{ label: 'Екскурсії', path: '/ekskursii' },
		{ label: 'Інформація для гостей', path: '/gostiam' },
		{ label: 'Контакти', path: '/kontakty' },
	];
}
