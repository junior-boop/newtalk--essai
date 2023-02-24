import React from "react";
import Input from "./input";


export default function InputText({titre,type,name,onChange,value,placeholder}){
     return(
        
            <Input type = {'text'} titre = {titre} name = {name} value = {value} onChange = {onChange}/>
        
     )
}