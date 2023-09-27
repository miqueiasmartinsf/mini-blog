import styles from './PostCard.module.css'


import {Link} from 'react-router-dom'



//Firebase

import { Firestore } from 'firebase/firestore'
import { db } from '../../../../../firebase/config'
import { doc,deleteDoc } from 'firebase/firestore'


//Notification

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PostCard = ({data}) => {



    const deletePost = async() => {
        await deleteDoc(doc(db,"posts",data.postid));

        toast.success("Publicação apagada com sucesso!");
    }



    return(
        <div className={styles.post_card_container}>
            <div className={styles.post_title}>
                <p>{data.title}</p>
            </div>
            <div className={styles.post_options}>
                <Link to={`/post/${data.postid}`}><button>Ver</button></Link>
                <Link to={`/edit/${data.postid}`}><button>Editar</button></Link>
                <button onClick={deletePost}>Excluir</button>
            </div>
        </div>
    )
}


export default PostCard 