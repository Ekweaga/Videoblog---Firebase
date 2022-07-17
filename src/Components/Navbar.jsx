import React from 'react'
import {Flex,  Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuList, MenuItem,Image} from "@chakra-ui/react"
import {IoSearch,IoAdd, IoLogOut} from "react-icons/io5"
import {Link} from "react-router-dom"



function Navbar({user}) {
  
  return (
    <>
    <Flex justifyContent={"space-between"} width="100vw" p="4" alignItems="center">
        <h1 style={{fontWeight:'600'}}><Link to="" style={{color:'white', textDecoration:'none'}}>VIVYLO</Link></h1>
        <InputGroup mx="6" width="60vw">
    <InputLeftElement
      pointerEvents='none'
      children={<IoSearch color='gray.300' fontSize="25"/>}
    />
    <Input type='text' placeholder='Search'  variant='filled'/>
  </InputGroup>

  <Flex justifyContent="center" alignItems="center">
       <Flex width="40px" height="40px" borderRadius="5px" mx="6" cursor="pointer" hover={{shadow : 'md'}} transition="ease-in-out">
          <Link to="create">   <IoAdd fontSize={25}/></Link>
      </Flex>
    <Menu>
         <MenuButton >
        <Image src={user?.photoURL} width="30px" height="30px" rounded="full"/>
       </MenuButton>
       <MenuList shadow="black">
        <MenuItem color="black">My Profile</MenuItem>
  
       <MenuItem color="black" flexDirection="row" display="flex" gap="4" alignItems="center" >Log Out <IoLogOut/></MenuItem>
    
     </MenuList>
    </Menu>
  </Flex>

    </Flex>
    </>
  )
}

export default Navbar