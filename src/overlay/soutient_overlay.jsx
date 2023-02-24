import Overlay from "./overlay"
import { Link, useLocation } from "react-router-dom"
import './overlay.css'
import { useState } from "react"
import Banniere from "../components/banniere/banniere"
import Partenaire from "../components/partenaire/patenaire"
import Footer from "../components/footer/footer"
import { Button } from "../components/button/button"

export default function Soutient(){
    const location = useLocation()
    const param = new URLSearchParams(location.search)

    return(
        param.get('soutient')
        && <Overlay><Soutient_Page /></Overlay>
    )
}


function Soutient_Page() {
    const location = useLocation()
    const param = new URLSearchParams(location.search)
    const [visible, setVisible] = useState('')


    param.get('soutient')
    ? (setTimeout(() => setVisible('visible'), 10)) 
    : setVisible('')
    

    return(
        <div className={`soutient ${visible}`}>
            <div className="vide"></div>
            <div className="content">
                <Banniere style={{backgroundColor : 'black'}}>
                    <div className="left">
                        <h1>Soutenons les toutes</h1>
                    </div>
                    <div className="image">
                        <img src="./images/soutenons.webp" alt="" height={'100%'} />
                    </div>
                    <div className="right">
                        <h1>Aidons les a Sourire</h1>
                    </div>
                    <div className="bas">
                        <Button style={{color : 'white'}} >
                            Devenir Partenaire
                        </Button>
                    </div>
                </Banniere>
                <div className="nous">
                    <div className="container">
                        <div className="texte">
                            <div className="titre">
                                <h1>Nous,<br/>Notre Objectif</h1>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus omnis voluptatem laudantium sit error et similique? Nisi eaque cupiditate, sequi quod, obcaecati corporis consequuntur dolore laudantium impedit magni magnam voluptatem voluptatibus. Corrupti dolor ab mollitia voluptas ipsa reprehenderit unde omnis ut soluta, dolore natus non, ullam similique amet saepe deserunt sunt enim quos ratione. Aut dolor sed soluta impedit itaque ad, voluptas quo, qui fugiat nobis, esse a consequuntur! Dolorem ipsa esse mollitia consectetur sapiente, consequuntur rerum saepe, eligendi accusantium, cum officiis. Optio quaerat officiis excepturi explicabo recusandae? Ducimus nobis nostrum, consectetur inventore culpa facilis distinctio officiis quis possimus tenetur, quam quo velit minima totam aliquid enim modi molestias sed. Non odio unde nostrum magnam,
                            </p>
                        </div>
                    </div>
                </div>
                <div className="partenaria">
                    <div className="container">
                        <div className="cadre">
                            <h1>
                                Choisissez, accompagnez nous 
                            </h1>
                        </div>
                        <div className="cadre cellule">
                            <div className="haut" style = {{ backgroundImage : `url(./images/accompagne.jpeg)`}}>

                                <span>Apporter votre accompagement physique ou émotionnel à une victime</span>
                            </div>
                            <div className="bas">
                                <Link to = "/" className="btn_bas">
                                    Nous contacter
                                </Link>
                            </div>
                        </div>
                        <div className="cadre cellule">
                            <div className="haut" style = {{ backgroundImage : `url(./images/don.jpg)`}}>
                                <span>Faites un don pour contribuer a l{"'"}avancement de l{"'"}oeuvre</span>
                            </div>
                            <div className="bas">
                                <Link to = "/" className="btn_bas">
                                    Faire un don
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Partenaire/>
                <Footer />
            </div>
        </div>
    )
}