import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {APIkey} from '../../helpers/APIkey';
import Posts from '../Posts/Posts'
import Pagination from '../Pagination/Pagination';
import ModalWindow from '../ModalWindow/ModalWindow';

export interface CurrentPageObj {
    currentPage: number;
    setCurrentPage: (value: number) => void;
  }
 export interface PostsObj {
    name: string;
   url: string;
   image: imgObj;
   origin: string;
   life_span: string;
   temperament: string;
}
interface imgObj {
    id: string;
    width: number;
    height: number;
    url: string;

}
export interface PaginationObj {
    postsPerPage: number;
    totalPosts: number;
    previousLabel: string;
    nextLabel: string
  }
const DataAPI = () => {
const [posts, setPosts] = useState< PostsObj[] | []>([])
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(100);

useEffect(() => {

    axios.get(`https://api.thedogapi.com/v1/breeds/`, {headers:{
        'x-api-key' : 'live_G8dec3y62jgdWN9nRCrB2uzkGTHNQYVL0EkcsEqn7WqETR6JJTfdtjtqn8iRwX3k'
    }})
    .then((data) => {
        setPosts(data.data)

    })
}, []);
const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = posts.slice(firstPostIndex, lastPostIndex)


  return (
    <>
    {posts.length !== 0 &&
    posts.map((el, i) => {
      return <Posts post = {el} key={i} />;
    })}
<Pagination 
    totalPosts={posts.length} 
    postsPerPage = {postsPerPage}
    setCurrentPage = {setCurrentPage}
    currentPage = {currentPage}
    ></Pagination>
    
   
    </>
    
  )
}

export default DataAPI