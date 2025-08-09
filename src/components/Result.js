import { useState } from "react"

function Result(props){
    const {secret}=props
    const {guess}=props
    const [text,changeText] =useState('')
    function check(){
        if (secret==guess){
            changeText('You are correct')
        }
        else if (secret>guess){
            changeText('your guess is lower')
        }
        else{
            changeText('your guess is higher')
        }

    }
    return <>
    <h1>{text}</h1>
    <div id='button-sub'>
    <button onClick={check}>Submit</button></div>
    </>
}

export default Result