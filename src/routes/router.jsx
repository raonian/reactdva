import React from 'react';
import { Router, Switch, Route, IndexRoute } from 'dva/router';

import User from '../pages/user';

export default function ({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/user" component={User} />
                <Route path="/" component={User} />
            </Switch>
        </Router>
    );
}