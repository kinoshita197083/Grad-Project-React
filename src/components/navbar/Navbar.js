import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
// import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    // state = { clicked }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'> MankeyPox <i class="fa-solid fa-dna"></i></h1>
                <div className='menu-icon'>

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);

//     return (
//         <>
//             <nav className='navbar'>
//                 <div className='navBar-container1'>
//                     <Link to='/' className='home-redirect'>
//                         TRVL <i className='fab fa-typo3' />
//                     </Link>
//                     <div className='menu-icon'>
//                         <i className={click ? 'fas fa-time' : 'fas fa-bars'} />
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

export default Navbar;

