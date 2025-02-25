import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nDetails = i18n.createInstance()
i18nDetails.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        price: 'Цена',
        currency: '₽',
        cart: 'В корзину',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nDetails
