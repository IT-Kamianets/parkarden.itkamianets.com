import {
	AngularNodeAppEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from '@angular/ssr/node';
export { AngularAppEngine } from '@angular/ssr';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
let angularApp: AngularNodeAppEngine | undefined;

const getAngularApp = () => {
	angularApp ??= new AngularNodeAppEngine();
	return angularApp;
};

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
	express.static(browserDistFolder, {
		maxAge: '1y',
		index: false,
		redirect: false,
	}),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
	getAngularApp()
		.handle(req)
		.then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
		.catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
	const port = process.env['PORT'] || 4000;
	app.listen(port, (error) => {
		if (error) {
			throw error;
		}

		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 *
 * In `ng serve`, Angular's Vite SSR middleware has its own app-engine manifest lifecycle.
 * Returning no custom handler lets the internal middleware render the app in development.
 */
export const reqHandler =
	process.env['NODE_ENV'] === 'development' ? undefined : createNodeRequestHandler(app);
