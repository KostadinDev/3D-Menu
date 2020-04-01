import React from 'react';
import './search-box.styles.css'
import { MDBCol } from "mdbreact";
export const SearchBox = ({placeholder, handleChange}) => (
    <input className ='search'
           onChange= {handleChange}
           type='search'
           placeholder={placeholder}
    />
);



