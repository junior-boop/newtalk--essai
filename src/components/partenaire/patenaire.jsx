import React from "react"
import './partenaire.css'


export default function Partenaire(){
    
    return(

        <div className="partenaire">
            <div className="titre">
                <h2 style={{fontFamily :"Britannic"}}>Nos Partenaires</h2>
            </div>
            <div className="container partenaire-content">
                <Partenaire_items image={'giz.png'} />
                <Partenaire_items image={'onufemmes.png'} />
                <Partenaire_items image={'minas.jpeg'} />
                <Partenaire_items image={'minproff.jpeg'} />
            </div>

        </div>
    )
}


function Partenaire_items({image}){
    return(
        <div className="partenaire-items">
            <img src={`./images/${image}`} height={'100%'} />
        </div>
    )
}