import styles from './style/Sobre.module.css'


//Components

import SobreMiniBlog from './Components/SobreMiniBlog/SobreMiniBlog'

const Sobre = () => {

    return(
        <div className={styles.sobre_container}>
            <SobreMiniBlog/>
        </div>
    )
}


export default Sobre 