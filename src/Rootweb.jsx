import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App.jsx';
import TodoStore from './model/TodoStore.jsx';

export default class Rootweb extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="app vertical-center">
                    <Route exact path="/"  render={() => <App store={TodoStore}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}