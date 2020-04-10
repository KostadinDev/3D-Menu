import React from 'react';
import './card-list.styles.css'
import {Item} from "../card/item.component";
import Card from 'react-bootstrap/Card';


export const ItemList = props => {


    return (

        <div className={`${props.style} ds`}>
            {
                console.log(props.listStyle)
            }
            {
                props.items.map(item => (
                    <Item item={item} key={item.id} onClick={() => alert('hello')}/>
                ))
            }

        </div>
    )
};
