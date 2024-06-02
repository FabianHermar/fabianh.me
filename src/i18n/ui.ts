import GermanyFlag from '@/components/flags/Germany.astro';
import MexicoFlag from '@/components/flags/Mexico.astro';
import USFlag from '@/components/flags/US.astro';

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof MexicoFlag }
> = {
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
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contactame',
  },
  en: {
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact me',
  },
  de: {
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontaktiere mich',
  },
} as const;

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
};