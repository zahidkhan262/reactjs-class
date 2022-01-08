import React, { Component } from 'react'

export class FirstClass extends Component {
    constructor() {
        super()
        this.state = {
            showPas: false,
        }
    }
    render() {
        return (
            <>
                <input type={!this.state.showPas ? "password" : "text"} />
                <button onClick={() => this.setState({ showPas: !this.state.showPas })} >hideshow</button>
            </>
        )
    }
}

export default FirstClass
