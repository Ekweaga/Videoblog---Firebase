import React, {useEffect} from 'react'
import {Circles} from 'react-loader-spinner'
import {Flex,Progress,Text} from "@chakra-ui/react"

function Spinner({msg,progress}) {

    useEffect(()=>{

    }, [progress])
  return (
    <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} height="full">
            <Circles color="#ffff" height={"100"} width="60"/>
            <Progress mt="4" isAnimated size="sm" value={60} width={"lg"} rounded="sm"/>
    </Flex>
  )
}

export default Spinner