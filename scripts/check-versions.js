#!/usr/bin/env node

/**
 * Version checker script for portfolio project
 * Ensures all dependencies are using the correct versions as specified in .cursorrules
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(__dirname, '..', 'package.json');

const REQUIRED_VERSIONS = {
	svelte: '^5.0.0',
	tailwindcss: '^4.1.3',
	typescript: '^5.0.0',
	vite: '^6.2.5',
	'@sveltejs/kit': '^2.16.0',
	daisyui: '^5.0.17',
	'flowbite-svelte': '^0.48.6',
	flowbite: '^3.1.2'
};

function checkVersions() {
	console.log('Checking package versions against .cursorrules requirements...\n');

	try {
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
		const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

		let hasErrors = false;
		const results = [];

		for (const [packageName, requiredVersion] of Object.entries(REQUIRED_VERSIONS)) {
			const installedVersion = allDeps[packageName];

			if (!installedVersion) {
				results.push({
					package: packageName,
					status: 'missing',
					required: requiredVersion,
					installed: 'not installed'
				});
				hasErrors = true;
				continue;
			}

			// Simple version comparison (could be made more sophisticated)
			const requiredMajor = requiredVersion.replace(/[\^~]/, '').split('.')[0];
			const installedMajor = installedVersion.replace(/[\^~]/, '').split('.')[0];

			if (installedMajor !== requiredMajor) {
				results.push({
					package: packageName,
					status: 'mismatch',
					required: requiredVersion,
					installed: installedVersion
				});
				hasErrors = true;
			} else {
				results.push({
					package: packageName,
					status: 'ok',
					required: requiredVersion,
					installed: installedVersion
				});
			}
		}

		// Display results
		console.table(
			results.map((r) => ({
				Package: r.package,
				Status: r.status === 'ok' ? 'OK' : r.status === 'missing' ? 'Missing' : 'Mismatch',
				Required: r.required,
				Installed: r.installed
			}))
		);

		if (hasErrors) {
			console.log(
				'\nVersion check failed! Please update package.json to match .cursorrules requirements.'
			);
			console.log('Run: yarn upgrade <package>@<version>');
			process.exit(1);
		} else {
			console.log('\nAll versions match .cursorrules requirements!');
		}
	} catch (error) {
		console.error('Error reading package.json:', error.message);
		process.exit(1);
	}
}

checkVersions();
