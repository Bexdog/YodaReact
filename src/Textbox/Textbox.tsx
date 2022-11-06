//import React from "react";
//import { setTextRange } from "typescript";
import "./Textbox.css";
interface Props{
    readOnly:boolean;
    placeholder:string;
    setState:(text:string)=>void;
    content?:string;
}

export function Textbox(props:Props){
    const placeholder = "Input text here"
    return<textarea rows={2}cols={50} onChange={(e)=>props.setState(e.target.value)} className="sentence" 
    placeholder={props.placeholder}readOnly={props.readOnly} value={props.content}/>
    
}
