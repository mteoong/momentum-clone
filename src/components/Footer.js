import React, { Component } from "react";
import Todo from "./Todo";
import InspirationalQuote from "./InspirationalQuote";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="caption">
                    <section className="author-info mt-5">
                        <div className="white">{this.props.imageInfo.location}</div>
                        <div className="white">{this.props.imageInfo.name} </div>
                    </section>
                </div>
                <InspirationalQuote />
                <Todo />
            </div>
        );
    }
}

export default Footer;