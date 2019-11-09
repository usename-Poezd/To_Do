import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    state = {
        label: ''
    }
    
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render(){
        
        return (
            <div className="item-add-form"
                 onSubmit={this.onSubmit}>
                <form className="item-add-form d-flex">
                    <input className="form-control"
                           onChange={this.onLabelChange}
                           value={this.state.label}/>
                    <button className="btn btn-outline-secondary">Add item</button>
                </form>
                
            </div>
            

        );
    }
};