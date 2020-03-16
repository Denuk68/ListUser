import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component
import ContactList from './Components/ContactList/ContactList';
import AddContact from './Components/AddContact/AddContact';

class App extends React.Component {
    currentID = 1000;
    state = {
        List: [
            {
                id: 1,
                name: 'Mike Tyson',
                address: '5842 Hillcrest Rd',
                phone: '(870) 288-4149',
                email: 'tyson@gmail.com',
                avatar: 54,
                gender: 'men',
                icon: false
            },
            {
                id: 2,
                name: 'Mike Anamendolla',
                address: 'E North St',
                phone: '(097)458-21-13',
                email: 'mike.ana@gmail.com',
                avatar: 34,
                gender: 'men',
                icon: true
            },
        ]
    };

    onStarChange = id => {
        // console.log("onStarChange", id);
        this.setState(state => {
            const index = this.state.List.findIndex(elem => elem.id === id);
            // console.log('index =', index);
            const newIcon = this.state.List.slice();
            newIcon[index].icon = !newIcon[index].icon;

            return {
                icon: !this.newIcon
            };
        });
    };


    onAddContact = (name, address, telNumber, email) => {
        // console.log('NewName =  ', name);
        // console.log('NewAddress = ', address);
        // console.log('NewTelNumber = ', telNumber);
        // console.log('NewEmail = ', email);

        let newContact = {
            id: this.currentID++,
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: 24,
            gender: 'men',
            icon: false
        };
        console.log(newContact)
    }


    render() {

        return (
            <Fragment>
                <div className="container">
                    <div id="card_contacts">
                        <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                            <h1 style={{ textAlign: 'center' }}>Contact List App </h1>
                            <ContactList
                                List={this.state.List}
                                onStarChange={this.onStarChange}
                            />
                            <AddContact
                                onAddContact={this.onAddContact}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
