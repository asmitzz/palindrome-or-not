import React,{useState} from "react";
import "./styles.css";

export default function App() {
   
  const [Palindrome,setPalindrome] = useState("");
  const inputHandler = (event) =>{
     let reverse = "";
     const input = event.target.value;
       for( let i = input.length; i >= 0; i--){
         reverse = reverse+input.charAt(i);
       }
       if( reverse === input ){
          if( isNaN(input) ){
            setPalindrome("It is a palindrome string")
          }
          else{
            setPalindrome("It is a palindrome number")
          }
       }
       else{
        if( isNaN(input) ){
          setPalindrome("It is not a palindrome string")
        }
        else{
          setPalindrome("It is not a palindrome number")
        }
       }
       if( input === ""){
         setPalindrome("");
       }
  }
  return (
    <div className="App">
      <h1>Palindrome</h1>
      <input placeholder="Enter text here" onChange={() => inputHandler(event)}/>
      <p>{Palindrome}</p>
    </div>
  );
}
