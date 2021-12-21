import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robot";
import SearchBox from "./SearchBox";
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {});

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render() {
        const filteredRobots = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
    </div>
            );
        }
    }
};

export default App;