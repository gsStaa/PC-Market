import { Button } from '../../Modules/Button/Button'
import styles from './styles.module.css'
import { FormsItem } from './FormsItem/FormsItem'
import { FC } from 'react'
import './ru'

import i18nForm from 'src/components/Content/feedbackForm/ru'

export const FeedbackForm: FC = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formName}>
        {i18nForm.t('formName')}
        <span className={styles.formNameSpan}>
          {i18nForm.t('formNameSpan')}
        </span>
      </h1>
      <form className={styles.formQuestion}>
        <FormsItem
          labelText={i18nForm.t('nameLabel')}
          text={i18nForm.t('namePlaceholder')}
          view='question'
        />
        <FormsItem
          labelText={i18nForm.t('emailLabel')}
          text={i18nForm.t('emailPlaceholder')}
          view='question'
        />
        <FormsItem
          labelText={i18nForm.t('questionLabel')}
          text={i18nForm.t('questionPlaceholder')}
          view='feedback'
        />
        <Button text={i18nForm.t('submitButton')} />
      </form>
    </div>
  )
}
