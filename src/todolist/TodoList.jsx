import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./Style.css";

export default class TodoList extends React.Component{

    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
    }

    //Função para adicionar uma tarefa
    addTodo = (todo) => {
        this.setState(state => ({
           todos: [todo, ...state.todos]
        }));
    };

    //Função para marcar/desmarcar uma tarefa
    toggleComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    //suppose to update
                    return{
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    //Função para possibilitar a filtragem
    updateTodoToShow = (x) => {
        this.setState({
            todoToShow: x
        });
    };

    //Função para apagar uma tarefa
    handleDeleteTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };

    //Função para remover tarefas completas
    removeAllTodoThatAreComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    };

    //Função para apagar todas tarefas
    handleClearTodo = () => {
        this.setState(state => " ");
    };

    render() {
        let todos = [];

        switch(this.state.todoToShow){
            case "all":
                todos = this.state.todos;
                break;
            case "active":
                todos = this.state.todos.filter(todo => !todo.complete);
                break;
            case "complete":
                todos = this.state.todos.filter(todo => todo.complete);
                break;
            default:
                console.log('default');
        }

        return (
            <div class="container">
                <div id="Esquerda">
                    <h2>Central de tarefas do Junin</h2>
                    <div>
                        <button onClick={() => this.updateTodoToShow("all")}>Todas</button>
                        <button onClick={() => this.updateTodoToShow("active")}>Ativas</button>
                        <button onClick={() => this.updateTodoToShow("complete")}>Completas</button>
                    </div>
                    <br></br>

                    {this.state.todos.some(todo => todo.complete) ? (
                        <div>
                            <button onClick={this.removeAllTodoThatAreComplete}>Remover todas tarefas completas</button>
                        </div>
                    ) : null}

                    <div>
                        <button 
                            onClick={() => 
                                this.setState((state) => ({
                                    todos: state.todos.map(todo => ({
                                        ...todo,
                                        complete: this.state.toggleAllComplete
                                    })),
                                    toggleAllComplete: !state.toggleAllComplete
                                }))
                            }
                        >
                        Inverter tarefas completas</button>
                    </div>
                    <br></br>

                    {todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            toggleComplete={() => this.toggleComplete(todo.id)} 
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo} 
                        />
                    ))}
                    <br></br>
                    
                    <div>
                        <button id="Danger" onClick={this.handleClearTodo}>Clear All</button>
                    </div>

                    <div>
                        Tarefas restantes: {this.state.todos.filter(todo => !todo.complete).length}
                    </div>
                </div>
                
                <div id="Direita">
                    <TodoForm onSubmit={this.addTodo} />
                </div>
                
            </div>
        );
    }
}