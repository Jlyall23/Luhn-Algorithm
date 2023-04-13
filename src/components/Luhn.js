import React,{useState} from "react"
let validMessage= document.getElementById("message")

function Luhn(){
  const[cardNumber,setCardNumber]=useState("")
  let[isValid,setIsValid]=useState(false)
  

function validateCardNumber(){
    
  let sum = 0
  let isEven = false

for(let i=cardNumber.length -1;i>=0;i--){
    let digit =parseInt(cardNumber.charAt(i))
    if(isEven){
        digit *=2
    if(digit >9){
        digit -=9
    }
    }
    sum+=digit
    isEven=!isEven
    console.log(sum)
    
}
    if(sum %10 === 0){
        isValid=true
        console.log(isValid)
        validMessage.textContent='Card Number is VALID!'

    }else{
        isValid=false
    }console.log(isValid)
    validMessage.textContent='Card Number is INVALID!'

    
}
return(
<div>
    <input type ='text' value = {cardNumber} onChange={(e)=>
    setCardNumber(e.target.value)}/>
   
    <button onClick={validateCardNumber}>Validate</button>

    
</div>
)

}
export default Luhn;
