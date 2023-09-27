import styles from './style/Entrar.module.css'

//Components

import Login from './Components/Login/Login'



//Sucess Notification

const Entrar = () => {


    return(
        <div className={styles.entrar_container}>
            <Login/>
        </div>
    )
}

export default Entrar