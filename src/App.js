import React, { Component } from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";

import { imageDetails } from "./utils";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: "",
      imageAuthor: {
        name: "",
        location: ""
      },
    }
  }

  componentDidMount = () => {
    const getImageDetails = async () => {
      let imageInfo = await imageDetails();
      console.log(imageInfo);
      try {
        this.setState({
          image: imageInfo.urls.full,
          imageAuthor: {
            name: imageInfo.user.name,
            location: imageInfo.location.name,
          },
        })
      } catch(e) {
        this.setState({
          image: "https://images.unsplash.com/photo-1544297787-43ce4f544585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          imageAuthor: {
            name: "Damian Markutt",
            location: "Chrachenhorn, Davos Monstein, Switzerland",
          },
        })
      }
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
          <Header />
          <Center />
          <Footer imageInfo={this.state.imageAuthor} />
      </div>
    )
  }
}

export default App;