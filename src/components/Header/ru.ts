import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nHead = i18n.createInstance()
i18nHead.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        main: 'ГЛАВНАЯ',
        product: 'КАТАЛОГ ТОВАРОВ',
        user: 'ЛИЧНЫЙ КАБИНЕТ',
        search: 'Поиск по сайту ',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nHead
