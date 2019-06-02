
import React from 'react'
import Home from './Home.js';
import SignUp from './SignUp.js'
import { Route, Switch } from 'react-router-dom';


const MainRouter = () => (

    <div>
        <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/' component={Home} />
        </Switch>
    </div>
)

export default MainRouter;


































