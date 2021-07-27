import React, { Component } from "react";
import { callQuoteApi } from "../utils";

class InspirationalQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            quote: "",
        }
    }


    getQuote = async () => {
        let quoteObject = await callQuoteApi();

        let quoteText = quoteObject.content.trim();
        let quoteAuthor = quoteObject.author.trim();

        this.setState({
            author: quoteAuthor,
            quote: quoteText,
        })
    }    

    componentDidMount = () => {
        this.getQuote();
    }
    
    render() {
        return (
            <div className="quote-container">
                <p className="quote-text white">{this.state.quote}</p>
                <p className="quote-author white">{this.state.author}</p>
            </div>
        );
    }
}

export default InspirationalQuote;