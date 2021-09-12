import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Badges from '../pages/Badges';
import BadgesDetails from '../pages/badgeDetails';
import BadgesNew from '../pages/badgeNew.js';
import NotFound from '../pages/NotFound';
import BadgesEdit from '../pages/badgeEdit';

function App (){ 
    
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgesEdit}/>
                    <Route exact path="/badges/:badgeId" component={BadgesDetails}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App