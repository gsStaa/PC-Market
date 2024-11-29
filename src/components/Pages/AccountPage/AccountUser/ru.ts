import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nUser = i18n.createInstance()
i18nUser.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        h: 'Добро пожаловать!',
        userName:
          'Теперь вы можете совершать покупки в нашем магазине, а так же выйти из аккаунта',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nUser
