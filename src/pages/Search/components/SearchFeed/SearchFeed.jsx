import styles from './SearchFeed.module.css'

//
Components
//
import PostSearch from '../PostSearch/PostSearch'

import { useEffect,useState,useContext } from 'react'

//Firestore
import { collection, getDocs, query, where } from "firebase/firestore"; 
import {db} from '../../../../../firebase/config';
import { doc, setDoc } from "firebase/firestore"; 

//Components
import Post from '../Post/Post';

//Context
import userContext from '../../../../context/userContext';

const SearchFeed = () => {

    const {searchedPosts,setSearchedPosts} = useContext(userContext);
    const [posts,setPost] = useState([]);

    useEffect(() => {
        const searchPost = async() => {
            const postsRef = collection(db,'posts');

            const q = query(postsRef, where('tags','array-contains', searchedPosts))

            const querySnapshot = await getDocs(q);
            const postsArray = [];
            querySnapshot.forEach((doc) => {
                postsArray.push(doc.data());
            })

            setPost(postsArray);

            console.log(posts);
        }

        searchPost();

    },[searchedPosts])

    return(
        <div className={styles.feed_container}>
            <PostSearch/>
            <div className={styles.feed_posts}>
                {posts && posts.map((post,index) => (<Post key={index} data={post}/>))}
                {!posts && <h1>Nenhum resultado para a busca</h1>}
            </div>
            <button onClick={() => {console.log(posts)}}>Clica</button>
        </div>   
    )
}

export default SearchFeed 