import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
    state = {
        name: null,
        address: null,
        gender: "men",
        telNumber: null,
        email: null
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

  

    onSubmit = event => {
        event.preventDefault();
        this.props.onAddContact(
            this.state.name , 
            this.state.address,
            this.state.telNumber,
            this.state.email,
            );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
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
                        type="radio"
                        name="gender"
                        className="form-check-input"
                        value="men"
                        id="gender_man"
                    />                   
                    

                    <label htmlFor="gender_man" className="form-check-label">
                        Men
                    </label>
                    <button className="btn btn-success" type="submit">
                        Add new contact
                    </button>
                </form>
            </div>
        );
    }
}

export default AddContact;