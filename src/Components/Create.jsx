import React, {useState,useEffect} from 'react'
import {Flex,Input,Menu,MenuButton,MenuList,MenuItem,Button,Text,FormLabel} from "@chakra-ui/react"
import { categories } from '../Data'
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import Spinner from './Spinner';
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import { firebaseapp } from '../firebase';
import { fetchUser} from '../utilis/Fetchuser';
import {getFirestore} from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore"; 
import {useHistory} from "react-router-dom"

function Create() {
  const [title,settitle] = useState("");
  const [category, setcategory] = useState("Choose a Category")
  const [videoassets, setvideoassets] = useState(null)
  const [loading, setloading] = useState(false)
  const [progress, setprogress] = useState(40)
  const [userInfo] = fetchUser();
  const history = useHistory()
  const firebasedb = getFirestore(firebaseapp);
    const storage = getStorage(firebaseapp)

  const Upload = (e)=>{
setloading(true);
const videofile = e.target.files[0]
const storageref = ref(storage,`videos/${Date.now()}-${videofile.name}`);
const uploadTask = uploadBytesResumable(storageref, videofile);

uploadTask.on("state_changed", (snapshot)=>{
  const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  setprogress(uploadprogress)
},  (error) => {
  // Handle unsuccessful uploads
}, 
() => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    console.log('File available at', downloadURL);
    setvideoassets(downloadURL)
    setloading(false)
  });
}
)


  }
  const deletevideo = ()=>{
    const deleteref = ref(storage,videoassets)
    deleteObject(deleteref).then(() => {
  // File deleted successfully
}).catch((error) => {
  // Uh-oh, an error occurred!
});
    setvideoassets(null)
  }
const UploadDetails = async ()=>{
try{
  setloading(true)
  if(!title && !category && !videoassets){
    alert("Error")
  }
  else{
    const data = {
        id:`${Date.now()}`,
        title:title,
        userid:userInfo.uid,
        caategory:category,
        videourl:videoassets
    }
    await setDoc(doc(firebasedb, "videos", `${Date.now()}`), data)
    setloading(false);
    history.replace("/")
  }
}
catch{

}
}
  useEffect(()=>{

  },[title,category])

    return (
   <>
      <Flex justifyContent="center" alignItems="center" width="80%" padding="" bg="" minHeight="100vh"  borderRadius="md" borderColor="gray.400" border={"1px"}>

        <Flex width="80%" flexDirection={"column"}  alignItems={"center"} p="" gap="2"  height="full">
       <Button colorScheme="linkedin" loadingText="Uploading" variant={`${loading ? "outline" : "solid"}`} isLoading={loading} width="xl" onClick={UploadDetails}>Upload</Button>
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
                                            <Flex flexDirection="column" height="full" width="full" cursor="pointer" alignItems="center" justifyContent="center" >
                                                {loading ? (<><Spinner msg="Uploading your Video" progress={progress}/></>): (<><IoCloudUpload fontSize="30"/>
                                                <Text>Click to Upload Videos</Text>
                                                </>) }
                                                  </Flex>
                                            </Flex>
                                            {!loading && <input type="file" name="upload video" onChange={Upload} style={{width:'0', height:'0'}} accept="video/mp4,video/x-m4v,video/*"/>}
                            </FormLabel>) : (<Flex position="relative" justifyContent="center" width="full" height="full">
                              <Flex alignItems="center" rounded="full" position="absolute" height="50px" width="30px"
                              top="5" right="5" justifyContent="center" cursor="pointer" zIndex="10" bg="red.500" onClick={deletevideo}>
                                      <IoTrash color="white"/>
                              </Flex>
                              <video src={videoassets} controls/>
                              </Flex>)}
            </Flex>
         <Button colorScheme="linkedin" loadingText="Uploading" variant={`${loading ? "outline" : "solid"}`} isLoading={loading} width="xl" onClick={UploadDetails}>Upload</Button>
        </Flex>

    </Flex>
   </>
  )
}

export default Create