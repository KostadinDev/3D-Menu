import React from 'react';
import './card-list.styles.css'
import {Item} from "../card/item.component";
import LocoMoco from '../../images/item-images/loco-moco.jpg';
import KaluaPig from '../../images/item-images/kalua-pig.png';
import LauLau from '../../images/item-images/laulau.png';
import Poke from '../../images/item-images/poke.png';

export const ItemList = props => {

    return (
        <div className='card-list'>

            {<Item item={{name: "Loco Moco", Description: "", image: LocoMoco, alt: "Loco Moco"}} key={0}/>}
            {<Item item={{name: "Kalua Pig", Description: "", image: KaluaPig, alt: "Kalua Pig"}} key={1}/>}
            {<Item item={{name: "Lau Lau", Description: "", image: LauLau, alt: "Laulau"}} key={2}/>}
            {<Item item={{name: "Poke", Description: "", image: Poke, alt: "Poke"}} key={3}/>}

        </div>
    )
};
