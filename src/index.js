import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import List from '../src/Components/List/List';
import './index.css';



const App = () => {
    return (
        <Fragment>
            <div className="container">
                <div  id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <h1 style={{ textAlign: 'center' }}>Contact List App</h1>
                        <List />
                    </div>
                </div>
            </div>
        </Fragment>
    )

}



ReactDOM.render(<App />, document.getElementById('root'));
