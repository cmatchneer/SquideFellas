import React from "react";
import "./sass.scss"

class Banner extends React.Component {
    render() {
      const className ="bg-primary"

        console.log(this.props.test)
      return (
          <div>
            <div id="banner">
              <div id="alltext">
                <h1 id="bannerText">SquidFellas </h1>
                <p>Welcome to the squidfellas were we ink all over the world of entertainment</p>
              </div>
            </div>

      </div>
       
      )
    }
  }
  export default Banner