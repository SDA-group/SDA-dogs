import React from 'react';
import DataAPI from './components/DataAPI/DataAPI';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      {/* <DataAPI></DataAPI> */}

    <SearchPage></SearchPage>
    </div>
  );
}

export default App;
