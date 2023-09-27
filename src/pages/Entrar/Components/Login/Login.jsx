import styles from './Login.module.css'

//Firebase 
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../../../../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState,useContext, useEffect } from 'react';

//Context
import userContext from '../../../../context/userContext';

//Sucess Notification
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


//Router
import {useNavigate} from 'react-router-dom'

const Login = () => {

    //User Info
    const {userStat,setUserStat} = useContext(userContext);
    const{userInfo,setUserInfo} = useContext(userContext);


    //Router navigate
    const navigate = useNavigate();

    //Notification
    const sucessNotify = () => toast.success('Logado com sucesso');
    const errorNotify = () => toast.error('Erro ao logar');
    const alreadyLoggedNotify = () => toast('Usuário já logado');


    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const signIn = async() => {
        if(userInfo === true){
            alreadyLoggedNotify();
        }else{
            const userCredential = await signInWithEmailAndPassword(userEmail,userPassword); 
        }
        setUserEmail('');
        setUserPassword('');
    }

    useEffect(() => {
        if(user){
            setUserStat(true);
            sucessNotify();
            navigate('/');
            console.log(userInfo);
        }else if(error){
            errorNotify();
        }
    },[user]);

    return(
        <div className={styles.login_container}>
            <h1>Entrar</h1>
            <p>Faça o login para poder usar o sistema</p>
            <div className={styles.input_container}>
                <section>
                    <label htmlFor="img-url">E-mail:</label>
                    <input type="text" name="" id="img-url" placeholder='E-mail do usuário' value={userEmail} 
                    onChange={(e) => setUserEmail(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="content">Senha:</label>
                    <input type="password" name="" id="content" placeholder='Insira o conteúdo do post' value={userPassword} 
                    onChange={(e) => setUserPassword(e.target.value)} />
                </section>
            </div>
            <div className={styles.btn_container}>
                <button onClick={signIn}>Entrar</button>
            </div>
        </div>
    )
}

export default Login