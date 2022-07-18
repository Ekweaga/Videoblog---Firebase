import React, {useState} from 'react'
import {Flex,Input,Menu,MenuButton,MenuList,MenuItem,Button,Text,Box,FormLabel} from "@chakra-ui/react"
import { categories } from '../Data'
import {IoCloudUpload} from 'react-icons/io5'
import Spinner from './Spinner';

function Create() {
  const [title,settitle] = useState("");
  const [category, setcategory] = useState("Choose a Category")
  const [videoassets, setvideoassets] = useState(null)
  const [loading, setloading] = useState(true)
    return (
   <>
      <Flex justifyContent="center" alignItems="center" width="80%" padding="" bg="" minHeight="100vh"  borderRadius="md" borderColor="gray.400" border={"1px"}>

        <Flex width="80%" flexDirection={"column"}  alignItems={"center"} p="" gap="2"  height="full">
          <Input variant="flushed" placeholder="Video Title" focusBorderColor='gray.600' errorBorderColor='red' type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
          <Flex justifyContent="space-between" width="full" alignItems="center" gap="" my="4">

                  <Menu >
                     <MenuButton as={Button} leftIcon={<iochevronDown fontSize="23"/>} width="full" colorScheme="blue">
                        {category}
                    </MenuButton>
                       <MenuList zIndex="101" width="md">
                         {categories.map((item)=>{
                          return (
                            <MenuItem key={item.id} fontSize="20" onClick={()=>setcategory(item.name)} color="black">{item.iconsrc} <Text marginLeft="2px">{item.name} </Text></MenuItem>
                          )
                         })}
    
                         </MenuList>
    </Menu>
          </Flex>

          <Flex border="1px" borderColor="gray.300" height="400px" width="full" borderRadius="md" overflow={"hidden"} >
                            {!videoassets ? (<FormLabel width="full">
                                            <Flex flexDirection="column" height="full" width="full" alignItems="center" justifyContent="center">
                                            <Flex flexDirection="column" height="full" width="full" cursor="pointer" alignItems="center" justifyContent="center">
                                                {loading ? (<><Spinner/></>): (<><IoCloudUpload fontSize="30"/>
                                                <Text>Click to Upload Videos</Text>
                                                </>) }
                                                  </Flex>
                                            </Flex>
                            </FormLabel>) : (<Box></Box>)}
            </Flex>
        </Flex>

    </Flex>
   </>
  )
}

export default Create