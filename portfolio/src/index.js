import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Landing from './components/Landing';
import './css/App.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Landing}/>
            {/*<Route path='profile(/:userId)' component={Profile}/>*/}
        </Route>
    </Router>
), document.getElementById('root'));
