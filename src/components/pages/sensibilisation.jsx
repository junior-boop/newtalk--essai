import React from "react";
import Banniere from '../banniere/banniere'
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import Partenaire from "../partenaire/patenaire";

import './sensibilisation.css'
import Faire_Action from "../faire_action/faire_action";
import { IonArrowForwardOutline } from "../icon";





export default function Sensibilisation(){
     

    return(
        <div className="sensibilisation">
            <div className="content">
            <div className="vide"></div>
            <Banniere style={{backgroundColor : 'black'}}>
                <div className="image">
                    <img src="./images/image_4.jpg" alt="" height={'100%'} />
                </div>
                <div className="right">
                    <h1>Sensibilisation</h1>
                </div>
                <div className="bas">
                        <Button url="/temoignage" style={{color : 'white'}} >
                            Laissez votre témoignage ici
                        </Button>
                </div>
            </Banniere>
            <section>
                <div className="container">
                    <h2 style={{color : 'black'}}>Quelques Articles</h2>
                    <div className="grid_4">
                        <Article_item large />
                        <Article_item />
                        <Article_item />
                        <Article_item />
                        <Article_item />
                        <Article_item />
                    </div>
                </div>
                
            </section>
            <Partenaire />
            <Faire_Action />
        </div>
        </div>

    )
}

function Article_item({image, large, url = ''}){
    return(
        <Link to={`/sensibilisation/${url}`} className={`article-items ${large ? 'large' : ''}`} style={{backgroundImage : `url(${image})`}}>
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
            {
                large 
                && (<Link to = {`/sensibilisation/${url}`} className="lirePlus">
                        Lire plus
                        <IonArrowForwardOutline />
                    </Link>)
            }
        </Link>
    )
}