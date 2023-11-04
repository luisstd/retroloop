import { format, Locale } from 'date-fns'
import { de, enUS, fr } from 'date-fns/locale'

//format date according to user locale
type LocalesMap = {
  [key: string]: Locale
}

const formatDate = (date: Date): string => {
  const locales: LocalesMap = { 'en-US': enUS, 'de-DE': de, 'fr-FR': fr }
  const userLocale = navigator.language || 'en-US'
  const locale: Locale = locales[userLocale] || enUS
  return format(date, 'PP', { locale })
}

export { formatDate }
