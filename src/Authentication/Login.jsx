import React from 'react'
import {Button, Flex, HStack, Text} from '@chakra-ui/react'
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
    await setDoc(
      doc(firebasedb, "specificusers",providerData[0].email), {
        savedVideos:[]
      });
    
    history.replace("");


  }
  return (
  <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} flexDirection="column">
   <Text fontSize="20px" fontWeight={"600"}>VIYLO</Text>
    <Text m="5px">
      Welcome, Login
    </Text>
    <HStack mt="10px">
    <Button  colorScheme='blue' leftIcon={<FcGoogle />} size='md' variant='outline' onClick={login}>

SignInWithGoggle
</Button >
    </HStack>
    

  </Flex>
  )
}

export default Login
