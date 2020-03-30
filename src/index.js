import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

//Component
import ContactList from './Components/ContactList/ContactList';
import AddContact from './Components/AddContact/AddContact';
import Header from './Components/Header/Header';
import EditContact from './Components/EditContact/EditContact';
import NotFound from './Components/NotFound/NotFound';

class App extends React.Component {
    URL = "https://contactlist-7e684.firebaseio.com/List.json";

    componentDidMount() {
        this.updateContactList();

    }

    updateContactList = () => {
        fetch(this.URL).then(response => {
            return response.json();
        }).then(list => {
            this.setState({
                List: list
            })
        }).catch(err => console.log(err));
    }

    state = {
        List: [],
        currentContact: "",
        findContact: ""
    };

    onStarChange = id => {
        this.setState(state => {
            const index = this.state.List.findIndex(elem => elem.id === id);
            const newIcon = this.state.List.slice();
            newIcon[index].icon = !newIcon[index].icon;

            return {
                icon: !this.newIcon
            };
        });
    };

    onAddContact = (name, address, telNumber, email, avatar, gender) => {
        let newContact = {
            id: uuid(),
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: avatar,
            gender: gender,
            icon: false
        };

        const newList = [...this.state.List, newContact];
        this.onSaveData(newList)
        this.setState(state => {
            return {
                List: newList
            };
        });
    };

    onDeleteContact = id => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        const partOne = this.state.List.slice(0, index);
        const partTwo = this.state.List.slice(index + 1);
        const newList = [...partOne, ...partTwo];
        this.onSaveData(newList);
        this.setState(state => {
            return {
                List: newList
            }
        })
    };

    onEditContact = id => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        const currentContact = this.state.List[index];     
        this.setState({
            currentContact: currentContact
        });
    };  

    onEditCurrentContact = (name, address, telNumber, email, avatar, gender, id) => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        let editedContact = {
            id: id,
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: avatar,
            gender: gender,
            icon: false
        };
        const partOne = this.state.List.slice(0, index);
        const partTwo = this.state.List.slice(index + 1);
        const newList = [...partOne, editedContact, ...partTwo];
        this.onSaveData(newList);
        this.setState({
            List: newList
        })
    };

    async onSaveData(newList) {
        await fetch(this.URL, {
            method: 'PUT',
            headers: {
                'Component-Type': 'application/json'
            },
            body: JSON.stringify(newList)
        })
            .then(response => {
                console.log('Response=> ', response)
            })
            .catch(err => console.log('Catch => ', err.Message));
        this.updateContactList();
    };


    onSearch = contactName => {
        this.setState({
            findContact: contactName
        });
    };

    onShowContactList = (List, findContact) => {
        if (findContact.lenght === 0) {
            return List;
        }
        return List.filter(item => {
            return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
        })
    }





    render() {
        const showContacts = this.onShowContactList(
            this.state.List,
            this.state.findContact
        )

        return (
            <Fragment>

                <div className="container">
                    <div id="card_contacts">
                        <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                            <Router>
                                <Header onSearch={this.onSearch} />

                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        render={() => (
                                            <ContactList
                                                List={showContacts}
                                                onStarChange={this.onStarChange}
                                                onDeleteContact={this.onDeleteContact}
                                                onEditContact={this.onEditContact}
                                            />
                                        )}
                                    />
                                    <Route
                                        path="/contact"
                                        exact
                                        render={() => <AddContact
                                            onAddContact={this.onAddContact} />
                                        }
                                    />
                                    <Route
                                        path='/edit'
                                        exact
                                        render={() =>
                                            <EditContact
                                                currentContact={this.state.currentContact}

                                                onEditCurrentContact={this.onEditCurrentContact}
                                            />
                                        }
                                    />
                                    <Route
                                        path="*"
                                        exact
                                        render={() =>
                                            <NotFound
                                            />
                                        }
                                    />
                                </Switch>
                            </Router>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
