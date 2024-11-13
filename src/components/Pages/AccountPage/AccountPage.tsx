
import { LoginPage } from "./LoginPage/LoginPage";
import styles from './AccountPage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux-hooks";


export function AccountPage(){
    
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated);

    const navigate = useNavigate();

    const [Login,setLogin] = useState(true)

    const clickRegister = () => {setLogin(Login => !Login)}

    useEffect(() => {
        if (isAuthenticated) {
            navigate('AccountUser');
        }
    }, [isAuthenticated, navigate]);

    return(
        <div className={styles.AccountCont}>
            <div className={styles.AccountForm}>
                {Login ? <LoginPage/> : <RegisterPage/>}
                <Link to='#' onClick={clickRegister}>
                {Login ? 'Зарегистрироваться' : 'Войти'}
                </Link>
            </div>
        </div>
    )
}