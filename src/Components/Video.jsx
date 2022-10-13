import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import Spinner from './Spinner';
import {getFirestore} from "firebase/firestore"
import { firebaseapp } from '../firebase';
import {getAllFeeds, getUserInfo,getVideoInfo} from "../utilis/FetchData"

function Video() {
  const {videoid} = useParams()
  const [loading,setLoading] = useState(false)
  const [video,setVideo] = useState(null)
  const firestoreDb = getFirestore(firebaseapp)

  useEffect(()=>{
    if(videoid){
      setLoading(true)
      getVideoInfo(firestoreDb,videoid).then((data)=>{
        setLoading(false)
        setVideo(data)
        console.log(data)
      })
    }

  },[videoid])

  if (loading) return <Spinner/>
  
  return (
    <div>  
      <video src={video?.videourl} controls style={{width:'1000px',height:'500px'}}/>
    </div>
  )
}

export default Video