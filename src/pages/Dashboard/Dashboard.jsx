import styles from './style/Dashboard.module.css'


//Components
import Manager from './components/Manager/Manager'



const Dashboard = () => {

    return(
        <div className={styles.dashboard_container}>
             <Manager/>


        </div>
    )
}


export default Dashboard 