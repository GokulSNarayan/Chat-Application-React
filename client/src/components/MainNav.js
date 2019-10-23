import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Settings from './Settings';


const MainNav = (props) => {

        const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

        // console.log("Props at mainnav",props)

        return (
                <>
                        <nav className="flex justify-between w-full items-center py-2 px-2 shadow-lg border-b font-medium text-white" style={{ borderColor: "#2B2D31", zIndex: "1" }}>
                                <div className="flex justify-start items-center">
                                        <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path fill="#B9BBBE" d="M64.3 490h58.4l33.9-137.7h122.3L245.4 490h58.4l33.9-137.7h119.9v-48.2h-108.2l29.2-117.3h79v-48.2H390.2L424.1 0H365.3l-33.9 138.7H208.8L242.7 0h-58.4l-33.9 138.7H32.4v48.2h106.3l-28.8 117.3h-77.5v48.2h65.8L64.3 490zM197.1 186.8h122.6l-29.2 117.3H168.3L197.1 186.8z" /></svg>
                                        <div className="px-2 block">
                                                <h3>{props.heading}</h3>
                                        </div>
                                </div>
                                <div className="flex justify-end items-center">
                                        <div className="px-2 block">
                                                <h3>{props.user_name}</h3>
                                        </div>
                                        <button className="focus:outline-none" onClick={toggle} onBlur={() => setDropdownOpen(false)}  >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path fill="#B9BBBE" d="M47.2 21.2l-5.9-1c-0.3-1.2-0.8-2.3-1.4-3.4l3.5-4.9c0.3-0.4 0.2-0.9-0.1-1.3l-3.9-3.9c-0.3-0.3-0.9-0.4-1.3-0.1l-4.8 3.5c-1.1-0.6-2.2-1.1-3.4-1.4l-1-5.9C28.6 2.4 28.2 2 27.7 2h-5.5c-0.5 0-0.9 0.4-1 0.8l-1 5.9c-1.2 0.3-2.4 0.8-3.4 1.4l-4.8-3.4c-0.4-0.3-0.9-0.2-1.3 0.1L6.8 10.6c-0.3 0.3-0.4 0.9-0.1 1.3l3.4 4.9c-0.6 1.1-1.1 2.3-1.4 3.5l-5.8 1c-0.5 0.1-0.8 0.5-0.8 1v5.5c0 0.5 0.3 0.9 0.8 1l5.8 1c0.3 1.2 0.8 2.4 1.4 3.5l-3.4 4.8c-0.3 0.4-0.2 0.9 0.1 1.3l3.9 3.9c0.3 0.3 0.9 0.4 1.3 0.1l4.9-3.4c1.1 0.6 2.2 1.1 3.4 1.4l1 5.9C21.3 47.6 21.7 48 22.2 48h5.5c0.5 0 0.9-0.3 1-0.8l1-5.9c1.2-0.4 2.3-0.8 3.4-1.4l4.9 3.4c0.4 0.3 0.9 0.2 1.3-0.1l3.9-3.9c0.3-0.3 0.4-0.9 0.1-1.3l-3.5-4.9c0.6-1.1 1.1-2.2 1.4-3.4l5.9-1c0.5-0.1 0.8-0.5 0.8-1v-5.5C48 21.7 47.6 21.3 47.2 21.2zM25 32c-3.9 0-7-3.1-7-7 0-3.9 3.1-7 7-7s7 3.1 7 7C32 28.9 28.9 32 25 32z" /></svg>
                                        </button>
                                        <Settings
                                        dropdownOpen={dropdownOpen}
                                        history={props.history}
                                         />
                                </div>
                        </nav>
                </>
        )
}









export default MainNav;