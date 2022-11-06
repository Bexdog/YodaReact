import React, { useState } from "react";
export function Button(props:Props){
    const getTranslation = async ()=>{
        const text = await (await fetch("http://localhost:5000/yoda?q="+props.normalText)).text()
        props.setYodaText(text);
        //console.log(text);
    }
    return<button onClick={getTranslation}>
        Yodafy
    </button>
}
interface Props{
    setYodaText:(text:string)=>void;
    normalText:string;
}