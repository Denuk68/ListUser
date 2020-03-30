import React from "react";
import "./EditContact.css";
import { Redirect } from 'react-router-dom';

class EditContact extends React.Component {
    state = {
        id : this.props.currentContact.id,
        name: this.props.currentContact.name,
        address: this.props.currentContact.address,
        gender: this.props.currentContact.gender,
        telNumber: this.props.currentContact.phone,
        email: this.props.currentContact.email,
        avatar: this.props.currentContact.avatar,
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
        const { name, address, telNumber, email, avatar, gender,id } = this.state;

        this.props.onEditCurrentContact(
            name,
            address,
            telNumber,
            email,
            avatar,
            gender,
            id
        )

        this.setState({
            isRedirect:true
        });
    };

    render() {
        const {name,address,telNumber,email,avatar}=this.state;
        // console.log("props =>", this.props);
        if (this.state.isRedirect) {
            return <Redirect to='/' />
        }
        return (
             <div>
                <form onSubmit={this.onSendData}>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        onChange={this.getName}
                    />
                    <input
                        type="text"
                        value={address}
                        className="form-control"
                        onChange={this.getAddress}
                    />
                    <input
                        type="text"
                        value={telNumber}
                        className="form-control"
                        onChange={this.getTell}
                    />
                    <input
                        type="text"
                        value={email}
                        className="form-control"
                        onChange={this.getEmail}
                    />
                    <input
                        type="number"
                        min='1'
                        max='99'
                        value={avatar}
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
                        Save changes
                    </button>
                </form>   
             </div>                     
        );
    }
}

export default EditContact;