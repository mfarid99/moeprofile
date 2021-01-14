import React from "react"
import {Other} from "./Other.jsx"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const App = (props)=> {




  return (
    <>



      <h1>Moe Farid's Portfolio</h1>
      <div className="pers"> 
<div className="btn"><a href = "https://drive.google.com/file/d/13oXxOxj7_UGw3Gqsz-rS8T_4V8XDfmt-/view?usp=sharing"><button>Resume</button></a></div>

<div className="btn"><a href = "https://www.linkedin.com/in/moe-farid-9a24b419a/"><button>Linkedin</button></a></div>

<div className="btn"><a href = "https://github.com/mfarid99"><button id="gitbtn">Git</button></a></div>
</div>

<div class="tooltip"><div> 
<Other name= "UFC" git = "https://github.com/mfarid99/UFC_APP_FE" live = "https://5febac1c3d462f000795d40e--elastic-poincare-6eb85f.netlify.app/" img = "https://i.imgur.com/MHBSS74.png"  tools = "Express, Node, React, Mongoose, Bootstrap" disc = "App allows users to signup or login to view past and upcoming UFC events with links to fighters' bio and stats and UFC FightPass. Users can also add/edit/delete comments on past and future events. It is full CRUD application using MERN stack." />  

</div> 
</div>

<div class="tooltip1"> <div> 
<Other name= "Metallica Fanpage" git = "https://github.com/mfarid99/Metallica-Fans.git" live = "https://metallicafans.herokuapp.com/" img = "https://i.imgur.com/xanKg13.png" tools = "Javascript, HTML, CSS, React, Express, MongoDB, Heroku" disc = "App allows Metallica fans to upload their favorite live show photos and comment on their experiences. Users can also edit and delete their posts. It is full CRUD with all 7 RESTful routes. "/> 
</div>

</div>

<div class="tooltip2"> <div> 

<Other name= "G.O.A.T" git = " https://github.com/mfarid99/Boxer_FE" live = "https://lucid-kare-cea573.netlify.app/" img = "https://i.imgur.com/nKG2auD.png" tools = "Ruby On Rails, React, CSS, Postman, Heroku, Netlify" disc = "App allows users to create, edit and delete a list of their top 10 greatest boxers of all time. It was built with Ruby on Rails for the backend and React on the front end. Rails backend serves a JSON API with all CRUD operation in my model. The front end uses a global state. "/> 
</div>
</div>


    </>
  )
}