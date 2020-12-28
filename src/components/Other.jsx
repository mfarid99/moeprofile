import React from "react"
import Popup from 'reactjs-popup';


export const Other = (props) => {
    
    return (
        <>

        <div> 
        <h1 className = "projectName">  {props.name} </h1>
        <div className="gitlivediv"> 
        <div> <h2 id="git">  <a href = {props.git}>Git</a> </h2></div>
        <div> <h2 id="live">  <a href = {props.live}>Live</a> </h2> </div>
        </div>
        <div> <img src = {props.img}></img> </div>
        <div> <h2>  {props.tools}</h2> </div>

        <hr />


        </div>

        </>
    )
}