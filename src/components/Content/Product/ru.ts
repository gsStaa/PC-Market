import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nProduct = i18n.createInstance()
i18nProduct.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        productName: 'Компьютеры и аксессуары.',
        spanGame: 'Идеально подойдут к вашему гейменгу!',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nProduct
