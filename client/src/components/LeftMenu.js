import React from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Channels from './channels';

const LeftMenu = (props) => {

    return (
        <div className="px-2 hover:border-gray-500" style={{backgroundColor:"#2F3136"}} >
            <h4 className="p-2" style={{color:"#8E9297"}}>CHANNELS</h4>
            <Nav className="px-2">
            <NavItem>
                {props.channels.map(channel => {
                    return(
                        <Channels
                        key={channel.id}
                        id={channel.id}
                        name={channel.channel_name}
                        />
                    )
                })}
            </NavItem>
            </Nav>
        </div>
    )
}
export default LeftMenu;