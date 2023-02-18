import React from 'react';
import { useState } from 'react';
import { PostsObj } from '../DataAPI/DataAPI';

interface PostsProps {
    post: PostsObj;
}
const ModalWindow = ({post} : PostsProps) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
  }
  return (
    <>
   <button onClick = {toggleModal}
   className = "btn-modal"> open </button>

    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <h2>Product informations</h2>
            
        </div>
    </div>
    </>
  )
}

export default ModalWindow