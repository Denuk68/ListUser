import React from 'react';
import { Fragment } from "react";
import Item from './Item/Item';
import './List.css';


const List = () => {
    return (
        <Fragment>

            <ul className="list-group pull-down" id="contact-list">
                <Item />
            </ul>

        </Fragment>
    );
};

export default List;