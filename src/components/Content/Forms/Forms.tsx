import { Button } from '../../Modules/Button/Button'
import styles from './Forms.module.css'
import { FormsItem } from './FormsItem/FormsItem'
import { FC } from 'react'

type TForms = {
    FormsText: string;
    FormsInputText:string;
    inputStyle:string;
    containerClassName: string;
}

export const Forms: FC <TForms> = () => {
    const dataForm = [
        {
            FormsText:'Ваше имя',
            FormsInputText:'Введите имя',
            inputStyle: 'question',
            containerClassName: 'defaultClassName'
        },
        {
            FormsText:'Ваш email',
            FormsInputText:'Введите email',
            inputStyle: 'question',
            containerClassName: 'defaultClassName'
        },
        {
            FormsText:'Напишите ваш вопрос',
            FormsInputText:'Ваше сообщение ',
            inputStyle: 'feedback',
            containerClassName: 'defaultClassName'
        },
    ]
    return(
        <div className={styles.formContainer}>
            <h1 className={styles.formName}>Остались вопросы? <span className={styles.formNameSpan}>Напишите нам и мы ответим!</span></h1>
            <form className={styles.formQuestion}>
                {dataForm.map((item) => (
                    <FormsItem key={item.FormsText} containerClassName={item.containerClassName} FormsText={item.FormsText} FormsInputText={item.FormsInputText} inputStyle={item.inputStyle}/>
                        )   
                    )
                }
                <Button>Отправить</Button>
            </form>
        </div>
    )
}