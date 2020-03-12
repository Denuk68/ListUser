import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component
import ContactList from './Components/ContactList/ContactList';


class App extends React.Component {
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
            {
                id: 3,
                name: 'John Stay',
                address: '5267 Cackson St',
                phone: '(097)788-21-15',
                email: 'john@gmail.com',
                avatar: 24,
                gender: 'men',
                icon: false
            },
            {
                id: 4,
                name: 'Luis Vam',
                address: 'Harm , Chornovola str.',
                phone: '(097)884-55-15',
                email: 'luis@gmail.com',
                avatar: 14,
                gender: 'men',
                icon: true
            },
            {
                id: 5,
                name: 'Michael Jordan',
                address: 'Harm , S.Petlury str.',
                phone: '(097)832-21-43',
                email: 'michael@gmail.com',
                avatar: 64,
                gender: 'men',
                icon: false
            }
        ]
    };

    onStarChange = id => {
        console.log("onStarChange", id);
    };

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
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
