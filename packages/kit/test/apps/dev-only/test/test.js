import { expect } from '@playwright/test';
import { test } from '../../../utils.js';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/** @typedef {import('@playwright/test').Response} Response */

test.describe.serial('Illegal imports', () => {
	test.skip(({ javaScriptEnabled }) => !process.env.DEV || !javaScriptEnabled);

	test('$env/dynamic/private is not statically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/env/dynamic-private', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import \0$env/dynamic/private into client-side code'
		);
	});

	test('$env/dynamic/private is not dynamically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/env/dynamic-private-dynamic-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import \0$env/dynamic/private into client-side code'
		);
	});

	test('$env/static/private is not statically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/env/static-private', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import \0$env/static/private into client-side code'
		);
	});

	test('$env/static/private is not dynamically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/env/static-private-dynamic-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import \0$env/static/private into client-side code'
		);
	});

	test('server-only module is not statically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/server-only-modules/static-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import src/routes/illegal-imports/server-only-modules/illegal.server.js into client-side code'
		);
	});

	test('server-only module is not dynamically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/server-only-modules/dynamic-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import src/routes/illegal-imports/server-only-modules/illegal.server.js into client-side code'
		);
	});

	test('server-only folder is not statically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/server-only-folder/static-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import $lib/server/blah/test.js into client-side code'
		);
	});

	test('server-only folder is not dynamically importable from the client', async ({ page }) => {
		await page.goto('/illegal-imports/server-only-folder/dynamic-import', {
			wait_for_started: false
		});
		expect(await page.textContent('.message-body')).toBe(
			'Cannot import $lib/server/blah/test.js into client-side code'
		);
	});
});

test.describe('Filesystem updates', () => {
	test.skip(!process.env.DEV);

	test('New route is immediately available in dev', async ({ page }) => {
		await page.goto('/new-route');

		// hash the filename so that it won't conflict with
		// future test file that has the same name
		const route = 'zzzz' + Date.now();
		const content = 'Hello new route';
		const dir = new URL(`../src/routes/new-route/${route}/`, import.meta.url).pathname;
		const filepath = path.join(dir, '+page.svelte');

		try {
			fs.mkdirSync(dir);
			fs.writeFileSync(filepath, `<h1>${content}</h1>`);
			// this is the rare time we actually need waitForTimeout;
			// we have no visibility into whether the module graph has been invalidated
			await page.waitForTimeout(500);
			await page.goto(`/new-route/${route}`);

			expect(await page.textContent('h1')).toBe(content);
		} finally {
			fs.rmSync(dir, { recursive: true, force: true });
		}
	});

	test('Components are not double-mounted', async ({ page, javaScriptEnabled }) => {
		const file = fileURLToPath(new URL('../src/routes/double-mount/+page.svelte', import.meta.url));
		const contents = fs.readFileSync(file, 'utf-8');

		const mounted = javaScriptEnabled ? 1 : 0;

		try {
			// we write to the file, to trigger HMR invalidation
			fs.writeFileSync(file, contents.replace(/PLACEHOLDER:\d+/, `PLACEHOLDER:${Date.now()}`));
			await page.goto('/double-mount');
			await expect(page.locator('h1')).toHaveText(`mounted: ${mounted}`);
			await page.click('button');
			await page.waitForTimeout(100);
			await expect(page.locator('h1')).toHaveText(`mounted: ${mounted}`);
		} finally {
			fs.writeFileSync(file, contents.replace(/PLACEHOLDER:\d+/, 'PLACEHOLDER:0'));
		}
	});
});
