import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { parkardenImageForKey, parkardenImages } from '../../feature/media/parkarden-images';

interface FormField {
	key: string;
	label: string;
	type: string;
	required: boolean;
}

const ADULT_PRICE = 400;
const CHILD_PRICE = 300;

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './ekskursii.component.html',
	styleUrl: './ekskursii.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EkskursiiComponent {
	protected readonly heroImage = parkardenImageForKey('src/app/pages/ekskursii/ekskursii.component.ts-1');
	protected readonly introImage = parkardenImages.specific.bears45;
	protected readonly groupImage = parkardenImageForKey('src/app/pages/ekskursii/ekskursii.component.ts-3');
	protected readonly phoneBookingImage = parkardenImageForKey('src/app/pages/ekskursii/ekskursii.component.ts-4');
	protected readonly finalCtaImage = parkardenImageForKey('src/app/pages/ekskursii/ekskursii.component.ts-5');

	protected readonly includedItems = [
		{
			title: 'Супровід екскурсовода',
			text: 'Екскурсовод розповідає про тварин, їхні історії та особливості життя в парку.',
		},
		{
			title: 'Огляд тварин',
			text: 'Ведмеді, великі коти, вовки, примати, олені, птахи та інші мешканці парку.',
		},
		{
			title: 'Лісовий міст-галерея',
			text: 'Майже кілометровий оглядовий маршрут у кронах дерев.',
		},
		{
			title: 'Прогулянка диким лісом',
			text: 'Атмосфера Подільських Товтр, чисте повітря, тиша та природні краєвиди.',
		},
		{
			title: 'Екоосвіта',
			text: 'Живе знайомство з дикою природою, відповідальним ставленням до тварин і місією парку.',
		},
	];

	protected readonly details = [
		'Тривалість: 60 хвилин',
		'Формат: тільки з екскурсоводом',
		'Рекомендована група: 15–25 осіб',
		'Реєстрація: мінімум за 1 день до візиту',
		'Екскурсії проводяться щодня',
		'Самостійний вхід на територію парку заборонено',
		'З домашніми тваринами вхід на оглядовий міст-галерею заборонено',
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

	protected readonly priceCards = [
		{
			title: 'Дорослий квиток',
			price: '400 грн',
			text: 'Для дорослих відвідувачів.',
		},
		{
			title: 'Дитячий квиток',
			price: '300 грн',
			text: 'Для школярів або дітей від 6 до 14 років, виключно в супроводі дорослих.',
		},
		{
			title: 'Діти до 6 років',
			price: 'Безкоштовно',
			text: 'Виключно в супроводі дорослих.',
		},
	];

	protected readonly groupBenefits = [
		'Зручно для шкіл, таборів і туристичних груп',
		'Окремий екскурсовод для групи',
		'Більше часу для запитань',
		'Можливість краще спланувати день',
		'Позитивні емоції та спільні враження',
	];

	protected readonly formFields: FormField[] = [
		{ key: 'firstName', label: "Ім'я", type: 'text', required: true },
		{ key: 'lastName', label: 'Прізвище', type: 'text', required: false },
		{ key: 'phone', label: 'Телефон', type: 'tel', required: true },
		{ key: 'email', label: 'Email', type: 'email', required: false },
		{ key: 'date', label: 'Бажана дата', type: 'date', required: false },
		{ key: 'time', label: 'Бажаний час', type: 'time', required: false },
		{ key: 'adults', label: 'Кількість дорослих', type: 'number', required: false },
		{ key: 'children', label: 'Кількість дітей 6–14 років', type: 'number', required: false },
		{ key: 'youngChildren', label: 'Кількість дітей до 6 років', type: 'number', required: false },
		{ key: 'comment', label: 'Коментар', type: 'text', required: false },
	];

	protected readonly rules = [
		'Вхід на територію парку тільки в складі групи з екскурсоводом.',
		'Самостійний вхід на територію парку заборонено.',
		'Для групового відвідування потрібна попередня реєстрація за 1 день.',
		'Рекомендований розмір групи − 15–25 осіб.',
		'Діти відвідують парк лише у супроводі дорослих.',
		'З домашніми тваринами вхід на оглядовий міст-галерею заборонено.',
		'Тривалість екскурсії − 60 хвилин.',
	];

	protected readonly finalButtons = [
		{
			label: 'Записатись на екскурсію',
			path: '/ekskursii',
			style: 'primary',
		},
		{
			label: 'Переглянути тварин',
			path: '/tvaryny',
			style: 'secondary',
		},
	];

	protected readonly adults = signal(0);
	protected readonly children = signal(0);
	protected readonly youngChildren = signal(0);
	protected readonly preliminaryTotal = computed(
		() => this.adults() * ADULT_PRICE + this.children() * CHILD_PRICE,
	);

	protected readonly formData = signal<Record<string, string>>({});
	protected readonly submitting = signal(false);
	protected readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');
	protected readonly showValidation = signal(false);

	protected readonly firstNameMissing = computed(
		() => this.showValidation() && !this.formData()['firstName']?.trim(),
	);
	protected readonly phoneMissing = computed(
		() => this.showValidation() && !this.formData()['phone']?.trim(),
	);

	protected fieldInputType(field: FormField): string {
		return field.type;
	}

	protected isNumberField(field: FormField): boolean {
		return ['adults', 'children', 'youngChildren'].includes(field.key);
	}

	protected updateField(fieldKey: string, value: string): void {
		this.formData.update(data => ({ ...data, [fieldKey]: value }));

		const parsedValue = Math.max(0, Number(value) || 0);
		if (fieldKey === 'adults') this.adults.set(parsedValue);
		if (fieldKey === 'children') this.children.set(parsedValue);
		if (fieldKey === 'youngChildren') this.youngChildren.set(parsedValue);
	}

	protected async submitForm(event: Event): Promise<void> {
		event.preventDefault();
		this.showValidation.set(true);

		const data = this.formData();
		if (!data['firstName']?.trim() || !data['phone']?.trim()) return;

		this.submitting.set(true);
		this.submitStatus.set('idle');

		const lines = [
			`Ім'я: ${data['firstName'] ?? ''} ${data['lastName'] ?? ''}`.trim(),
			`Телефон: ${data['phone'] ?? ''}`,
			data['email'] ? `Email: ${data['email']}` : '',
			data['date'] ? `Дата: ${data['date']}` : '',
			data['time'] ? `Час: ${data['time']}` : '',
			data['adults'] ? `Дорослих: ${data['adults']}` : '',
			data['children'] ? `Дітей 6–14: ${data['children']}` : '',
			data['youngChildren'] ? `Дітей до 6: ${data['youngChildren']}` : '',
			data['comment'] ? `Коментар: ${data['comment']}` : '',
		].filter(Boolean);

		const message = `📋 Заявка на екскурсію:\n${lines.join('\n')}`;

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
