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
		'nav.skills': 'Habilidades',
		'nav.contact': 'Contáctame',
		'btn.downloadCV': 'Descargar CV',
		'btn.digitalCV': 'CV Digital',
		'footer.title': '¿Listo para crear algo genial juntos?',
		'footer.subtitle': 'Pongámonos en contacto.',
		'footer.about': 'Sobre mi',
		'footer.projects': 'Proyectos',
		'footer.style': 'Guía de estilo',
		'footer.blog': 'Blog',
		'footer.small': 'Desarrollado moviendo las manitas y mucho ❤.'
	},
	en: {
		'nav.about': 'About me',
		'nav.projects': 'Projects',
		'nav.skills': 'Skills',
		'nav.contact': 'Contact me',
		'btn.downloadCV': 'Download CV',
		'btn.digitalCV': 'Digital CV',
		'footer.title': 'Ready to create something awesome together?',
		'footer.subtitle': 'Let\'s get in touch.',
		'footer.about': 'About me',
		'footer.projects': 'Projects',
		'footer.style': 'Style guide',
		'footer.blog': 'Blog',
		'footer.small': 'Developed moving the hands and a lot of ❤.'
	},
	de: {
		'nav.about': 'Über mich',
		'nav.projects': 'Projekte',
		'nav.skills': 'Fähigkeiten',
		'nav.contact': 'Kontaktiere mich',
		'btn.downloadCV': 'CV herunterladen',
		'btn.digitalCV': 'Digitaler Lebenslauf',
		'footer.title': 'Bereit, zusammen etwas Tolles zu schaffen?',
		'footer.subtitle': 'Lass uns in Kontakt kommen.',
		'footer.about': 'Über mich',
		'footer.projects': 'Projekte',
		'footer.style': 'Stilhandbuch',
		'footer.blog': 'Blog',
		'footer.small': 'Entwickelt, indem die Hände bewegt und viel ❤.'
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
