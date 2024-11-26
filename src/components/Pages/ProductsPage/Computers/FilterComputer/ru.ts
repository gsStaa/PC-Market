import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nFil = i18n.createInstance()
i18nFil.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        1: 'Фильтры',
        2: 'Видеокарта',
        3: 'Процессор',
        4: 'Оперативная память',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nFil
