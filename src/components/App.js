import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Badges from '../pages/Badges';
import BadgesNew from '../pages/badgeNew';
import NotFound from '../pages/NotFound'

function App (){ 
    
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App