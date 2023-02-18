import React from 'react';
import DataAPI from './components/DataAPI/DataAPI';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <DataAPI></DataAPI> */}
      <SearchPage></SearchPage>
      {/* <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
