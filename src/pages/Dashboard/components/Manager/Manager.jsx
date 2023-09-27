import styles from './Manager.module.css'



//Components
import PostsManager from '../PostsManager/PostsManager'




const Manager = () => {

    return(
        <div className={styles.manager_container}>
            <h1>Dashboard</h1>
            <p>Gerencie seus posts</p>
            <PostsManager/>
        </div>
    )
}     

export default Manager