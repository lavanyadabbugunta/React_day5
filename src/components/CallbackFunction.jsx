import React from 'react'

const CallbackFunction = () => {
 
 // A function takes another function as an argument is called callback function
 function outer(innerFunction){
    return innerFunction()+ " " +"hello every one"
 } 

 function innerFunction(){
    return (10+20);
 }
 console.log(outer(innerFunction));


 
  return (
    <div>CallbackFunction</div>
  )
}

export default CallbackFunction