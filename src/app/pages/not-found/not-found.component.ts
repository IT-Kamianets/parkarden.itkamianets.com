import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './not-found.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
	// TODO: Replace with friendly animal photo: bear, lion, wolf, or curious animal portrait from Park Arden.
	protected readonly notFoundImage = TEMPORARY_PLACEHOLDER_IMAGE;

	protected readonly quickLinks = [
		{ label: 'Головна', path: '/' },
		{ label: 'Тварини', path: '/tvaryny' },
		{ label: 'Екскурсії', path: '/ekskursii' },
		{ label: 'Інформація для гостей', path: '/gostiam' },
		{ label: 'Контакти', path: '/kontakty' },
	];
}
