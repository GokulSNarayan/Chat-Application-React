import React from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from './contacts';



const RightMenu = (props) => {
    

    return (
        
        <div className="px-2" style={{backgroundColor:"#2F3136"}}>
            <div className="px-2">
            <div>
            <div className="py-2" style={{color:"#8E9297"}}>ONLINE</div>
                {props.users ? (props.users.map(user => {
                    return(
                        <Contacts
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        />
                    )
                })) : null}
            </div>
            </div>
        </div>
       
    )
}
export default RightMenu;