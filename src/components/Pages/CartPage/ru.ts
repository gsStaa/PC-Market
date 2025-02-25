import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nCart = i18n.createInstance()
i18nCart.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        name: 'КОРЗИНА',
        basket: 'Ваша корзина пуста, начните совершать покупки!',
        product: 'Товар',
        presence: 'Наличие',
        quantity: 'Количество',
        price: 'Цена',
        total: 'Итого',
        buy: 'Купить',
        absence: 'нет на складе',
        rub: '₽',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nCart
