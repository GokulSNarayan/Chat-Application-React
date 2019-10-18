import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';


const AppStore = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
)

const MainApp = () => (
    
    <Router>
        <Switch>
            <Route path="/" component={AppStore} />
        </Switch>
    </Router>
    
)




ReactDOM.render(
    
        <MainApp />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
