/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly IPINFO_API_KEY: string
	readonly OPENWEATHER_API_KEY: string
	readonly RESEND_API_KEY: string
	readonly AUTH_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
