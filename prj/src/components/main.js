import React, { Component } from 'react';
import Navigation from './Navigation';
import Movies from './Movies';

const mainStyle = {
    display: "flex"
}

export default class Main extends Component {
    
    render() {
        return (
            <section className="MainStyle">
                <Navigation />
                Movies 
            </section>
        )
    }
} 