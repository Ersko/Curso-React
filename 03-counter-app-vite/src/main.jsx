import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloWorldApp} from './HelloWorldApp'
import {FirstApp} from './FIrstApp' //import {FirstApp} from './FirstApp.jsx'
import { CounterApp } from './CounterApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hey, I'm Esteban" subTitle={123} />
    </React.StrictMode>
)