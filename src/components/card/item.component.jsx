import React from 'react';
import './card.styles.css'


export const Item = (props) => (
    <div className='card-container'>
        <h2>
            {props.item.name}
        </h2>
        <p>
            <img alt="props.item.alt" src={props.item.image} style={{width: '160px', height: '160px'}} />
            {props.item.description}
        </p>
    </div>
);
