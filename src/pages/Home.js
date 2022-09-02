import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc} from "firebase/firestore"
import { auth, db } from '../firebase-config'

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollection = collection(db,"posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      //é um pouco confuso mas é pra criar um novo array 
      //apartir do array que já existia
    }
    getPosts()
  });
    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id )
      await deleteDoc(postDoc)
    }
  return (
    <div>{postList.map((post) => {
      return (
      <div key={post.id}>
       <h1> {post.title}</h1>
       <div className="postTextContainer"> {post.postText} </div>
          {isAuth && post.author.id === auth.currentUser.uid &&(
            <button onClick={() => {deletePost(post.id)}}
            >&#128465;</button>
          )}
       
     </div>
   ) })}</div>
  )
}

export default Home