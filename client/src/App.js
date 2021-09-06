import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join.jsx';
import Chat from './components/Chat/Chat.jsx';

function app() {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
}

export default app
