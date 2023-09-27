import styles from './style/EditPost.module.css'

import { useParams } from 'react-router-dom'

//Hooks
import { useEffect,useState } from 'react'

//Firebase
import { db } from '../../../firebase/config'
import { doc,getDoc } from 'firebase/firestore'


//Components
import EditPostContainer from './Components/EditPost/EditPostContainer'


const EditPost = () => {

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
        <div className={styles.edit_post_page}>
            <EditPostContainer data={data}/>
        </div>
    )
}


export default EditPost