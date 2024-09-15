import React, { useState } from 'react'
import CommentList from './CommentList';

const Comment = () => {
    const [inputValue, setInputValue] = useState ('');
    const[comment, setComment] = useState([])
    const handleInputValue = (event) =>{
        setInputValue(event.target.value)
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setComment((prevComment) =>[...prevComment, inputValue])
        console.log(inputValue)
    }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Enter Your Comment' value={inputValue} onChange={handleInputValue}/>
        <button  type='submit'>Comment</button>
      </form>
      <div className="comments">
        <ul>
            {comment.map((comment, index) =>{
            return    <CommentList key={index} comment={comment}/>
            })}
        </ul>
      </div>
    </div>
  )
}

export default Comment
