import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoTasks from './TodoTasks';
import './Todo.css';

export default class Todo extends Component {
        constructor(props) {
            super(props);
            this.state = {
                todo: [],
                todoToShow: "All",
                currentId: 0,
        };
    }

    incrementId = () => {
        const currentId = this.state.currentId;
        const id = currentId + 1;
        this.setState({ currentId: id });
        return id;
    }

    handleAddTodo = (todoText) => {
        const id = this.incrementId();
        const todoItem = { text: todoText, complete: false, id };
        this.setState({ todo: [...this.state.todo, todoItem] })
    }

    handleDelete = (todoItem) => {
        const currentTodo = [...this.state.todo];
        const updatedTodo = currentTodo.filter((item) => item.id !== todoItem.id);
        this.setState({ todo: [...updatedTodo] });
    }

    handleTodoToShow = (e) => {
        const buttonValue = e.target.innerHTML;
        this.setState({ todoToShow: buttonValue });
    }

    handleComplete = (todoItem) => {
        const currentTodo = [...this.state.todo];
        const updatedTodo = currentTodo.map((item) => {
            if (item.id === todoItem.id) {
                item.complete = !item.complete;
            }
            return item;
        });
        this.setState({ todo: [...updatedTodo] });
    }

    render() {
        console.log(this.state)

        return (
            <div key="unico" className="todo-container">
                <div className="todo-title">
                    <h1>Lista de tarefas</h1>
                </div>

                <TodoForm addFunction={this.handleAddTodo} />

                <div className="todo-toggle">
                    <button color={this.state.todoToShow === "All" ? "primary" : ""} variant="contained" onClick={this.handleTodoToShow}>Todas</button>
                    <button color={this.state.todoToShow === "Completed" ? "primary" : ""} variant="contained" onClick={this.handleTodoToShow}>Completas</button>
                    <button color={this.state.todoToShow === "Remaining" ? "primary" : ""} variant="contained" onClick={this.handleTodoToShow}>Restantes</button>
                </div>

                <TodoTasks todoToShow={this.state.todoToShow} completeFunction={this.handleComplete} deleteFunction={this.handleDelete} list={this.state.todo} />
            </div>
        );
    }
}