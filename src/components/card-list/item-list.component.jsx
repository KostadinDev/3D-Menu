import React from 'react';
import './card-list.styles.css'
import {Item} from "../card/item.component";


export const ItemList = props => {


    return (
        <div className='card-list'>
            {
                props.items.map(item => (
                    <Item item={item} key={item.id} onClick={() => alert('hello')}/>
                ))
            }

        </div>
    )
};
