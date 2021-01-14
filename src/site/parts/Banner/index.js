import React from "react";
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./sass.scss"
class Banner extends React.Component {
    render() {
        console.log(this.props.test)
      return (
          <div>
        <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
      </div>
       
      )
    }
  }
  export default Banner