import React, { Component } from "react";

export default class EmotionalButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            areYouHappy: true
        };
    }

    render() {
        return (
            <button onClick={() => {this.setState({ areYouHappy: !this.state.areYouHappy }) }}>{
                this.state.areYouHappy ?
                    "Happy 😊" :
                    "Sad 😢"}
            </button>
        )
    }
}