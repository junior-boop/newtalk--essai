import './form.css'

export function Input({titre, onChange, value, style, type}){
    return (
        <div>
            <label htmlFor={titre}>{titre}</label>
            <input name= {titre} type = {type} value = {value} onChange = {onChange} style = {style} />
        </div>
    )
}