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
				title: 'Excursions',
				description: 'Excursions and guided visit options at Park Arden.',
			},
		},
		loadComponent: () =>
			import('./pages/ekskursii/ekskursii.component').then((m) => m.EkskursiiComponent),
	},
	{
		path: 'gostiam',
		data: {
			meta: {
				title: 'Guest information',
				description: 'Useful guest information for visiting Park Arden.',
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
				title: 'Gallery',
				description: 'Photo gallery from Park Arden.',
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
				title: 'Support',
				description: 'Support Park Arden with a donation.',
			},
		},
		loadComponent: () =>
			import('./pages/pidtrymaty/pidtrymaty.component').then((m) => m.PidtrymatyComponent),
	},
	{
		path: 'kontakty',
		data: {
			meta: {
				title: 'Contacts',
				description: 'Contact information for Park Arden.',
			},
		},
		loadComponent: () =>
			import('./pages/kontakty/kontakty.component').then((m) => m.KontaktyComponent),
	},
	{
		path: '404',
		data: {
			meta: {
				title: 'Not found',
				description: 'The requested page was not found.',
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
				title: 'Not found',
				description: 'The requested page was not found.',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
	},
];
