import React from 'react';
import { Fragment } from "react";
import ContactItem from './ContactItem/ConatctItem';
import './ContactList.css';


const ContactList = ({ List }) => {
    console.log('ContactList =>', List);

    const item = List.map(item => {
        return <ContactItem
            key={item.id}
            name={item.name}
            address={item.address}
            phone={item.phone}
            email={item.email}
            avatar={item.avatar}
            gender={item.gender}
            icon={item.icon}
        />
    })


    return (

        <Fragment>

            <ul className="list-group pull-down" id="contact-list">
                {item}
            </ul>

        </Fragment>
    );
};

export default ContactList;