import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'

const locales = ['es', 'en']
export const defaultLocale = 'es'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(locales, requested) ? requested : defaultLocale

  let messages: Record<string, unknown>
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (err) {
    console.error(`Failed to load messages for locale "${locale}":`, err)
    messages = (await import(`../../messages/${defaultLocale}.json`)).default
  }

  return {
    locale,
    messages,
  }
})
