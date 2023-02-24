import React from "react"
import './temoin.css'


export default function Temoignage(){
    
    return(

        <div className="temoignage">

            <div className="container temoignage-content">
                <Article_item />
                <Article_item />
                <Article_item />
            </div>

        </div>
    )
}

function Article_item({image}){
    return(
        <div className="temoignage-items" style={{backgroundImage : `url(${image})`}}>
            <div className="shadow">
                <div className="titre">
                    Je suis dans ville 
                </div>
                <div className="auteur">
                   <ul>
                    <li>
                        daniel Seppo Eke
                    </li>
                   </ul>
                </div>
            </div>
        </div>
    )
}