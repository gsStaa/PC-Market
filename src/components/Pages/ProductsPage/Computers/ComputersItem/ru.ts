import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const i18nComp = i18n.createInstance()
i18nComp.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        price: 'Цена',
        rub: '₽',
        cart: 'В корзину',
        info: 'Подробнее',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nComp
