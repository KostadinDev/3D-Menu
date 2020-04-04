import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {ItemList} from './components/card-list/item-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField} = this.state;
    return (
        <div className="App">
          <h1> Campus Center Dining </h1>
          <SearchBox handleChange={this.handleChange} placeholder='search items'/>
          <ItemList />


        </div>
    );
  }
}

export default App;
