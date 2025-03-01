import React from 'react'

const PostsItem = (props) => {
    
    const{id,title}=props;
 
    return (
    <>
    <p>{id}</p>
    <p>{title}</p>
    
    </>
  )
}

export default PostsItem