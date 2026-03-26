import { Feedback } from '@prisma/client'
import { format, Locale } from 'date-fns'
import { de, enUS, fr } from 'date-fns/locale'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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

const getFeedbackType = (type: Feedback['type']) => {
  if (type === 'success') {
    return 'Went well'
  }
  if (type === 'improvement') {
    return 'To improve'
  }
  if (type === 'action') {
    return 'Start doing'
  }
}

const useFullUrl = () => {
  const [fullUrl, setFullUrl] = useState('')
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
      setFullUrl(url)
    }
  }, [pathname, searchParams])

  return fullUrl
}

export { formatDate, getFeedbackType, useFullUrl }
