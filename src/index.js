import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

//Component
import ContactList from './Components/ContactList/ContactList';
import AddContact from './Components/AddContact/AddContact';

class App extends React.Component {
    state = {
        List: [
            {
                id: uuid(),
                name: 'Mike Tyson',
                address: '5842 Hillcrest Rd',
                phone: '(870) 288-4149',
                email: 'tyson@gmail.com',
                avatar: 54,
                gender: 'men',
                icon: false
            },
            {
                id: uuid(),
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

    onDeleteContact = id => {
        const index = this.state.List.findIndex(elem => elem.id === id);

        const partOne = this.state.List.slice(0, index);
        const partTwo = this.state.List.slice(index + 1);
        const newList = [...partOne, ...partTwo];
        this.setState(state => {
            return {
                List: newList
            }
        })
    };


    onAddContact = (name, address, telNumber, email, avatar) => {

        let newContact = {
            id: uuid(),
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: avatar,
            gender: 'women',
            icon: false
        };
        // console.log('onAddContact ', newContact)

        const newList = [...this.state.List, newContact];
        //   console.log('newList',newList);
        this.setState(state => {
            return {
                List: newList
            }
        })
    }


    render() {

        return (
            <Fragment>
                <div className="container">
                    <div id="card_contacts">
                        <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                            <Router>
                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        render={() => (
                                            <ContactList
                                                List={this.state.List}
                                                onStarChange={this.onStarChange}
                                                onDeleteContact={this.onDeleteContact}
                                            />
                                        )}
                                    />
                                    <Route
                                        path="/contact"
                                        exact
                                        render={() => <AddContact onAddContact={this.onAddContact} />}
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
