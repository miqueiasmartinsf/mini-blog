import styles from './Post.module.css'



//Img

import reactLogo from '../../../../assets/react.svg'


//Hooks 
import { useState } from 'react'



//React Icons 
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat} from 'react-icons/bs'
import {FaRegBookmark} from 'react-icons/fa'


//Router
import { Link } from 'react-router-dom'


const Post = ({data}) => {


    return(
        <div className={styles.post_container}>
            <div className={styles.post_img_container}>
                <div className={styles.post_img}>
                    <img src={data.img} alt="" />
                </div>
            </div>
            <div className={styles.detail_container}>
                <div className={styles.title_container}>
                    <h1>{data.title}</h1>
                    <p><i>{data.author}</i></p>
                </div>
                <Link to={`/post/${data.postid}`}><button className={styles.read_btn}>Ler</button></Link>
            </div>
            <div className={styles.post_description}>
                <p>{data.description}</p>
            </div>
            <div className={styles.tags_container}>
                <p>{data.tags}</p>
            </div>
        </div>
    )
}


export default Post 