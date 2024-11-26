import { Button } from '../../Modules/Button/Button'
import styles from './styles.module.css'
import { FormsItem } from './FormsItem/FormsItem'
import { FC } from 'react'
import i18nForms from './ru'
import { Trans18 } from '../../Modules/Translation/Translation'

export const Forms: FC = () => {
  return (
    <Trans18 i18n={i18nForms}>
      <div className={styles.formContainer}>
        <h1 className={styles.formName}>
          {i18nForms.t('formName')}
          <span className={styles.formNameSpan}>
            {i18nForms.t('formNameSpan')}
          </span>
        </h1>
        <form className={styles.formQuestion}>
          <FormsItem
            labelText={i18nForms.t('nameLabel')}
            text={i18nForms.t('namePlaceholder')}
            view='question'
          />
          <FormsItem
            labelText={i18nForms.t('emailLabel')}
            text={i18nForms.t('emailPlaceholder')}
            view='question'
          />
          <FormsItem
            labelText={i18nForms.t('questionLabel')}
            text={i18nForms.t('questionPlaceholder')}
            view='feedback'
          />
          <Button text={i18nForms.t('submitButton')} />
        </form>
      </div>
    </Trans18>
  )
}
