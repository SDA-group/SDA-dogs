import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {APIkey} from '../../helpers/APIkey'

interface PostsObj {
    name: string;
    img: File;
}
const DataAPI = () => {
const [posts, setPosts] = useState<PostsObj [] | []>([])
useEffect(() => {

    axios.get(`https://api.thedogapi.com/v1/breeds$&apiKey={API_KEY}`)
    .then((data) => {
        setPosts(data)

    })
}, []);

  return (
    <div>DataAPI</div>
  )
}

export default DataAPI