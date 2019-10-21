import React from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Channels from './channels';
import Topnav from '../components/Topnav';

const LeftMenu = (props) => {

    return (
        <div className="flex flex-col w-full" style={{backgroundColor:"#2F3136"}}>
            <Topnav heading="CHANNELS" />
        <div className="px-2" style={{backgroundColor:"#2F3136"}} >
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
        </div>
    )
}
export default LeftMenu;