import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'pro-park',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'tvaryny',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'tvaryny/:slug',
		renderMode: RenderMode.Server,
	},
	{
		path: 'ekskursii',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'gostiam',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'novyny',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'novyny/:slug',
		renderMode: RenderMode.Server,
	},
	{
		path: 'galereya',
		renderMode: RenderMode.Prerender,
	},
	{
		path: '4-sezony',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'pidtrymaty',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'kontakty',
		renderMode: RenderMode.Prerender,
	},
	{
		path: '404',
		renderMode: RenderMode.Prerender,
	},
	{
		path: '**',
		renderMode: RenderMode.Server,
		status: 404,
	},
];
