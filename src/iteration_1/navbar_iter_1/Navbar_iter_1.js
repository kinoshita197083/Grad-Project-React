import React, { Component } from 'react'
import { MenuItems } from './MenuItems_iter_1'
import { Link } from 'react-router-dom';

import './Navbar_iter_1.css';


class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {

        return (
            <nav className='NavbarItems'>

                <h1 className='navbar-logo' >
                    <Link className='nav-links logo' to='/'>
                        CharmingApes <i class="fa-solid fa-square-virus"></i>
                    </Link>
                </h1>


                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={this.handleClick} >
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar;

