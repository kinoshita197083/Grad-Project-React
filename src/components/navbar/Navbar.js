import { Callbacks } from 'jquery';
import React, { Component, useState, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    state = { clicked: false }
    states = { sticky: false }


    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    // makeSticky = () => {
    //     if (window.scrollY > 400) {
    //         this.setState({
    //             sticky: true
    //         })

    //     } else {
    //         this.setState({
    //             sticky: false
    //         })

    //     }
    // }

    render() {

        // window.addEventListener('scroll', this.makeSticky);

        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'> MankeyPox <i class="fa-solid fa-square-virus"></i></h1>
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

