import React from 'react';
import ReactDOM from 'react-dom';

const Todo_list = () =>{
    const items = ['Learn React', 'Build Awesome app']

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const App_header = () => <h1>My To Do list</h1>;

const SearchPanel = () => {
    const search_placrholder = 'Click here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input placeholder={search_placrholder}
                  style={searchStyle}/>;
};

const App = () => {
    const isLogedIn = false;
    const login = <span>Log in please</span>
    const welcomeBox = <span>Welcome back!</span>

    return (
        <div>
            { isLogedIn ? null : login}<br/>
            <span>{ (new Date()).toString()}</span>
            <App_header/>
            <SearchPanel/>
            <Todo_list/>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('#root'));