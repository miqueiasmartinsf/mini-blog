import styles from './Feed.module.css'

//Components

import PostSearch from '../PostSearch/PostSearch'


import { useEffect,useState } from 'react'

//Firestore
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../../../../firebase/config';


//Components
import Post from '../Post/Post';
import Footer from '../Footer/Footer';

const Feed = () => {

    const[posts,setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            const newPosts = [];
            const querySnapshot = await getDocs(collection(db, "posts"));
            querySnapshot.forEach((doc) => newPosts.push(doc.data()));


            setPosts(newPosts);
        }
        getPosts();
    },[]);

    return(
        <div className={styles.feed_container}>
            <PostSearch/>
            <div className={styles.feed_posts}>
                {posts.map((post,index) => (<Post key={index} data={post}/>))}
            </div>
            <Footer/>
        </div>   
    )
}



export default Feed 