import styles from './EditPostContainer.module.css'


//Firebase
import { db } from '../../../../../firebase/config';
import { getDoc,doc,updateDoc } from 'firebase/firestore';
import { useState } from 'react';

import {useNavigate} from 'react-router-dom'


import {toast} from 'react-toastify'

const EditPostContainer = ({ data }) => {


    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('');
    const[img,setImg] = useState('');
    const[tags,setTags] = useState('');


    const navigate = useNavigate();


    const [post,setPost] = useState({});

    const getData = async() => {
        try{
            const docRef = doc(db,'posts',data.postid);
            const docSnap = await getDoc(docRef)
            setPost(docSnap.data());
            
            await updateDoc(docRef,{
                title: title,
                description: description,
                img: img,
                tags: tags,
            })

            navigate('/');
            toast.success('Publicação editada com sucesso')

        }catch(error){
            console.log(error);
            toast.error('Erro ao editar')
        }
    }





    









    return (
        <div className={styles.edit_post_container}>
            <h2>Editando Post: <span>{data.title}</span></h2>
            <div className={styles.img_container}>
                    <img src={data.img} alt="" />
                </div>
            <div className={styles.input_container}>
                <h3>Altere os dados como quiser</h3>
               <section>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
               </section>

                <section>
                    <label htmlFor="img">URL da imagem:</label>
                    <input type="text" name="" id="img" value={img} onChange={(event) => setImg(event.target.value)} />
                </section>

                <section>
                    <label htmlFor="content">Conteúdo:</label>
                    <input type="text" name="" id="content" value={description} onChange={(event) => setDescription(event.target.value)} />
                </section>

                <section>
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="" id="tags" value={tags} onChange={(event) => setTags(event.target.value)} />
                </section>
                <button onClick={getData}>Editar</button>
            </div>
        </div>
    )
}

export default EditPostContainer