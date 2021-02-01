import React from "react";
import "./sass.scss"
import "./css.css"

class Banner extends React.Component {
    render() {
      const className ="bg-primary"

        console.log(this.props.test)
      return (
          <div>
            <div id="banner">
              <h1 id="bannerText">SquidFellas </h1>
              <p>Welcome to the squidfellas were we ink all over the world of entertainment</p>
            </div>

      </div>
       
      )
    }
  }
  export default Banner