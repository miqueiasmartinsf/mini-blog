import styles from './Footer.module.css'




//React-Icons

import {FaInstagram,FaFacebookF,FaGithub,FaLinkedinIn,FaTwitter,FaGoogle} from 'react-icons/fa'

const Footer = () => {


    return(
        <footer>
            <div className={styles.dev}>
                <p>© 2023 Projeto Desenvolvido por Miquéias Martins</p>
            </div>
            <div className={styles.social_networks}>
                <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
                <a href="https://github.com/" target='_blank'><FaGithub/></a>
                <a href="https://www.google.com/" target='_blank'><FaGoogle/></a>
                <a href="https://www.instagram.com/" target='_blank'><FaInstagram/></a>
                <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn/></a>
                <a href="https://twitter.com/home" target='_blank'><FaTwitter/></a>
            </div>
        </footer>
    )
}


export default Footer