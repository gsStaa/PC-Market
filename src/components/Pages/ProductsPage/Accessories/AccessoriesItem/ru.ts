import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const i18nAccessoriesItem = i18n.createInstance()
i18nAccessoriesItem.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        price: 'Цена',
        rub: '₽',
        cart: 'В корзину',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nAccessoriesItem
