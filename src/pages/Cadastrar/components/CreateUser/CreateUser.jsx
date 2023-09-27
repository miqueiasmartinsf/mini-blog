import styles from './CreateUser.module.css'


//Hooks
import { useState,useEffect } from 'react';




//Firebase
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from 'firebase/auth';

import {auth} from '../../../../../firebase/config'


//Notifications

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CreateUser = () => {

    const[userName,setUserName] = useState('');

    const[userPassword,setUserPassword] = useState('');

    const[userConfirmPassword,setUserConfirmPassword] = useState('')

    const[userEmail,setUserEmail] = useState('');


    const[
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);


    function handleUserName(event){
        setUserName(event.target.value);

    }

    function handleUserPassword(event){
        setUserPassword(event.target.value)
    }

    function handleUserConfirmPassword(event){
        setUserConfirmPassword(event.target.value);


    }

    function handleUserEmail(event){
        setUserEmail(event.target.value);
    }

    //Validations 

    function emailValidation(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //Notifications
    const sucessSignIn = () => toast.success('Cadastrado com sucesso');

    const errorSignIn = () => toast.error('Erro ao cadastrar');

    const newUser = async() => {

        if(userPassword === userConfirmPassword){
            try{
                const {user} = await createUserWithEmailAndPassword(userEmail,userPassword);
                await updateProfile(user,{displayName: userName})
            } catch(error){
                console.log(error);
            }
        }else{
            errorSignIn();
        }
       
       //Clear inputs 
       setUserPassword('');
       setUserConfirmPassword('')
       setUserEmail('')
       setUserName('')
    }


    useEffect(() => {
        if(user){
            sucessSignIn();
        }else if(error){
            errorSignIn();
        }
    },[user])

    return(
        <div className={styles.create_user_container}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <div className={styles.input_container}>
               <section>
                    <label htmlFor="post-title">Nome:</label>
                    <input type="text" name="" id="post-title" placeholder='Nome do usuário' value={userName} 
                    onChange={(e) => {setUserName(e.target.value)}} />
               </section>

                <section>
                    <label htmlFor="img-url">E-mail:</label>
                    <input type="text" name="" id="img-url" placeholder='E-mail do usuário' value={userEmail} 
                    onChange={(e) => {setUserEmail(e.target.value)}}  />
                </section>

                <section>
                    <label htmlFor="content">Senha:</label>
                    <input type="password" name="" id="content" placeholder='Insira o conteúdo do post' value={userPassword} 
                    onChange={(e) => {setUserPassword(e.target.value)}} />
                </section>

                <section>
                    <label htmlFor="tags">Confirmação da senha:</label>
                    <input type="password" name="" id="tags" placeholder='Confirme a senha' value={userConfirmPassword} 
                    onChange={(e) => {setUserConfirmPassword(e.target.value)}} />
                </section>
            </div>
            <div className={styles.btn_container}>
                <button onClick={newUser}>Cadastrar</button>
            </div>
        </div>
    )
}

export default CreateUser