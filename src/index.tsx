import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Menu} from './forms/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UnderConstruction} from "./forms/UnderConstruction";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import {INSTAGRAM_URL, TELEGRAM_URL, VK_URL, WHATSAPP_URL} from "./consts/endpoints";
import {NotFound} from "./forms/NotFound";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Menu}/>
                <Route path={TELEGRAM_URL} component={UnderConstruction}/>
                <Route path={WHATSAPP_URL} component={UnderConstruction}/>
                <Route path={VK_URL} component={UnderConstruction}/>
                <Route path={INSTAGRAM_URL} component={UnderConstruction}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
