import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nProd = i18n.createInstance()
i18nProd.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        ProductsName: 'Каталог товаров',
        ProductsNameP:
          'Все необходимые компоненты для игровых компьютеров, ноутбуков и обустройства вашей игровой или профессиональной зоны',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nProd
