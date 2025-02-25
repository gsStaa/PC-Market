import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nProdPC = i18n.createInstance()
i18nProdPC.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        name: 'Игровые компьютеры',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nProdPC
