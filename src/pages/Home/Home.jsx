import styles from './style/Home.module.css'

//Components

import Feed from './Components/Feed/Feed'
import Footer from './Components/Footer/Footer'

//Notify


const Home = () => {
    return(
        <div className={styles.home_container}>
            <Feed/>           
        </div>
    )
}


export default Home 