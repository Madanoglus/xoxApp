import React, { Component } from 'react'
import Header from './Component/Header'
import GameArea from './Component/GameArea'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <GameArea />
            </div>

        )
    }
}
