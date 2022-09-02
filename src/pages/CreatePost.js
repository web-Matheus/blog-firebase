import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
function CreatePost({ isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollection = collection(db,"posts")

  const navigate = useNavigate();
  
  const createPostData = async () =>{
    await addDoc(postsCollection, {title, postText,
       author: { name:auth.currentUser.displayName,
        id:auth.currentUser.uid },
      });
      
        navigate("/")
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])
  return (
    <div>
      <h1>Create a post</h1>
      <div>
        <label>Title</label>
        <input type="text" placeholder="title"
        onChange={(e) => {setTitle(e.target.value)}}/>
        <label>Post</label>
        <textarea placeholder='post'
        onChange={(e) => {setPostText(e.target.value)}}/>
        <button onClick={createPostData}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost