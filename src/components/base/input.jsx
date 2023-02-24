import React, { useState } from "react";
import './input.css'

export default function Input({titre, type, name, onChange,onClick, value, placeholder, radio}){


    return(
        <div className={!radio ? "input": "radio"}>
            <label htmlFor="">{titre}</label>
            <input type={type} name = {name} onChange = {onChange} value = {value} placeholder = {placeholder} onClick = {onClick}/>
        </div>
    )
}