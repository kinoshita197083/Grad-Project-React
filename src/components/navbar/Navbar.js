import { Callbacks } from 'jquery';
import React, { Component, useState, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';
import './Navbar.css';


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
                    <Link className='nav-links' to='/'>
                        MankeyPox <i class="fa-solid fa-square-virus"></i>
                    </Link>
                </h1>


                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
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

