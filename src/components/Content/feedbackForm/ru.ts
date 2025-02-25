import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nForm = i18n.createInstance()
i18nForm.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        formName: 'Остались вопросы?',
        formNameSpan: 'Напишите нам и мы ответим!',
        nameLabel: 'Ваше имя',
        namePlaceholder: 'Введите имя',
        emailLabel: 'Ваш email',
        emailPlaceholder: 'Введите email',
        questionLabel: 'Напишите ваш вопрос',
        questionPlaceholder: 'Ваше сообщение',
        submitButton: 'Отправить',
      },
    },
  },
  lng: 'ru',
  interpolation: { escapeValue: false },
})

export default i18nForm
