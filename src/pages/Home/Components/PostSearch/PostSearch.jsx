import styles from './PostSearch.module.css'



//react icons
import {AiOutlineSearch} from 'react-icons/ai'


const PostSearch = () => {

    return(
        <div className={styles.post_search_container}>
            <h1>Veja os nossos posts mais recentes</h1>
            <div className={styles.search_container}>
                <input type="text" name="" id="" placeholder="Ou busque por tags"/>
                <button> <AiOutlineSearch/></button>
            </div>
        </div>
    )
}

export default PostSearch