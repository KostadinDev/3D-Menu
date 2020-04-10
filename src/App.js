import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {ItemList} from './components/card-list/item-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'
import LocoMoco from "./images/item-images/loco-moco.jpg";
import KaluaPig from "./images/item-images/kalua-pig.png";
import LauLau from "./images/item-images/laulau.png";
import Poke from "./images/item-images/poke.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {RadioButton} from './components/search-box/on-off-button.component';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
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
            persons: [],
            listStyle: '2',
            name: "",
            salary: "",
            age: ""
        };
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value, title: e.target.value})
    };

    handleOn = () => {
        alert("The fan is on")
    };

    handleOff = () => {
        alert("The fan is off")
    };

    componentDidMount() {

        if (isMobile) {
            this.setState((state) => {
                return {listStyle: 'card-list-mobile'}
            });
        } else {
            this.setState((state) => {
                return {listStyle: 'card-list-desktop'}
            });
        }

    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value});
    };

    submit() {
        console.log(this.state)
        let url = "https://cloud-sg.dseelab.com";
        let token = "/aquarius/rest/v1/token";
        let task = "/manage-platform/rest/v2/task";
        let CONTENTTYPEJSON = "application/json";
        let CONTENTTYPEFORM = "application/x-www-form-urlencoded";
        let data = this.state;
        fetch(url + token, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "username": "csedviz@hawaii.edu",
            "password": "bambam50$"

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
            })
        })


    };

    render() {
        const {searchField, items} = this.state;
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1> Campus Center Dining </h1>
                <SearchBox onSearchChange={this.onSearchChange} handleChange={this.handleChange}
                           placeholder='search items'/>
                <RadioButton handleOn = {this.handleOn} handleOff = {this.handleOff}/>
                <ItemList items={filteredItems} style={this.state.listStyle}/>
                {/*<input type="text" value={this.state.name} name="name" onChange={(data) => {*/}
                {/*    this.setState({name: data.target.value})*/}
                {/*}}/>*/}
                {/*<input type="text" value={this.state.salary} name="salary" onChange={(data) => {*/}
                {/*    this.setState({salary: data.target.value})*/}
                {/*}}/>*/}
                {/*<input type="text" value={this.state.age} name="age" onChange={(data) => {*/}
                {/*    this.setState({age: data.target.value})*/}
                {/*}}/>*/}
                {/*<button onClick={() => {*/}
                {/*    this.submit()*/}
                {/*}}>*/}
                {/*    Submit*/}
                {/*</button>*/}

            </div>
        );
    }
}

export default App;
