import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey } from '../../feature/media/parkarden-images';


@Component({
	imports: [FormsModule, NgOptimizedImage, RouterLink],
	templateUrl: './kontakty.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KontaktyComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/kontakty/kontakty.component.ts-1');
	protected readonly mapImage = parkardenImageForKey('src/app/pages/kontakty/kontakty.component.ts-2');
	protected readonly parkingImage = parkardenImageForKey('src/app/pages/kontakty/kontakty.component.ts-3');
	protected readonly phoneCtaImage = parkardenImageForKey('src/app/pages/kontakty/kontakty.component.ts-4');
	protected readonly finalCtaImage = parkardenImageForKey('src/app/pages/kontakty/kontakty.component.ts-5');

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
