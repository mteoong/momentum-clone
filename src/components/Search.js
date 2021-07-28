import React, { useState, Component } from "react";
import { showDropdown } from "../utils";
import google from "../imgs/google.png";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    name: "Chrome Tab",
                    link: "google.com",
                    icon: "fab fa-chrome"
                },
                {
                    name: "Marc's Website",
                    link: "marc.to",
                    icon: ""
                }
            ],
            newInputName: "",
            newLinkName: "",
            search: "",
        }
    }

    captureSearchValue = e => {
        this.setState({
            search: e.target.value,
        });
    }

    captureNameValue = e => {
        this.setState({
            newInputName: e.target.value,
        });
    }
    
    captureLinkValue = e => {
        this.setState({
            newLinkName: e.target.value,
        });
    }

    addItem = () => {
        this.setState({
            links: [...this.state.links, { name: this.state.newInputName, link: this.state.newLinkName }],
        });
        
        showDropdown(0, "new-link-lightbox");
    };

    keyPress = e => {
        console.log('hi');
    if (e.which == 13) {
        window.open(
            `http://google.com/search?q=${this.state.search}`
        );
        }
    }

    render() {
        return(
            <div>
                <div className="search">
                    <p
                    className="white link-text"
                    onClick={() => showDropdown(0, "search-dropdown-options")}>
                    Links
                    </p>
                    <i className="fa fa-search white" />
                    <section>
                        <input
                            type="text"
                            className="search-input-box input-box"
                            onChange={this.captureSearchValue}
                            onKeyPress={e => this.keyPress(e)}
                            placeholder="Search Google"
                        />
                    </section>
                </div>

                <div className="dropdown search-dropdown-options">
                    {this.state.links.map((link, index) => (
                        <p
                            key={index}
                            onClick={() => window.open(`http://${link.link}`, "_blank")}
                            className="dropdown-item white"
                            value={link.name}>
                            <i className={link.icon ? link.icon : "fa fa-th"} /> {link.name}
                        </p>
                    ))}
                    <p
                    className="dropdown-item white"
                    value="New Item..."
                    onClick={() => showDropdown(0, "new-link-lightbox")}>
                        <i className="fa fa-plus" /> New Item...
                    </p>
                </div>

                <div className="dropdown new-link-lightbox">
                    <label htmlFor="name" className="white">
                    Name
                    <input
                        type="text"
                        name="name"
                        className="small-input-box"
                        onChange={e => this.captureNameValue(e)}
                    />
                    </label>
                    <label htmlFor="links" className="white">
                    Links
                    <input
                        type="text"
                        className="small-input-box"
                        onChange={e => this.captureLinkValue(e)}
                    />
                    </label>
                    <button className="gray-button btn btn-default white" onClick={this.addItem}>
                        Create
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;
