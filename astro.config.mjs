import tailwind from '@astrojs/tailwind'
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            IPINFO_API_KEY: envField.string({ context: 'client', access: 'public' }),
            OPENWEATHER_API_KEY: envField.string({ context: 'client', access: 'public' }),
            RESEND_API_KEY: envField.string({ context: 'client', access: 'public' }),
            AUTH_TOKEN: envField.string({ context: 'client', access: 'public' }),
            SITE_KEY: envField.string({ context: 'client', access: 'public' }),
        },
        validateSecrets: true,
    },
    serverIslands: true,

    integrations: [tailwind({
        applyBaseStyles: false,
		}), react()],

    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'de'],
        routing: {
            prefixDefaultLocale: false,
        },
    },

    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),

    vite: {
        assetsInclude: ['/sw.js'],
        ssr: {
            noExternal: ['path-to-regexp'],
        },
    },
})