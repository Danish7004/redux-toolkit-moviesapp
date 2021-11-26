import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

function Pages(props) {
    return (
        <Switch>
            <Route exact path = "/" component={Movies}/>
            <Route exact path = "/detail/:id" component={MovieDetail}/>
        </Switch>
    );
}

export default Pages;