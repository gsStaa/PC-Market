import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nAcces = i18n.createInstance()
i18nAcces.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        name: 'Игровые акссесуары',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nAcces
