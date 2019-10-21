import React, {useState} from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from './contacts';
import Topnav from '../components/Topnav';


const RightMenu = (props) => {
    const [users,setUsers] = useState(props.users);

    return (
        
        <div className="px-2" style={{backgroundColor:"#2F3136"}}>
            <div className="px-2">
            <div>
            <div style={{color:"#8E9297"}}>ONLINE</div>
                {users.map(user => {
                    return(
                        <Contacts
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        />
                    )
                })}
            </div>
            </div>
        </div>
       
    )
}
export default RightMenu;