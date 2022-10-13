
import {collection,doc,getDoc,getDocs,orderBy,query} from "firebase/firestore"


export const getAllFeeds = async(firestoreDb)=>{
 const feeds =    await getDocs(query
        (collection(firestoreDb,"videos"),orderBy('id','desc')));

        return feeds.docs.map(doc=>doc.data())
}

export const getUserInfo = async (firestoreDb,userId)=>{
        const userInfo = doc(firestoreDb,"users", userId);
        const userSnap = await getDoc(userInfo)

        if(userSnap.exists()){
                return userSnap.data();
        }

        else{
                return "No such User in our database"
        }
}