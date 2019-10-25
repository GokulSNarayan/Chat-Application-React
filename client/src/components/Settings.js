import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions';


const Settings = (props) => {


const {user,socket} = props
    return (
        <>

            <div className="absolute z-10" style={{ top: "34px" }}>
                {props.dropdownOpen ? <ul className="object-left-bottom rounded-lg hover:rounded-lg py-1 flex flex-col justify-start" style={{ backgroundColor: "#363940", color: "#8E9297" }}>
                    <li className="block px-2 py-1 hover:bg-blue-400 hover:text-black">Another</li>
                    <li className="block px-2 py-1 hover:bg-blue-400 hover:text-black">Another</li>
                    <li onMouseDown={() => props.logoutUser({history:props.history,user_name:user.user_name,id:socket.id})} 
                    className="block px-2 py-1 hover:bg-blue-400 hover:text-black">Logout</li>
                </ul> : null}
            </div>

        </>
    )
}


const mapStateToProps = ({ authUser }) => {
    const { user, socket } = authUser;
    return { user, socket };
};

export default connect(
    mapStateToProps,
    {
        logoutUser
    }
)(Settings);






