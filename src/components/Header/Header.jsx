import styles from './Header.module.css'

//Hooks 

import { useContext, useEffect, useState } from 'react'

//ReactRouter 

import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


//Context

import userContext from '../../context/userContext'



//Firebase

import { useSignOut } from 'react-firebase-hooks/auth';

import {auth} from '../../../firebase/config'


import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {


    const [mobileMenuState,setMobileMenuState] = useState(`${styles.mobile_nav} ${styles.hidden}`);



    
    const updateMenu = () => {
        if(mobileMenuState === `${styles.mobile_nav} ${styles.hidden}`){
            setMobileMenuState(`${styles.mobile_nav} ${styles.visible}`)
        }else{
            setMobileMenuState(`${styles.mobile_nav} ${styles.hidden}`);
        }
    }





    const navigate = useNavigate();


    const logOutNotify = () => toast.error('Deslogado');


    //SignOut Firebase
    const [signOut, loading, error] = useSignOut(auth);

    const {userStat,setUserStat} = useContext(userContext)


    const logOut = async() => {
        const success = await signOut();
            if (success) {
              setUserStat(false); 
              console.log(userStat);
              logOutNotify();
              navigate('/');  
            } else if(error){
                return
            }
    }


    return(
        <div className={styles.header_container}>
            <div className={styles.logo_container}>
                <Link to={'/'}><h1>Mini <span>BLOG</span></h1></Link>
            </div>
            {userStat === true ? (
                <nav>
                    <div className={styles.mobile_menu} onClick={updateMenu}>
                        <div className={styles.line_1}></div>
                        <div className={styles.line_2}></div>
                        <div className={styles.line_3}></div>
                    </div>
                    <div className={styles.nav_list}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'novo-post'}>Novo post</Link>
                        <Link to={'dashboard'}>Dashboard</Link>
                        <Link to={'about'}>Sobre</Link>
                        <Link onClick={logOut} className={styles.logout}>Sair</Link>
                    </div>
                    <div className={mobileMenuState}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'novo-post'}>Novo post</Link>
                        <Link to={'dashboard'}>Dashboard</Link>
                        <Link to={'about'}>Sobre</Link>
                        <Link onClick={logOut} className={styles.logout}>Sair</Link>
                    </div>
                </nav>
            ) : (
                <nav>
                    <div className={styles.mobile_menu} onClick={updateMenu}>
                        <div className={styles.line_1}></div>
                        <div className={styles.line_2}></div>
                        <div className={styles.line_3}></div>
                    </div>
                    <div className={styles.nav_list}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'entrar'}>Entrar</Link>
                        <Link to={'cadastrar'}>Cadastrar</Link>
                        <Link to={'about'}>Sobre</Link>
                    </div>

                    <div className={mobileMenuState}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'entrar'}>Entrar</Link>
                        <Link to={'cadastrar'}>Cadastrar</Link>
                        <Link to={'about'}>Sobre</Link>
                    </div>


                </nav>
            )}
        </div>
    )
}

export default Header 