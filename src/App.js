import React, { Component } from "react";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
        grid:[],
        mouseClicked:false,
        selected:"",
        start_node:null,
        end_node:null,
        visited:0,
        shortestPath:0,
        number_of_nodes:0,
    }
  }
  
  render() {
    const backgroundStyles = {
      backgroundImage: `url( ${image} )`,
      padding: "1%",
      height: "100vh",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };
    return (
      <div style={backgroundStyles}>
        <Title/>
        <Toolbar/>
      </div>
    )
  }
}

export default App;