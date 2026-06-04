import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/'),
				title: 'Парк диких тварин «АРДЕН» − екскурсії, хижаки та природа Подільських Товтр',
				description:
					'Парк диких тварин «АРДЕН» у Сатанові − понад 160 тварин, 32 гектари природи, ведмежа колекція, лісовий міст-галерея, групові екскурсії та історії порятунку тварин.',
				// TODO: Replace with wide hero image of Park Arden: animal, forest, bridge-gallery, or atmospheric park landscape. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'pro-park',
		data: {
			meta: {
				title: 'Про парк «АРДЕН» − парк диких тварин у серці Подільських Товтр',
				description:
					'Дізнайтесь більше про Парк диких тварин «АРДЕН»: понад 32 гектари лісу, 160+ тварин, ведмежа колекція, лісовий міст-галерея та місія порятунку диких тварин.',
				// TODO: Replace with wide photo of Park Arden forest, bridge-gallery, animal in natural surroundings, or atmospheric park landscape. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/pro-park/pro-park.component').then((m) => m.ProParkComponent),
	},
	{
		path: 'tvaryny',
		data: {
			meta: {
				title: 'Тварини парку «АРДЕН» − ведмеді, леви, тигри, вовки, примати та птахи',
				description:
					'Познайомтесь із мешканцями Парку диких тварин «АРДЕН»: ведмеді, великі коти, вовки, примати, олені, муфлони, лані та хижі птахи.',
				// TODO: Replace with wide image collage or strong animal portrait from Park Arden. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/tvaryny/tvaryny.component').then((m) => m.TvarynyComponent),
	},
	{
		path: 'tvaryny/:slug',
		data: {
			meta: {
				title: 'Тварина парку «АРДЕН»',
				description: 'Картка мешканця Парку диких тварин «АРДЕН».',
				// TODO: Replace with real close-up photo of this animal. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/tvaryny-detail/tvaryny-detail.component').then(
				(m) => m.TvarynyDetailComponent,
			),
	},
	{
		path: 'ekskursii',
		data: {
			meta: {
				title: 'Екскурсії в парк «АРДЕН» − ціни, графік та запис на відвідування',
				description:
					'Запишіться на екскурсію до Парку диких тварин «АРДЕН». Тривалість 60 хвилин, групи 15–25 осіб, дорослий квиток 400 грн, дитячий 300 грн, діти до 6 років безкоштовно.',
				// TODO: Replace with wide photo of visitors on excursion, guide with group, bridge-gallery, or animals visible from the route. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/ekskursii/ekskursii.component').then((m) => m.EkskursiiComponent),
	},
	{
		path: 'gostiam',
		data: {
			meta: {
				title: 'Інформація для гостей парку «АРДЕН» − графік, ціни, правила та маршрут',
				description:
					'Плануйте візит до Парку диких тварин «АРДЕН»: графік роботи, ціни на квитки, правила відвідування, парковка, піцерія, сувенірна лавка, адреса та контакти.',
				// TODO: Replace with wide photo of Park Arden entrance, visitors, bridge-gallery, parking area, or family visit atmosphere. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/gostiam/gostiam.component').then((m) => m.GostiamComponent),
	},
	{
		path: 'novyny',
		data: {
			meta: {
				title: 'News',
				description: 'Latest news and updates from Park Arden.',
			},
		},
		loadComponent: () =>
			import('./pages/novyny/novyny.component').then((m) => m.NovynyComponent),
	},
	{
		path: 'novyny/:slug',
		data: {
			meta: {
				title: 'News article',
				description: 'News article from Park Arden.',
			},
		},
		loadComponent: () =>
			import('./pages/novyny-article/novyny-article.component').then(
				(m) => m.NovynyArticleComponent,
			),
	},
	{
		path: 'galereya',
		data: {
			meta: {
				title: 'Галерея парку «АРДЕН» − фото тварин, природи та мосту-галереї',
				description:
					'Перегляньте галерею Парку диких тварин «АРДЕН»: тварини, ведмеді, великі коти, лісовий міст-галерея, природа Подільських Товтр, екскурсії та 4 сезони парку.',
				// TODO: Replace with wide photo collage of Park Arden animals, forest, bridge-gallery, and seasonal atmosphere. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/galereya/galereya.component').then((m) => m.GalereyaComponent),
	},
	{
		path: '4-sezony',
		data: {
			meta: {
				title: '4 Seasons',
				description: 'Park Arden through all four seasons.',
			},
		},
		loadComponent: () =>
			import('./pages/four-seasons/four-seasons.component').then(
				(m) => m.FourSeasonsComponent,
			),
	},
	{
		path: 'pidtrymaty',
		data: {
			meta: {
				title: 'Підтримати парк «АРДЕН» − допомога тваринам, донати та благодійність',
				description:
					'Підтримайте Парк диких тварин «АРДЕН»: благодійний внесок, допомога кормом, купівля сувенірів або підтримка конкретної тварини. Кожен внесок допомагає доглядати врятованих тварин.',
				// TODO: Replace with emotional wide photo of rescued animal, animal care moment, bear, big cat, or park team caring for animals. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/pidtrymaty/pidtrymaty.component').then((m) => m.PidtrymatyComponent),
	},
	{
		path: 'kontakty',
		data: {
			meta: {
				title: 'Контакти парку «АРДЕН» − адреса, телефон, карта та запис на екскурсію',
				description:
					'Контакти Парку диких тварин «АРДЕН»: адреса у смт Сатанів, телефон для запису на екскурсію, email, карта проїзду, графік роботи та форма зворотного зв’язку.',
				// TODO: Replace with wide photo of Park Arden entrance, visitors arriving, sign, bridge-gallery, or atmospheric park landscape. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
			},
		},
		loadComponent: () =>
			import('./pages/kontakty/kontakty.component').then((m) => m.KontaktyComponent),
	},
	{
		path: '404',
		data: {
			meta: {
				title: 'Сторінку не знайдено − парк «АРДЕН»',
				description:
					'Сторінку не знайдено. Поверніться на головну сторінку Парку диких тварин «АРДЕН» або перейдіть до тварин, екскурсій чи контактів.',
				// TODO: Replace with friendly animal photo from Park Arden, preferably curious animal portrait or forest atmosphere. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
	},
	{
		path: '**',
		data: {
			meta: {
				title: 'Сторінку не знайдено − парк «АРДЕН»',
				description:
					'Сторінку не знайдено. Поверніться на головну сторінку Парку диких тварин «АРДЕН» або перейдіть до тварин, екскурсій чи контактів.',
				// TODO: Replace with friendly animal photo from Park Arden, preferably curious animal portrait or forest atmosphere. Best ratio: 1200x630 for Open Graph.
				image: 'logo.png',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
	},
];
