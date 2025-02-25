import { useState } from 'react'

export const useValidateForm = () => {
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')

  const validateEmail = (email: string) => {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const isValid = emailCheck.test(email)
    if (!isValid) {
      setEmailError('Пожалуйста, введите корректный email')
    }
    return isValid
  }
  const validatePass = (pass: string) => {
    const isValid = pass.length >= 6
    if (!isValid) {
      setPassError('Пароль должен содержать не менее 6 символов')
    }
    return isValid
  }
  return {
    emailError,
    passError,
    validateEmail,
    validatePass,
  }
}
