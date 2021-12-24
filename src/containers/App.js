import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robot";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
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
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(r => {
            return r.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <ErrorBoundary>
      <CardList robots={filteredRobots} />
      </ErrorBoundary>
      </Scroll>
    </div>
            );
        }
    }
}

export default App;