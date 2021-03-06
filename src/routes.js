import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import HomeClassic from './containers/App/home/homeClassic.js'
import GameClassic from './containers/App/game/gameClassic.js'
import Credits from './containers/App/configuration/credits.js';
import Instructions from './containers/App/configuration/instructions.js';
import LevelOne from './containers/App/game/levelsClassic/levelOne.js';
import LevelTwo from './containers/App/game/levelsClassic/levelTwo.js';
import LevelThree from './containers/App/game/levelsClassic/levelThree.js';
import Home from './containers/App/home/home.js';
import Victory from './components/victory/victory.js';
import Header from './components/header/header.js';

const Router = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path="/Classic" component = {HomeClassic}/>
                <Route path="/GameClassic" component = {GameClassic}/>
                <Route path="/Credits" component = {Credits}/>
                <Route path="/Instructions" component = {Instructions}/>
                <Route path="/LevelOne" component = {LevelOne}/>
                <Route path="/LevelTwo" component = {LevelTwo}/>
                <Route path="/LevelThree" component = {LevelThree}/>
                <Route path="/Victory" component = {Victory}/>
                <Route path='/Configurations' component ={Header}/>
            </Switch>
        </HashRouter>
        
    );
}
export default Router;