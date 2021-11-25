import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Pages/Auth';
import Lock from './Pages/Lock';
import Chatscreen from './Pages/Chatscreen';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/unlock" component={Lock} />
                <Route path="/chat" component={Chatscreen} />
            </Switch>
        </Router>
    );
}

export default App;
