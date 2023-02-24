import React from "react";
import Input from "./input";

export default function InputNumber({titre, step}){

    return(
        <div>
            <Input type ={'number'} titre = {titre} />
        </div>
    )
}