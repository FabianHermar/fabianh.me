import tailwind from '@astrojs/tailwind'
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	env: {
		schema: {
			IPINFO_API_KEY: envField.string({ context: 'server', access: 'secret' }),
			OPENWEATHER_API_KEY: envField.string({ context: 'server', access: 'secret' }),
			RESEND_API_KEY: envField.string({ context: 'client', access: 'public', includes: 're_' }),
			AUTH_TOKEN: envField.string({ context: 'client', access: 'public' }),
			SITE_KEY: envField.string({ context: 'server', access: 'public' }),
		},
		validateSecrets: true,
	},
	serverIslands: true,

	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		partytown(),
	],

	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'de'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
})