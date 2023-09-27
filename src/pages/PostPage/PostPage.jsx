import styles from './style/PostPage.module.css'



import { useParams } from 'react-router-dom'

//Hooks
import { useEffect,useState } from 'react'

//Firebase
import { db } from '../../../firebase/config'
import { doc,getDoc } from 'firebase/firestore'


//Components
import PostContainer from './Components/PostContainer/PostContainer'


const PostPage = () => {

    const [data,setData] = useState({});
    const {id} = useParams();

    const getData = async() => {
        const docRef = doc(db,'posts',id);
        const docSnap = await getDoc(docRef)
        setData(docSnap.data()); 
    }

    useEffect(() => {
        getData();
    },[])

    return(
        <div className={styles.post_page}>
            <PostContainer data={data}/>
        </div>
    )
}

export default PostPage 