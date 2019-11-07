import React from 'react';

const Todo_list = () =>{
    const items = ['Learn React', 'Build Awesome app']

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

export default Todo_list;