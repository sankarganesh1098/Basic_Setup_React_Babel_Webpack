import React, { Component } from 'react';
import Registration from './Registration'
import Action from './Action'
import Grid from './Grid'

export default class App extends Component{

    render(){
        return(
            <div>
            <Registration />
            <Action />
            <Grid />
            </div>
            );
    }
}