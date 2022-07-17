import React from 'react'
import {Flex, Button, } from "@chakra-ui/react"
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import {Switch, Route, useHistory} from 'react-router-dom';
import Feed from '../Components/Feed';
import Create from '../Components/Create';
import Video from '../Components/Video';
import Search from '../Components/Search';

function Home({user}) {
  return (
    <>
    <Navbar user={user}/>
    <Flex direction={"column"} justifyContent={"start"} alignItems={'center'} width="20">
      <Category/>
    </Flex>

    <Flex width={"full"} alignItems={"center"} justifyContent={"center"} px="4">
<Switch>
  <Route path="/" exact>
    <Feed/>
  </Route>

  <Route path="/category/:id" exact>
    <Feed/>
  </Route>
  <Route path="/create" exact>
    <Create/>
  </Route>
  <Route path="/videodetail/:videoid" exact>
    <Video/>
  </Route>
  <Route path="search" exact>
    <Search/>
  </Route>

</Switch>

    </Flex>
    
    </>
  )
}

export default Home