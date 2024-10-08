import GermanyFlag from '@/components/flags/Germany.astro';
import MexicoFlag from '@/components/flags/Mexico.astro';
import USFlag from '@/components/flags/US.astro';

// Add missing imports
export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof MexicoFlag }> = {
	de: {
		code: 'de',
		name: 'Deutsch',
		flag: GermanyFlag,
	},
	en: {
		code: 'en',
		name: 'English',
		flag: USFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: MexicoFlag,
	},
}

export const defaultLang = 'es'
export const showDefaultLang = false

export const ui = {
	es: {
		'nav.about': 'Sobre mi',
		'nav.projects': 'Proyectos',
		'nav.experience': 'Experiencia',
		'nav.contact': 'Contáctame',
		'btn.downloadCV': 'Descargar CV',
		'btn.digitalCV': 'CV Digital',
		'footer.title': '¿Listo para crear algo genial juntos?',
		'footer.subtitle': 'Pongámonos en contacto.',
		'footer.about': 'Sobre mi',
		'footer.projects': 'Proyectos',
		'footer.style': 'Guía de estilo',
		'footer.blog': 'Blog',
		'footer.small': 'Desarrollado con mucho ❤ utilizando Astro y React. Desplegado en Vercel y administrado por CloudFlare.'
	},
	en: {
		'nav.about': 'About me',
		'nav.projects': 'Projects',
		'nav.experience': 'Experience',
		'nav.contact': 'Contact me',
		'btn.downloadCV': 'Download CV',
		'btn.digitalCV': 'Digital CV',
		'footer.title': 'Ready to create something awesome together?',
		'footer.subtitle': 'Let\'s get in touch.',
		'footer.about': 'About me',
		'footer.projects': 'Projects',
		'footer.style': 'Style guide',
		'footer.blog': 'Blog',
		'footer.small': 'Developed with a lot of ❤ using Astro and React. Deployed on Vercel and managed by CloudFlare.'
	},
	de: {
		'nav.about': 'Über mich',
		'nav.projects': 'Projekte',
		'nav.experience': 'Erfahrung',
		'nav.contact': 'Kontaktiere mich',
		'btn.downloadCV': 'CV herunterladen',
		'btn.digitalCV': 'Digitaler Lebenslauf',
		'footer.title': 'Bereit, zusammen etwas Tolles zu schaffen?',
		'footer.subtitle': 'Lass uns in Kontakt kommen.',
		'footer.about': 'Über mich',
		'footer.projects': 'Projekte',
		'footer.style': 'Stilhandbuch',
		'footer.blog': 'Blog',
		'footer.small': 'Entwickelt mit viel ❤ unter Verwendung von Astro und React. Bereitgestellt auf Vercel und verwaltet von CloudFlare.'
	},
} as const

export const routes = {
	es: {
		about: 'sobre-mi',
		projects: 'proyectos',
	},
	en: {
		about: 'about-me',
		projects: 'projects',
	},
	de: {
		about: 'ueber-mich',
		projects: 'projekte',
	},
}
