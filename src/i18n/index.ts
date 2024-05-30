import deutsch from '@/i18n/lang/DE.json';
import english from '@/i18n/lang/EN.json';
import spanish from '@/i18n/lang/ES.json';

const LANG = {
  CATALAN: 'ca',
  ENGLISH: 'en',
  SPANISH: 'es',
};

export const getI18N = ( {
  currentLocale = 'es',
}: {
  currentLocale: string | undefined;
} ) => {
  if ( currentLocale === LANG.CATALAN ) return { ...spanish, ...english };
  if ( currentLocale === LANG.ENGLISH ) return { ...spanish, ...deutsch };
  return spanish;
};