import styles from './styles.module.css'
import { FC } from 'react'
// view: question | feedback
type TForms = {
  labelText: string
  text: string
  view: 'question' | 'feedback'
}
export const FormsItem: FC<TForms> = ({ labelText, text, view }) => {
  return (
    <div className={styles.container}>
      <label>{labelText}</label>
      <input className={styles[`${view}Input`]} placeholder={text}></input>
    </div>
  )
}
