import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Topnav = (props) => {

    return (
        <div className="flex  w-full items-center py-2 px-2 justify-start  shadow-lg border-b font-medium" style={{ borderColor: "#2B2D31", color: "#8E9297", zIndex: "1" }}>
            <div className="px-2 block">
                <h3>{props.heading}</h3>
            </div>
        </div>
    )
}


export default Topnav;