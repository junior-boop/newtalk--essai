import { Link, useLocation } from "react-router-dom"
import Overlay, { Overlay_Tegmoignage } from "./overlay"
import './temoignage.css'
import { Titre } from "../components/titre"
import Input from "../components/base/input"

export default function Temoignage_page(){
    return(
        <div className="temoignage_page">
            <div className="left">
                <div className="logo">
                    <Link to={'/'}>
                        <Titre style = {{ height : 40, width : 100 }} />
                    </Link>
                    <h1>
                        Parler pour
                        vivre libre
                    </h1>
                </div>
                <div className="foot">
                Tous droits reserver Talk.com &copy;2023
                </div>
        
            </div>
            <div className="right">
                <div className="titre">
                    votre témoignage
                </div>
                <div className="input_textArea">
                    <textarea  placeholder="Ecrivez votre temoignage ici"></textarea>
                </div>
                <Input titre={'Votre Nom complet'} />
                <Input titre={'Votre numéro de téléphone'} type={'tel'} />
               <div className="bas">
               <button>
                    Envoyer
                </button>
                <Link className="goback" to = {'/'}>
                    Rentrer à Accueil
                </Link>
               </div>
            </div>
        </div>
    )
}


