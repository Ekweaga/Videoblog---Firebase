import React from 'react'
import {Button, Flex, HStack} from '@chakra-ui/react'
import{FcGoogle} from 'react-icons/fc'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {firebaseapp} from '../firebase.js'


function Login() {
  const firebaseAuth = getAuth(firebaseapp);
  const provider = new GoogleAuthProvider();

  const login = async() =>{

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
