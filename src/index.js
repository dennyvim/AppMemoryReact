import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import * as serviceWorker from './serviceWorker';

const renderReactDom = () => {
    ReactDOM.render(<Routes></Routes>, document.getElementById('root'));
};

if(window.cordova){
    document.addEventListener('deviceready', ()=>{
        renderReactDom();
    }, false);
} else{
    renderReactDom();
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
