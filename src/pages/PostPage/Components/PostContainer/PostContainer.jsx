import styles from './PostContainer.module.css'



const PostContainer = ({data}) => {

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
                        <p><i>publicado por {data.author}</i></p>
                    </div>
                </div>
                <div className={styles.post_description}>
                    <p>{data.description}</p>
                </div>
                <div className={styles.tags_container}>
                    <p>#viagem #europa</p>
                </div>
            </div>
        )
}

export default PostContainer