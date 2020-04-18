import React from 'react';

import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="content-wrapper">
                    <Routes />
                </div>
            </Router>
        );
    }
}
