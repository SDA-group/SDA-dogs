import React from 'react';
import { ListItem, Card, ListItemText } from "@mui/material";
import {PostsObj} from '../DataAPI/DataAPI'

interface PostsProps {
    post: PostsObj;
}
const Posts = ( {post} : PostsProps) => {
  return (
    <ListItem>
        <Card variant="outlined" sx={{ mb: "10px" }}>
            <img src={post.image.url} 
            alt={post.name} 
            style={{  width: "600px" }}/>
            <ListItemText sx={{ color: "black", mx: "5%" }}>
            {post.name}
          </ListItemText>

        </Card>
    </ListItem>
    
  )
}

export default Posts