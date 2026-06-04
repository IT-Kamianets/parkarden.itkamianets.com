import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

const TEMPORARY_PLACEHOLDER_IMAGE = 'logo.png';

@Component({
	imports: [FormsModule, NgOptimizedImage, RouterLink],
	templateUrl: './kontakty.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KontaktyComponent {
	// TODO: Replace with real photo of park entrance, road to Park Arden, visitors arriving, or bridge-gallery.
	protected readonly heroImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Use placeholder for now. Later replace with Google Maps embed or static map preview.
	protected readonly mapImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of parking area, park entrance, or visitors arriving.
	protected readonly parkingImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with real photo of administrator, park entrance, visitors, or warm animal photo.
	protected readonly phoneCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;
	// TODO: Replace with strong closing photo of Park Arden entrance, animal portrait, bridge-gallery, or family visitors.
	protected readonly finalCtaImage = TEMPORARY_PLACEHOLDER_IMAGE;

	protected readonly heroButtons = [
		{ label: 'Записатись на екскурсію', path: '/ekskursii', style: 'primary' },
		{ label: 'Показати на карті', fragment: 'map', style: 'secondary' },
	];

	protected readonly contactCards = [
		{
			icon: '⌖',
			title: 'Адреса',
			text: 'вул. Курортна, 40/1, смт Сатанів, Хмельницька область',
		},
		{
			icon: '☎',
			title: 'Телефон',
			text: '+38 (067) 313-44-00',
		},
		{
			icon: '@',
			title: 'Email',
			text: 'info@parkarden.com.ua',
		},
		{
			icon: '●',
			title: 'Формат відвідування',
			text: 'Вхід на територію парку тільки в складі групи з екскурсоводом.',
		},
	];

	protected readonly visitItems = [
		'Екскурсії проводяться щодня',
		'Потрібна попередня реєстрація за 1 день',
		'Рекомендований розмір групи − 15–25 осіб',
		'Тривалість екскурсії − 60 хвилин',
		'Самостійний вхід на територію парку заборонено',
		'На території є власна парковка',
	];

	protected readonly scheduleCards = [
		{
			title: 'Понеділок − п’ятниця',
			time: 'Щогодини з 10:00 до 17:00',
		},
		{
			title: 'Субота − неділя',
			time: 'Щогодини з 10:00 до 18:00',
		},
	];

	protected readonly formFields = [
		{ label: 'Ім’я', name: 'name', type: 'text' },
		{ label: 'Телефон', name: 'phone', type: 'tel' },
		{ label: 'Email', name: 'email', type: 'email' },
		{ label: 'Тема звернення', name: 'subject', type: 'text' },
	];

	protected readonly socialButtons = ['Instagram', 'Facebook', 'YouTube'];

	protected readonly finalCtaButtons = [
		{ label: 'Записатись на екскурсію', path: '/ekskursii', style: 'primary' },
		{ label: 'Інформація для гостей', path: '/gostiam', style: 'secondary' },
	];
}
