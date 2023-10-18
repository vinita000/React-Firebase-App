import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { RootState } from '../utils/appStore'
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from '../utils/appSlice'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { onAuthStateChanged } from "firebase/auth";
import handleAuthStateChanges  from '../utils/handleAuthStateChanges'


const btnstyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}

const buttonstyle = {
  width: "25%"
}

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store: RootState) => store.user)
  console.log("user.....",user)
  const { login } = location?.state || false
  console.log("login.....",location?.state)
  const handleSignOutSubmit = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error)
      });
    navigate("/", { state: { login: false } });
    dispatch(removeUser());
  }


  useEffect(() => {
    const unsubscribe = handleAuthStateChanges(navigate, dispatch, location);
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  
  console.log("login", login)
  return (
    <div style={btnstyle}>
      <h1>{user?.user?.displayName} ({user?.user?.email}) { login ? 'you are signin successfully' : 'you are signup successfully' }</h1>
      <Button type='submit' color='primary' variant="contained" style={buttonstyle} fullWidth onClick={handleSignOutSubmit}>SignOut</Button>
    </div>
  )
}

export default UserDetail;
