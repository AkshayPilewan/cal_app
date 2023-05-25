import { useState } from "react";
import CalWrapper from "../Cal-Wrapper/CalWrapper";

const Cal = () =>{
   const [inputVal1, setInputVal1]= useState(0);
   const [oprationValue, setOprationValue]= useState(0);
   const [currentOpration, setCurrentOpration]= useState('');
   const allBtArr = [
      {value: 0, btFun: () => {
         
         setInputVal1((preValue)=> parseInt(preValue.toString() +0));
      }},
      {value: 1, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +1));
      }},
      {value: 2, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +2));
      }},
      {value: 3, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +3));
      }},
      {value: 4, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +4));
      }},
      {value: 5, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +5));
      }},
      {value: 6, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +6));
      }},
      {value: 7, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +7));
      }},
      {value: 8, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +8));
      }},
      {value: 9, btFun: () => {
         setInputVal1((preValue)=> parseInt(preValue.toString() +9));
      }},
      
   ];
    
   const oprationArr = [
   
       { 
         value:0,
         btFun: () => {
            setInputVal1((prevValue) => parseInt(prevValue.toString() + 1));

         },  
       },
      {
         value: '+',
         btFun: () => {
            setCurrentOpration('+');
            setOprationValue(inputVal1);
            setInputVal1(0);
         },
      },
      {
         value: '-',
         btFun: () => {
            setCurrentOpration('-');
            setOprationValue(inputVal1);
            setInputVal1(0);
         },
      },
      {
         value: '*',
         btFun: () => {
            setCurrentOpration('*');
            setOprationValue(inputVal1);
            setInputVal1(0);
         },
      },
      {
         value: '/',
         btFun: () => {
            setCurrentOpration('/');
            setOprationValue(inputVal1);
            setInputVal1(0);
         },
      },
      {
         value: '=',
         btFun: () => {
            if(currentOpration === '+'){

               setInputVal1((preValue) =>{
                  return preValue + oprationValue
                  

               })

               setInputVal1((preValue) =>{
                  return preValue - oprationValue


               })
               setInputVal1((preValue) =>{
                  return preValue * oprationValue
                  

               })
               setInputVal1((preValue) =>{
                  return preValue / oprationValue
                  

               })

            }else if(currentOpration === '-') {

            }
      }
   }
   ];

 return(
 <div>
  <p> This is Cal js {inputVal1} </p>
  <p> {oprationValue} {currentOpration}</p>
 

    <CalWrapper allBtArr={allBtArr} oprationArr= {oprationArr}/>
 </div>

 );


};

export default Cal;
