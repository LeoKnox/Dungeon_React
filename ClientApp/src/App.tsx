import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Single from './components/Single';
import Levels from './components/Levels';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Rooms' component={Rooms} />
        <Route path='/Room/:id' component={Single} />
        <Route path='/levels' component={Levels} />
    </Layout>
);
