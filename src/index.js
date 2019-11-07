import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header'
import SearchPanel from './components/serach-panel'


const App = () => {
    const isLogedIn = false;
    const login = <span>Log in please</span>
    const welcomeBox = <span>Welcome back!</span>

    return (
        <div>
            { isLogedIn ? null : login}<br/>
            <span>{ (new Date()).toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('#root'));