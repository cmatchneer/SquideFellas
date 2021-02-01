import React from "react";
import "./sass.scss"

class NavBar extends React.Component {
    render() {
      return (
      <div>
        <div id="navcontainer">
          <nav id="navbar">
            <button id="first">Home</button>
            <button class="navbtn">Background</button>
            <button class="navbtn">Podcast</button>
            <button class="navbtn">Patreon</button>
            <button class="navbtn">OnlyFans</button>
          </nav>
        </div> 
    </div>
       
      )
    }
  }
  export default NavBar