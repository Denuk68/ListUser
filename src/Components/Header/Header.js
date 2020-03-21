import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'



const Header = () => {
    return (
        <Fragment>
            <nav className='navMain'>
                <ul>
                    <li>
                        <Link to='/'><span>Home</span></Link>
                    </li>
                    <li>
                        <Link to='/contact'><span>AddContact</span></Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}




export default Header;