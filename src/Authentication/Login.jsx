import React from 'react'
import {Button, Flex, HStack} from '@chakra-ui/react'
import{FcGoogle} from 'react-icons/fc'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore"; 
import {firebaseapp} from '../firebase.js'
import {useHistory} from 'react-router-dom'


function Login() {
  const firebaseAuth = getAuth(firebaseapp);
  const provider = new GoogleAuthProvider();
  const firebasedb = getFirestore(firebaseapp);
  const history = useHistory();

  const login = async() =>{
    const {user}= await signInWithPopup(firebaseAuth,provider)
  const {providerData, refreshToken} = user;
  console.log(providerData)
  localStorage.setItem('user',JSON.stringify(providerData))
  localStorage.setItem('accesstoken',JSON.stringify(refreshToken))

  await setDoc(
    doc(firebasedb, "users",providerData[0].uid), providerData[0]);
    
    history.replace("");


  }
  return (
  <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} backgroundColor={'black'}>
    
    <HStack>
    <Button  colorScheme='blue' leftIcon={<FcGoogle />} size='md' variant='outline' onClick={login}>

SignInWithGoggle
</Button >
    </HStack>
    

  </Flex>
  )
}

export default Login
