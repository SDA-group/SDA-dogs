import React from 'react';
import { ListItem, Card, ListItemText } from "@mui/material";
import {PostsObj} from '../DataAPI/DataAPI'
import { useState } from 'react';
import "./Posts.css"

interface PostsProps {
    post: PostsObj;
}
const Posts = ( {post} : PostsProps) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
  }
 

  return (
    <>
    <ListItem>
        <Card onClick = {toggleModal} className = "btn-modal" variant="outlined" sx={{ mb: "10px" }}>
            <img src={post.image.url} 
            alt={post.name} 
            style={{ width: "100%" }}/>
            <ListItemText sx={{ color:'black', mx: '5%'}}>
              {post.name}
            </ListItemText>

        </Card>
    </ListItem>
    {modal && (
    <div className="modal">
    <div className="overlay"></div>
    <div className="modal-content">
        <h2 className = "modal-title">Product informations</h2>
        <p>Breed name: {post.name}</p>
        <p>Origin: {post.origin}</p>
        <p>Life span: {post.life_span}</p>
        <p>Temperament: {post.temperament}</p>
        <button 
        className = 'close-modal'
        onClick = {toggleModal}>close</button>
    </div>
</div>
   )}
    </>
  )
}

export default Posts