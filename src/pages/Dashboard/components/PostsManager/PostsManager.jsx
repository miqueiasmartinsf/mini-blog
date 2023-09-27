import styles from './PostsManager.module.css'


//Components
import PostCard from '../PostCard/PostCard'

//Hooks
import { useEffect,useState } from 'react';


//Firestore
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../../../../firebase/config';


//Context

import { useContext } from 'react';
import userContext from '../../../../context/userContext';

const PostsManager = () => {

    const {userInfo} = useContext(userContext);

    const[posts,setPosts] = useState([]);

    useEffect(() => {
        const getUserPosts = async() => {
            const newPosts = [];
            const filteredPosts = [];
            const querySnapshot = await getDocs(collection(db, "posts"));
            querySnapshot.forEach((doc) => newPosts.push(doc.data()));
        
            for(let i = 0; i < newPosts.length; i++){
                if(newPosts[i].authorID === userInfo.uid){
                    filteredPosts.push(newPosts[i]);
                }
            }
            setPosts(filteredPosts);    
        }
        getUserPosts();
    },[]);

    return(
        <div className={styles.post_manager_container}>
            <div className={styles.post_manager_header}>
                <h2>Título</h2>
                <h2>Ações</h2>
            </div>
            <hr />
            <div className={styles.posts_cards}>
                {posts.map((post,index) => (
                    <PostCard data={post} key={index}/>
                ))}
            </div>
        </div>
    )
}


export default PostsManager