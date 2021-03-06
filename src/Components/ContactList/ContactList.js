import React from 'react';
import { Fragment } from "react";
import './ContactList.css';

//Component
import ContactItem from './ContactItem/ConatctItem';


const ContactList = ({ 
    List ,
     onStarChange,
     onDeleteContact ,
     onEditContact}
     ) => {
    // console.log('ContactList =>', List);

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
            onStarChange={() => onStarChange(item.id)}
            onDeleteContact={() => onDeleteContact(item.id)}
            onEditContact={() => onEditContact(item.id)}
        />
    })


    return (

        <Fragment>

            <ul className="list-group pull-down" id="contact-list">
                {item.lenght !== 0 ? item : <h2>Test</h2>}
            </ul>

        </Fragment>
    );
};

export default ContactList;