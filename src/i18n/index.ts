import deutsch from '@/i18n/lang/DE.json'
import english from '@/i18n/lang/EN.json'
import spanish from '@/i18n/lang/ES.json'

const LANG = {
	DEUTSCH: 'de',
	ENGLISH: 'en',
	SPANISH: 'es',
}

export const getI18N = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
	if (currentLocale === LANG.DEUTSCH) return { ...spanish, ...deutsch }
	if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english }
	return spanish
}
