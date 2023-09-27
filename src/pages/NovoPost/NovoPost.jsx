import styles from './style/NovoPost.module.css'



//Components

import CreatePost from './Components/CreatePost/CreatePost'


const NovoPost = () => {

    return(
        <div className={styles.novo_post_container}>
            <CreatePost/>
        </div>


    )

}


export default NovoPost 