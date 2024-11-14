import styles from './RegisterPage.module.css'
import { Form } from '../FormUser/FormUser'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../../App/features/user/userSlice';
import { useAppDispatch } from '../../../../hooks/redux-hooks';




export function RegisterPage(){
    

    const dispatch = useAppDispatch()

    const handleRegister = (email:string,password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                
            })
            .catch(console.error)
    }
    return(
        <div className={styles.FormRegister}>
            <Form
                title='Зарегестрироваться'
                handleClick={handleRegister}
            />
        </div>
    )
}