import React, { Component } from "react";
import Weather from "./Weather";
import Search from "./Search";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Search />
                <Weather />
            </div>
        );
    }
}

export default Header;