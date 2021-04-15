import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';
import Navbar from '../components/Navbar';

const AppRouter:React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/pokemon' exact component={Pokemon}/>
                    <Route path='/pokemon/:pokemonId' exact component={Pokemon}/>
                </Switch>
            </div>
        </div>
    );
}
export default AppRouter;