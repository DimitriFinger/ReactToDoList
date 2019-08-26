import React, { Component } from 'react';

class TodoList extends Component{
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Your task"
                               ref={this.props.inputElement} />
                        <button type="submit">Add task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;

// creates a todo component;