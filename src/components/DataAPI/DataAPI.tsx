import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {APIkey} from '../../helpers/APIkey';
import Posts from '../Posts/Posts'

 export interface PostsObj {
    name: string;
    url: string;
}
const DataAPI = () => {
const [posts, setPosts] = useState<PostsObj [] | []>([])
useEffect(() => {

    axios.get(`https://api.thedogapi.com/v1/breeds$&apiKey={API_KEY}`)
    .then((data) => {
        setPosts(data.data)

    })
}, []);

  return (
    <>
    {posts.length !== 0 &&
    posts.map((el, i) => {
      return <Posts post = {el} key={i} />;
    })}

    </>
  )
}

export default DataAPI