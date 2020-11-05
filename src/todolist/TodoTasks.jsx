import React from 'react';
import './TodoTasks.css';

export default props => {
    let todo = props.list;

    if (props.todoToShow === "Completed") {
        todo = todo.filter((item) => item.complete);
    } else if (props.todoToShow === "Remaining") {
        todo = todo.filter((item) => !item.complete);
    }

    return (
        <div key="container" className="todo-tasks">
            {todo.map((todoItem) => (
                <div key={todoItem.id} className="todo-item-container">
                    <div className="todo-item" >
                        <span className={todoItem.complete && props.todoToShow !== "Completed" ? "complete" : ""} onClick={() => props.completeFunction(todoItem)}>{todoItem.text}</span>
                    </div>
                    <div>
                        <button variant="contained" color="secondary" onClick={() => props.deleteFunction(todoItem)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}