import React, { Component, Fragment } from 'react';
import './ContactItem.css';
import { Link } from 'react-router-dom';


class ContactItem extends Component {
    state = {
        name: this.props.name,
        address: this.props.address,
        phone: this.props.phone,
        email: this.props.email,
        avatar: this.props.avatar,
        gender: this.props.gender,
        icon: this.props.icon

    };

    onRandomAvatar = () => {
        const avatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: avatar
        });
    }



    render() {
        const { name, address, phone, email, avatar, gender} = this.state;
        const URL = `https:api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        // console.log('Contact id props =>', this.props.id);

        if (this.props.icon) {
            var favoriteStyle = "fas fa-star fa-2x";
        } else {
             favoriteStyle = "far fa-star fa-2x";
        }

        return (
            <Fragment>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={URL} alt="portret"
                                className="rounded-circle mx-auto d-block img-fluid" />
                        </div>

                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">

                            <span
                                className="fa fa-trash text-danger fa-2x float-right "
                                title="Delete"
                                onClick={this.props.onDeleteContact}>
                            </span>

                            <Link
                                to="/edit"
                                className="fa fa-edit fa-2x text-success float-right pulse"
                                title="Edit"
                                onClick={this.props.onEditContact}
                            ></Link>

                            <label className="name lead">{name}</label>

                            <br />

                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip"
                                title=""
                                data-original-title={address}>
                            </span>
                            <span className="text-muted">
                                {address}
                            </span>

                            <br />

                            <span className="fa fa-phone fa-fw text-muted"
                                data-toggle="tooltip"
                                title=""
                                data-original-title={phone}>
                            </span>
                            <span className="text-muted small">
                                {phone}
                            </span>

                            <br />

                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip"
                                data-original-title={email}
                                title="">
                            </span>
                            <span className="text-muted small text-truncate">
                                {email}
                            </span>
                        </div>
                    </div>

                    <div className='panel'>
                        <button className='btn  btn-success' onClick={this.onRandomAvatar}>Random avatar</button>
                        <i className={favoriteStyle}
                            onClick={this.props.onStarChange}
                            style={{ color: 'darkorange', cursor: 'pointer' }}>
                        </i>
                    </div>
                </li>

            </Fragment>
        )
    }




};

export default ContactItem;