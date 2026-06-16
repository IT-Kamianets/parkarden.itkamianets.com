import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
		{ label: 'Екскурсії', path: '/ekskursii', style: 'primary' },
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
			title: "Понеділок − п'ятниця",
			time: 'Щогодини з 10:00 до 17:00',
		},
		{
			title: 'Субота − неділя',
			time: 'Щогодини з 10:00 до 18:00',
		},
	];

	protected readonly formFields = [
		{ label: "Ім'я", name: 'name', type: 'text', required: true },
		{ label: 'Телефон', name: 'phone', type: 'tel', required: true },
		{ label: 'Email', name: 'email', type: 'email', required: false },
		{ label: 'Тема звернення', name: 'subject', type: 'text', required: false },
	];

	protected readonly socialButtons = ['Instagram', 'Facebook', 'YouTube'];

	protected readonly finalCtaButtons = [
		{ label: 'Екскурсії', path: '/ekskursii', style: 'primary' },
		{ label: 'Інформація для гостей', path: '/gostiam', style: 'secondary' },
	];

	protected readonly formData = signal<Record<string, string>>({});
	protected readonly submitting = signal(false);
	protected readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');

	protected updateFormValue(name: string, value: string): void {
		this.formData.update(data => ({ ...data, [name]: value }));
	}

	protected async submitForm(): Promise<void> {
		const data = this.formData();

		this.submitting.set(true);
		this.submitStatus.set('idle');

		const lines = [
			`Ім'я: ${data['name'] ?? ''}`,
			`Телефон: ${data['phone'] ?? ''}`,
			data['email'] ? `Email: ${data['email']}` : '',
			data['subject'] ? `Тема: ${data['subject']}` : '',
			data['message'] ? `Повідомлення: ${data['message']}` : '',
		].filter(Boolean);

		const message = `📩 Контактна форма:\n${lines.join('\n')}`;

		try {
			const response = await fetch('https://it.webart.work/api/telegram/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ slug: 'parkarden', message }),
			});
			this.submitStatus.set(response.ok ? 'success' : 'error');
		} catch {
			this.submitStatus.set('error');
		} finally {
			this.submitting.set(false);
		}
	}
}
