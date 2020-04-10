import React from 'react';
import './search-box.styles.css'
import {MDBCol} from "mdbreact";
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

export const RadioButton = ({handleOff, handleOn}) => (
    <div className="radio">
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="secondary" onClick={handleOn}>On</Button>{' '}
                <Button variant="secondary" onClick={handleOff}>Off</Button>
            </ButtonGroup>
        </ButtonToolbar>


    </div>
);



