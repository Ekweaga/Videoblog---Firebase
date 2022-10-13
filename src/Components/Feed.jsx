import React,{useState,useEffect} from 'react'
import {Flex,Button,Text,SimpleGrid} from "@chakra-ui/react"
import {getFirestore} from "firebase/firestore"
import { firebaseapp } from '../firebase';
import {getAllFeeds, getUserInfo} from "../utilis/FetchData"
import Spinner from './Spinner';
import { Box } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import "./feed.css"
import Videopin from './Videopin';
function Feed() {
  const firestoreDb = getFirestore(firebaseapp)
  const [feeds,setFeeds] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    getAllFeeds(firestoreDb).then((data)=>{
      setLoading(false)
      setFeeds(data)
    })

    getUserInfo(firestoreDb,)

  },[])

  if (loading) return <Spinner/>
  return (
    <>
    <div  className="feedsVideos">
      {
        feeds.map((feed)=>{
          return (
          <Videopin feed={feed} key={feed.id}/>
          )
        })
      }
    </div>

    </>
  )
}

export default Feed