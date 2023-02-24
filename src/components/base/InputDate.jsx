import React from "react";
import Input from "./input";


export default function InputDate({titre,type,name,onChange,value,placeholder}){


    return (
        <Input type = {'date'}  titre = {titre} name = {name} value = {value} onChange = {onChange}/>
    )
}