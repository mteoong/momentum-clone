import React, { Component } from "react";
import "./App.css";
import TopContainer from "./components/TopContainer";
import MiddleContainer from "./components/MiddleContainer";
import LowerContainer from "./components/LowerContainer";

import { imageDetails } from "./utils";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: "",
      imageAuthor: {
        name: "",
        description: ""
      },
    }
  }

  componentDidMount() {
    async function getImageDetails() {
      let imageDetails = await imageDetails();
      this.setState({
        image: imageDetails.urls.full,
        imageAuthor: {
          name: imageDetails.user.name,
          description: imageDetails.alt_description,
        },
      })
    }
    getImageDetails();
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url( ${this.state.image} )`,
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
      <div className="app" style={backgroundStyle}>
          <TopContainer />
          <MiddleContainer />
          <LowerContainer imageInfo={this.state.imageAuthor} />
      </div>
    )
  }
}

export default App;