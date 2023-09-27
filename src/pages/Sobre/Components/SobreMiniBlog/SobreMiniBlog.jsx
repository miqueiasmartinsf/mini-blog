import styles from './SobreMiniBlog.module.css'


//Hooks
import {useState, useContext} from 'react'


//ReactRouter

import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom'


//Context
import userContext from '../../../../context/userContext'


const SobreMiniBlog = () => {

    const {userStat} = useContext(userContext);





    return(
        <div className={styles.sobre_miniblog}>
            <h1>Sobre o Mini Blog</h1>
            <p>Este projeto consiste em um blog feito com react no front-end e Firebase no back-end</p>
            <div className={styles.btn_container}>
                <Link to={userStat === true ? ('/novo-post') : ('/entrar')} ><button>Criar post</button></Link>
            </div>
        </div>
    )
}

export default SobreMiniBlog