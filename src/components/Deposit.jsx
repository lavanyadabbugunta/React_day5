import React, { useState } from 'react'

const Deposit = () => {
    const[amount,setAmount]=useState(0);
 
    //useState will render after function execution appativaraku it will print present value
    
    // const handleDeposit=()=>{
    //     //if we have multiple setStates unna previous one ni final one ni compare chesi output estundi
    //     setAmount(amount+100);  //setAmount(0+100)
    //     setAmount(amount+100);  //setAmount(0+100)
    //     setAmount(amount+100);  //setAmount(0+100)
    //     setAmount(amount+100);  //setAmount(0+100)

    //     console.log(amount);  //output : 0
    //     console.log("amount Deposited");
    // }




  

    const handleDeposit=()=>{
     
     // In setState : only for callback functions react stores the previous value
      setAmount((previousValue)=> { //previousValue is a default name you can take any name insted of previousValue
        //prev--->0
        console.log("1st previousValue: ",previousValue);
        return previousValue+100}); //0+100--->prev-->100
     
      setAmount((previousValue)=>{
        console.log("2nd previousValue: ",previousValue);
        return previousValue+100   //100+100--->prev-->200
      })

      setAmount((previousValue)=>{
        console.log("3rd previousValue: ",previousValue);
        return previousValue+100   //200+100--->prev-->300
      })

      setAmount((previousValue)=>{
        console.log("4th previousValue: ",previousValue);
        return previousValue+100   //300+100--->prev-->400
      })

      console.log(amount);//0
    }

       console.log("after deposite: ",amount);

  return (
    <div>
        <h1>current:{amount}</h1>
        <button onClick={handleDeposit}>submit</button>
    </div>
  )
}

export default Deposit