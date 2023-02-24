import React from "react";
import Input from "./input";





export default function InputRadio({titre, checkbox, onChange,value,onClick,name}){


    return(
        
            <Input  type={!checkbox ? 'radio' : 'checkbox'} titre =  {titre}  name ={name} value = {value} onClick = {onClick} radio />
        
    )
}














// export default function InputRadio({titre}){

//     return(
//         <div>
//             <Radio checkbox nom ='statut' titre ='statut' value = 'statut'/>
//             <ListRadio data = {data} titre = { titre}/>
//         </div>
//     )
// }

// export function Radio({titre,checkbox,name,onChange,value}){

//     return(
//        <div className='radio'>
//             <label htmlFor={titre}>{titre}</label>
//             <input type={checkbox ? 'checkbox' : 'radio'} name = {name} onChange = {onChange} value = {titre}></input>
//        </div> 
//     )
// }

// export function ListRadio({titre,checkbox,data,onChange}){

//     return(
// <div>
//                 {
//                     data.map((el, key) => <InputRadio key={key} name={el.nom} titre = {el.label} onChange = {onChange} value = {el.value} checkbox = {checkbox} />)
//                 }
//             </div>
//     )
// }