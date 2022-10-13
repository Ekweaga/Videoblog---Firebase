import React,{useState,useEffect} from 'react'
import {getAllFeeds, getUserInfo} from "../utilis/FetchData"
import {getFirestore} from "firebase/firestore"
import { firebaseapp } from '../firebase';
import {Link} from "react-router-dom"

function Videopin({feed}) {
    const [userId,setUserId] = useState(null)
    const [userinfo,setuserinfo] = useState(null)
    const firestoreDb = getFirestore(firebaseapp)

    useEffect(()=>{
        if(feed){
            setUserId(feed?.userid)
        }
        if(userId){
            getUserInfo(firestoreDb,userId).then((data)=>{
                setuserinfo(data)
               
            })
        }
           
    },[userId])
  return (
  <Link to={`/videodetail/${feed?.id}`}>  <div style={{display:'flex',flexDirection:'column',justifyItems:'center'}}>
    <video src={feed?.videourl} controls style={{width:'200px',height:'200px'}}/>
    <div className="videoInfo" style={{display:'flex',alignItems:'center',justifyItems:'space-between',gap:'80px',background:'black'}}>
      <span>{feed?.title}</span>
      <img src={userinfo?.photoURL} style={{borderRadius:'50%', height:'50px',width:'50px'}}/>
    </div>
  </div></Link>
  )
}

export default Videopin