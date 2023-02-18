import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Posts from "../Posts/Posts";
import { List } from "@mui/material";
import axios from "axios";

const SearchPage = () => {
    const [keyword, setKeyword] = useState("");
    const [ posts, setPosts] = useState([]);
    

    useEffect(() => {
        if (keyword !== "") {

        axios.get(`https://api.thedogapi.com/v1/breeds/`, {headers:{
            'x-api-key' : 'live_G8dec3y62jgdWN9nRCrB2uzkGTHNQYVL0EkcsEqn7WqETR6JJTfdtjtqn8iRwX3k'
        }})
        .then((data) => {
            setPosts(data.data.name);
        })
        .catch((err) => {
            console.error(err.message);
        })
    }}, [keyword]);

    return (
        <>
        <SearchForm setKeyword={setWord} />
        <List sx={{ width: "100%", alignContent: "center"}}>
            {posts.length !== 0 &&
            posts.map((el, i) => {
                return <Posts post={el} key={i} />
            })}
        </List>
        </>
    );
};

export default SearchPage