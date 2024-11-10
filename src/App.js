
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Pages/Authentication/Authentication';
import Homepage from './Pages/Homepage/Homepage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction, getUserProfile } from './Redux/Auth/auth.action';
import { Store } from '@mui/icons-material';
import Message from './Pages/Message/Message';
import { API_BASE_URL } from './Confiq/api';
import ChatMessage from './Components/Message/ChatMessage';
import UserChatCard from './Components/Message/UserChatCard';
function App() {

  console.log(`${API_BASE_URL}/auth/signin`)

  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store)
  console.log("auth",auth);
  useEffect(()=>{
    const jwt=localStorage.getItem("jwt")
    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  },[auth.jwt])

  return (
    <div className="App">
      <Routes>
          <Route path='/*' element={auth.user?<Homepage/>:<Authentication/>} />
          
      </Routes>
    </div>
  );
}

export default App;
