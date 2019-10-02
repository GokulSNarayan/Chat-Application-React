import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Topnav extends Component {
    render() {
        return (
            <Nav className="flex items-center py-2 px-2 justify-start bg-teal-500 text-black font-medium" >

                
                    <NavItem className="px-2 block border-b-2 border-transparent hover:border-black ">
                        <NavLink  className="pb-2" to='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem className="px-2 block border-b-2 border-transparent hover:border-black  ">
                        <NavLink className="pb-2" to='/register'>Register</NavLink>
                    </NavItem>
                    <NavItem className="px-2 block border-b-2 border-transparent hover:border-black  ">
                        <NavLink className="pb-2" to='/chatRoom'>Chat Room</NavLink>
                    </NavItem>

                
            </Nav>
        )
    }
}

export default Topnav;