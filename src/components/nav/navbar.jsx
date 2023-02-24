import React, {useEffect, useRef, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { IonMenu,IonMdClose} from "../../constante/icons";
import './navbar.css'
import { Titre } from "../titre";
import { ArrowUp } from "../icon";

  export default function Navbar(){
    const [click, setClick] = useState(true)
    const [top, setTop] = useState(false)
    const [visible, setVisible] = useState(true)
    const location = useLocation()
    const param = new URLSearchParams(location.search)

    

    const [lastPositionScroll, setLastPositionScroll] =useState(0)

    const navigation = useRef()

    const handleClick = ()=> setClick(!click)
    

    const mobileMenu = ()=> setClick(false)
    

    const handleScrollTop = (e) => {
        if(window.scrollY > 50) setTop(true)
        else setTop(false)
    }

    const handleScrollPosition = (e) => {
        setLastPositionScroll(window.scrollY)
        if(lastPositionScroll > window.scrollY) setVisible(true)
        if(lastPositionScroll < window.scrollY) setVisible(false)
        
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollTop)
        window.addEventListener('scroll', handleScrollPosition)
    })

    
    return(
        <>
            <nav ref={navigation} className = {`navbar ${param.get('soutient') && 'white'} ${location.pathname === '/sensibilisation' && 'white'} ${visible ? 'visible' : ''} ${top ? 'top' : ''} ${location.pathname === '/soutient' || location.pathname === '/inscription' || location.pathname === '/temoignage'  ? 'none' : ''}`}>
                <div className="container navbar-container">
                    <Link to='/' className = 'navbar-logo'>
                        <Titre style = {{
                           height : 42,
                           width : 100
                        }} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {
                            click 
                            ? <IonMenu /> 
                            : <IonMdClose/>
                        }
                    </div>
                    <div className = 'nav-menu' >
                        <li className = 'nav-item'>
                            <Link to = '/' className="nav-links" onClick={mobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/sensibilisation' className="nav-links" onClick={mobileMenu}>
                                Sensibilisation
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/contact-us' className="nav-links" onClick={mobileMenu}>
                                Contact-Us
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = {{
                                pathname : location.pathname,
                                search : 'soutient=true'
                            }} className="nav-links" onClick={mobileMenu}>
                                <div className="soutenir">
                                    <div className="icon">
                                        <img src="/images/soutenir.png" height={'100%'} />
                                    </div>
                                    <div className="desc">
                                        <div className="fleche">
                                            <ArrowUp />
                                        </div>
                                        <div className="text">{ 
                                        !param.get('soutient') 
                                        ? 'Soutenir notre action'
                                        : 'Merci pour votre accompagnement'}</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </div>

                </div>

            </nav>
        </>
    )
  }