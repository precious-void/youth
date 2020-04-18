import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Mainfest from 'pages/Mainfest';
import News from 'pages/News';
import Documents from 'pages/Documents';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/manifest" component={Mainfest} />
                <Route exact path="/news" component={News} />
                <Route exact path="/docs" component={Documents} />
                {/* <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> */}
                <Route
                    render={() => {
                        return <p>You're lost. This is how new Router Switch is suppose to work!</p>;
                    }}
                />
            </Switch>
        );
    }
}
