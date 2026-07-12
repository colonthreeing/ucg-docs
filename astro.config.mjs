// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UCG Modding',
			social: [{ icon: 'codeberg', label: 'GitHub', href: 'https://github.com/colonthreeing/ucg-docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
		}),
	],
});
