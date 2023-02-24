import React, { useEffect, useRef, useState } from "react";
import InputNumber from "./inputNumber";
import InputTel from "./inputTel";
import InputRadio from "./inputRadio";
import ButtonEnregistre from "./buttonEnregistre";
import './input.css'
import './formulaire.css'
import InputMail from "./inputMail";
import InputPassword from "./inputPassword";



export default function Form(){

    const [data, setData] =useState([]) 
    const Save = useRef()


    const [telephone, setTelephone] = useState(0)

    const [age, setAge] = useState(0)

    const [mail, setMail] = useState('')
   
    const [genre, setGenre] = useState('')

    const [statut, setStatut] = useState('')

    const [password, setPasword] = useState('')

    


    const handleTelephone = ({target}) => {
        setTelephone(target.value)
     }


    const handleAge = ({target}) => {
       setAge(target.value)
    }

    const check = (value) =>{
        const regex = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g
        const Match = value.match(regex)
        console.log(Match)
        return value
    }

    const handleMail = ({target}) => {
        if(check(target.value)) {

            console.log('valid')
            setMail(target.value)


        } else{
            console.log(false)

            // mail.style.outlineColor = 'red' 
        }    

       
    }

   

    const handleGenre= ({target}) => {
        console.log(target.value)
       if(target.value === 'true'){
            setGenre('femme')
        } else {
            setGenre('homme')
        } 

    }
    const handleStatut  = ({target}) => {
        console.log(target.value)
        
        switch (target.value) {
            case 'Celibataire':
                setStatut('celibataire')
                break;
            case 'Marie':
                setStatut('marie')
                break;
            case 'Separe':
                setStatut('separe')
                break;
            case 'Divorce':
                setStatut('divorce')
                break;
        
            default:
                console.log('aucun choix')
                break;
        }
   
    }

    const handlePassword = ({target}) => {
        setPasword(target.value)
     }


    const handleSave = () => {
        const object = {

            telephone,
            age,
            mail,
            genre,
            statut,
            password 
        }

         // setData()
         
        
        
        function deleteElement(id) {
            console.log(id)
            let l = localStorage
            let bd = JSON.parse(l.getItem('User'))
            bd.forEach((element, key) => {
                if (id === element.id) {
                    bd.splice(key, 1)
                    console.log(bd)
                    l.setItem('User', JSON.stringify(bd))
                }
            });
        
        }
        
        

       
       
    } 

    useEffect(() => {
        const object = {

            telephone,
            age,
            mail,
            genre,
            statut,
            password 
        }

        if(typeof window !== 'undefined'){
            console.log(object, Save)
        }

    }, [, telephone,age,mail,genre, statut,password , Save])
    





    return (
        <div>
            <div className="form">

                <div className="left">
                    <InputTel  titre ='TELEPHONE'  name ='' value = {telephone} onChange ={handleTelephone}/>
                    
                    <InputNumber  titre ='AGE' name = '' value = {age} onChange = {handleAge}/>

                    <InputMail  titre ='EMAIL' name = '' value = {mail} onChange = {handleMail}/> 

                </div>

            <div className="right">
    
                <div>
                    <label>GENRE</label> 
                    <div className="inputTypeRadio">
                        <InputRadio  titre= 'Homme' name ='choix' value = {false} onClick = {handleGenre}/>
                        <InputRadio  titre= 'Femme' name ='choix' value = {true} onClick= {handleGenre}/>
                    </div>
                </div>

                <div>
                    <label>STATUT MATRIMONIAL</label> 
                    <div className="inputTypeRadio">
                        <InputRadio  titre= 'Celibataire' name ='choice' value = {false} onClick = {handleStatut}/>
                        <InputRadio  titre= 'Marie(e)' name ='choice' value = {true} onClick= {handleStatut}/>
                        <InputRadio  titre= 'Separe(e)' name ='choice' value = {true} onClick= {handleStatut}/>
                        <InputRadio  titre= 'Divorce(e)' name ='choice' value = {true} onClick= {handleStatut}/>
                    </div>
                </div>

                <InputPassword  titre ='MOT DE PASSE' name = '' value = {password} onChange = {handlePassword}/> 

    
            </div>
        </div>
            <div className="bouton">
            <ButtonEnregistre ref = {Save} texte='Enregistrer' onClick={handleSave}/>
            <ButtonEnregistre texte='Annuler' onclick=''/>
            </div>
        </div>

    )
}

