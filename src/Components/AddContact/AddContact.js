import React from "react";
import "./AddContact.css";
import { Redirect } from 'react-router-dom';

class AddContact extends React.Component {
    state = {
        name: null,
        address: null,
        gender: null,
        telNumber: null,
        email: null,
        avatar: null,
        isRedirect: false
    };



    getName = event => {
        this.setState({
            name: event.target.value
        });
    };

    getAddress = event => {
        this.setState({
            address: event.target.value
        });
    };

    getTell = event => {
        this.setState({
            telNumber: event.target.value
        });
    };

    getEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    getAvatar = event => {
        this.setState({
            avatar: event.target.value
        });
    };

    getGender = event => {
        this.setState({
            gender: event.target.value
        });
    };



    onSendData = event => {
        event.preventDefault();
        const { name, address, telNumber, email, avatar, gender } = this.state;

        this.props.onAddContact(
            name,
            address,
            telNumber,
            email,
            avatar,
            gender
        )

        this.setState({
            isRedirect:true
        });
    };

    render() {
        if (this.state.isRedirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <form onSubmit={this.onSendData}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        onChange={this.getName}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="form-control"
                        onChange={this.getAddress}
                    />
                    <input
                        type="text"
                        placeholder="TelNumber"
                        className="form-control"
                        onChange={this.getTell}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        onChange={this.getEmail}
                    />
                    <input
                        type="number"
                        min='1'
                        max='99'
                        placeholder="Avatar"
                        className="form-control"
                        onChange={this.getAvatar}
                    />

                    <div className='radio'>
                        <input
                            type="radio"
                            name="gender"
                            // className="form-check-input"
                            value="men"
                            id="gender_men"
                            onChange={this.getGender}
                        />
                        <label htmlFor="gender_man" className="form-check-label">
                            Men
                        </label>
                        <input
                            type="radio"
                            name="gender"
                            // className="form-check-input"
                            value="women"
                            id="gender_women"
                            onChange={this.getGender}
                        />
                        <label htmlFor="gender_women" className="form-check-label">
                            Women
                        </label>
                    </div>

                    <button className="btn btn-success" type="submit">
                        Add new contact
                    </button>
                </form>

            </div>
        );
    }
}

export default AddContact;