import { Form } from '../FormUser/FormUser'
import styles from './LoginPage.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../../App/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from '../../../../hooks/redux-hooks';

export function LoginPage(){

    const navigate = useNavigate();

    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated);

    const dispatch = useAppDispatch()
    
    const handleLogin = (email:string,password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate('AccountUser');
            }) 
            .catch(()=> alert('Не существует такого пользователя!'))
    }
    
    return(
        <div className={styles.FormLogin}>
            <Form
                title='Войти'
                handleClick={handleLogin}
            />
        </div>
    )
}