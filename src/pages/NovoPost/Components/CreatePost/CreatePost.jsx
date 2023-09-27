import styles from './CreatePost.module.css'


//FireStore
import { collection, addDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../../../../../firebase/config';

//Hooks
import { useContext,useState } from 'react';

//Context
import userContext from '../../../../context/userContext';


const CreatePost = () => {


    const[postTitle,setPostTitle] = useState('');
    const[postImg,setPostImg] = useState('');
    const[postContent,setPostContent] = useState('');
    const[postTags,setPostTags] = useState('');
    const {userInfo} = useContext(userContext);


    function formatContentString(string){
        if(string.length >= 80){

            const firstHalf = string.slice(0,80);

            const secondHalf = string.slice(80);

            const formatedString = firstHalf + '\n' + secondHalf

            setPostContent(formatedString);
        }
    }




    const uploadPost = async() => {

        formatContentString(postContent);

        try{
            const docRef = await addDoc(collection(db,"posts"),{
                title: postTitle,
                author: userInfo.displayName,
                authorID:userInfo.uid,
                description: postContent,
                img: postImg,
                tags: postTags
            });

            await updateDoc(docRef,{
                postid:docRef.id
            })
            console.log(`Documment written with id:${docRef.id}` )
        } catch(error){
            console.log(`Error adding document:${error}`); 
        }

        setPostContent('');
        setPostImg('');
        setPostTags('');
        setPostTitle('');
    }

    return(
        <div className={styles.create_post_container}>
            <h1>Criar Post</h1>
            <p>Escreva sobre o que quiser e compratilhe seu conhecimento!</p>
            <div className={styles.input_container}>


               <section>
                    <label htmlFor="post-title">Título:</label>
                    <input type="text" name="" id="post-title" placeholder='Pense num bom título'
                    value={postTitle} onChange={(e) => setPostTitle(e.target.value)} maxLength={30} />
               </section>


                <section>
                    <label htmlFor="img-url">URL da imagem:</label>
                    <input type="text" name="" id="img-url" placeholder='Insira uma imagem que represente seu post'
                    value={postImg} onChange={(e) => setPostImg(e.target.value)} />
                </section>


                <section>
                    <label htmlFor="content">Conteúdo</label>
                    <input type="text" name="" id="content" placeholder='Insira o conteúdo do post'
                    value={postContent} onChange={(e) => setPostContent(e.target.value)} maxLength={200} />
                </section>


                <section>
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="" id="tags" placeholder='Insira as tags separadas por virgula'
                    value={postTags} onChange={(e) => setPostTags(e.target.value) } maxLength={100} />
                </section>
            </div>
            <div className={styles.btn_container}>
                <button onClick={uploadPost}>Criar post!</button>
            </div>
        </div>
    )
}


export default CreatePost