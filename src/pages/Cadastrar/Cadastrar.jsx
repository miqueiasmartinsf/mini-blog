import styles from './style/Cadastrar.module.css'



//Components

import CreateUser from './components/CreateUser/CreateUser'

//Toast Notifications 

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Cadastrar = () => {


    return(
        <div className={styles.cadastrar_container}>
            <CreateUser/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}


export default Cadastrar 