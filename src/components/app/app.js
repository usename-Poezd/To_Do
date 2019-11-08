import React from 'react';

import TodoList from '../todo-list/index';
import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel/index';
import ItemStatusFilter from '../item-status-filter/index';

import './app.css';

const App = () => {

    const todoData = [
        {
            label: 'Drink tea',
            important: false,
            id: 1
        },

        {
            label: 'Make awesome app',
            important: true,
            id: 2
        },

        {
            label: 'Have a lunch',
            important: false,
            id: 3
        }
    ];

    return (
        <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter/>
        </div>

        <TodoList todos={todoData} />
    </div>
    );
};

export default App;