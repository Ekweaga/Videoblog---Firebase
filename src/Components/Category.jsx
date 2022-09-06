import React from 'react'
import {Flex,Tooltip,Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"



function Category({category}) {
  return (
    <>
          <Flex cursor="pointer" my="6">
            <Link to={`/category/${category.name}`} >
               <Tooltip hasArrow label={category.name} bg='gray.300' color='black' placement='auto-start' arrowSize="5">
                     <Box>
                       {category.iconsrc}
                  </Box>
  
             </Tooltip>
            </Link>
            </Flex>
    </>
  )
}

export default Category
