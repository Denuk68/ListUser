import React from 'react';
import { Fragment } from "react";
import Item from '../Item/Item';
import './List.css';


const List = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="card card-default" id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            <Item/>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default List;