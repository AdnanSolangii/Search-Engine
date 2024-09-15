import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import Delete from './Delete';

const CommentList = ({index, comment}) => {
    const [isShow, setIsShow] = useState('');
    const showDelete = () =>{
        setIsShow(!isShow);
    }
  return (
    <li key={index}>
        <div className="user" style={{display: 'flex', gap: '10px'}}>
        <h5>Adnan</h5>
        <button onClick={showDelete}>
        <HiOutlineDotsVertical />
        </button>
        {isShow && <Delete />}
        </div>
        <p>{comment}</p>
    </li>
  )
}

export default CommentList
