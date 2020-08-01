import React, { Component } from 'react'
import Masthead from './componentHomePage/Masthead';
import Services from './componentHomePage/Services';
export default class HomePage extends Component {
    render() {
        return (<div>
           
            <Masthead/>
            <Services/>
            </div>
           
        )
    }
}
