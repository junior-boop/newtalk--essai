import React from "react";
import Input from "./input";

export default function InputPassword({titre,name,placeholder,value}){

    return(
        <div>
            <Input type ={'password'} titre = {titre} />
        </div>
    )
}