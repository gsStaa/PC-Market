import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nBread = i18n.createInstance()
i18nBread.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        name: 'Главная',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nBread
