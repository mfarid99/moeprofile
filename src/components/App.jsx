import React from "react"
import {Other} from "./Other.jsx"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const App = (props)=> {




  return (
    <>



      <h1>Moe Farid's Portfolio</h1>
      <div className="pers"> 
<div className="btn"><a href = "https://drive.google.com/file/d/1avGtvpbBJxx-vDqiz2uGGNnYtjOv2XAi/view?usp=sharing"><button>Resume</button></a></div>

<div className="btn"><a href = "https://github.com/mfarid99?tab=repositories"><button>Git</button></a></div>
</div>

<div class="tooltip"><div> 
<Other name= "Digital Newsstand" git = "https://github.com/mfarid99/projects.git" live = "https://moenewsapp.herokuapp.com/" img = "https://i.imgur.com/7prhavU.png"  tools = "Javascript, HTML, CSS, Jquery, API" />  

<p class="tooltiptext">This App allows users to search and read newspapers articles directly from The Atlantic for a variety of topics including politics, economics, sports and entertainment. Info was pulled from The Atlantic API using Jquery </p>
</div>
</div>

<div class="tooltip1"> <div> 
<Other name= "Metallica Fanpage" git = "https://github.com/mfarid99/Metallica-Fans.git" live = "https://metallicafans.herokuapp.com/" img = "https://i.imgur.com/xanKg13.png" tools = "Javascript, HTML, CSS, React, Express, MongoDB, Heroku" /> 
</div>
<p class="tooltiptext1">This App uses Mongo/Express/React to creat an APP where Metallica fans can upload their best live show photos and comment on their experiences. This is a full stack application that uses Node.js, Mongoose, Express/React. It adheres to MVC file structure including Models, Views and Controllers. It uses 1 model with all 7 RESTful routes and full CRUD.</p>
</div>

<div class="tooltip2"> <div> 

<Other name= "G.O.A.T" git = " https://github.com/mfarid99/Boxer_FE" live = "https://lucid-kare-cea573.netlify.app/" img = "https://i.imgur.com/nKG2auD.png" tools = "Ruby On Rails, React, CSS, Postman, Heroku, Netlify" /> 
</div>
<p class="tooltiptext2">This App allows users to create, edit and delete a list of the top 10 greatest boxers of all time. It was built with Ruby on Rails for the backend and React on the front end. The backend was deployed via Heroku and the front end via Netlify. The Ruby in rails backend serve a JSON API with all CRUD operation in my model. For the front end, I set up a global state. I created a router to send user to different routes. I also defined the reducer function which handles all the different situations.  </p>
</div>


    </>
  )
}