import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Topnav extends Component {
    render() {
        return (
            <Nav className="navbar-inverse" >

                <div className="nav navbar-nav">
                    <NavItem>
                        <NavLink to='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/register'>Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/chatRoom'>Chat Room</NavLink>
                    </NavItem>

                </div>
            </Nav>
        )
    }
}

export default Topnav;