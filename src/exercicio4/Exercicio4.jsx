import React, { Component } from 'react';

class Exercicio4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser : {
                name: "-",
                age: "-"
            }
        }
    }

    getHeaders = () => {
        return {
            'Content-Type': 'application/json'
        }
    }

    getUsers = async () => {
        const response = await fetch("http://localhost:8080/users/", {
            method: 'GET',
            headers: new Headers(this.getHeaders())
        });


    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const { currentUser } = this.state;

        return <div>
            Current user name: {currentUser.name}
            <br/>
            Current user age: {currentUser.age}
            <br/>
        </div>
    }
}

export default Exercicio4;