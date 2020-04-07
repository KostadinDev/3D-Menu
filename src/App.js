import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {ItemList} from './components/card-list/item-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'
import LocoMoco from "./images/item-images/loco-moco.jpg";
import KaluaPig from "./images/item-images/kalua-pig.png";
import LauLau from "./images/item-images/laulau.png";
import Poke from "./images/item-images/poke.png";

import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            items: [{name: "Loco Moco", Description: "", image: LocoMoco, alt: "Loco Moco", id: 0},
                {name: "Kalua Pig", Description: "", image: KaluaPig, alt: "Kalua Pig", id: 1},
                {name: "Lau Lau", Description: "", image: LauLau, alt: "Laulau", id: 2},
                {name: "Poke", Description: "", image: Poke, alt: "Poke", id: 3},
                {name: "Loco Moco", Description: "", image: LocoMoco, alt: "Loco Moco", id: 4},
                {name: "Kalua Pig", Description: "", image: KaluaPig, alt: "Kalua Pig", id: 5},
                {name: "Lau Lau", Description: "", image: LauLau, alt: "Laulau", id: 6},
                {name: "Poke", Description: "", image: Poke, alt: "Poke", id: 7},
                {name: "Loco Moco", Description: "", image: LocoMoco, alt: "Loco Moco", id: 8},
                {name: "Kalua Pig", Description: "", image: KaluaPig, alt: "Kalua Pig", id: 9},
                {name: "Lau Lau", Description: "", image: LauLau, alt: "Laulau", id: 10},
                {name: "Poke", Description: "", image: Poke, alt: "Poke", id: 11},
                {name: "Loco Moco", Description: "", image: LocoMoco, alt: "Loco Moco", id: 12},
                {name: "Kalua Pig", Description: "", image: KaluaPig, alt: "Kalua Pig", id: 13},
                {name: "Lau Lau", Description: "", image: LauLau, alt: "Laulau", id: 14},
                {name: "Poke", Description: "", image: Poke, alt: "Poke", id: 15}],
            persons: []
        };
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value, title: e.target.value})
    };

    componentDidMount() {

        const authentication = {"username":"csedviz@hawaii.edu","password":"bambam50$"};
        axios.post(`https://cloud-sg.dseelab.com/aquarius/rest/v1/token`, {authentication})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const {searchField, items} = this.state;
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1> Campus Center Dining </h1>
                <SearchBox onSearchChange={this.onSearchChange} handleChange={this.handleChange}
                           placeholder='search items'/>
                <ItemList items={filteredItems}/>
                {this.state.persons[0]}
            </div>
        );
    }
}

export default App;
