import React, {Component} from 'react';

import TodoList from '../todo-list/index';
import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel/index';
import ItemStatusFilter from '../item-status-filter/index';

import './app.css';

export default class App extends Component {

    state={
        todoData: [
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
        ]
    };

    deleteItem = (id) => {
        this.setState( ({todoData})=>{

            const idx = todoData.find( (elem)=> elem.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1)

            const newAray = [ ...before, ...after]

            return {
                todoData: newAray
            } 
        });
    };

    render(){
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todoData} 
                        onDeleted={ this.deleteItem}/>
            </div>
        );
    }
};