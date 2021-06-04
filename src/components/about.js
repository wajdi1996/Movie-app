import React from 'react'
import Menu from './navbar';



const About = ({favorites}) => {
  return(
    <div>
       <Menu favorites={favorites}/>
        <h1 className="abutt">About</h1>
    </div>
   )

 }

export default About