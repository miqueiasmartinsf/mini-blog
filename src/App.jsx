import './App.css'

//React Router 
import {BrowserRouter,Routes,Route, useNavigate, Navigate} from 'react-router-dom' 


//Pages 
import Home from './pages/Home/Home'
import NovoPost from './pages/NovoPost/NovoPost'
import Dashboard from './pages/Dashboard/Dashboard'
import Sobre from './pages/Sobre/Sobre'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import Entrar from './pages/Entrar/Entrar'
import PostPage from './pages/PostPage/PostPage'
import EditPost from './pages/EditPost/EditPost'

//Components
import Header from './components/Header/Header'
//Hooks
import {useState,useContext, useEffect} from 'react'

//Context 
import userContext from './context/userContext'

//Notify
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//Firebase
import { Firestore } from 'firebase/firestore'
import { db } from '../firebase/config'
import { collection,getDocs } from 'firebase/firestore'
import { auth } from '../firebase/config'
import Post from './pages/Home/Components/Post/Post'

function App() {

    const[windowSizeX,setWindowSizeX] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowSizeX(window.innerWidth);
        console.log(windowSizeX);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },[])



  const [userStat,setUserStat] = useState(false);

  const [userInfo,setUserInfo] = useState({});

  const[posts,setPosts] = useState([]);

  useEffect(() => {
    /*const getCurrentUserData = async() => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
    */

    if(userStat === true){
      const currentUser = auth.currentUser
      setUserInfo({
        email: currentUser.email,
        uid: currentUser.uid,
        displayName: currentUser.displayName
      })
      console.log(userInfo);
    }    
  },[userStat])

  

  const value = {
    userStat,
    setUserStat,
    userInfo,
    setUserInfo,
    posts,
    setPosts
  }

  return (
    <>
      <userContext.Provider value={value}>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/novo-post' Component={NovoPost} />
              <Route path='/dashboard' Component={Dashboard}/>
              <Route path='/about' Component={Sobre}/>
              <Route path='/cadastrar' Component={Cadastrar}/>
              <Route path='/entrar' Component={Entrar}/>
              <Route path='/post/:id' Component={PostPage}/>
              <Route path='/edit/:id' Component={EditPost}/>
            </Routes>      
          </BrowserRouter>
          <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
      </userContext.Provider>
    </>
  )
}

export default App
