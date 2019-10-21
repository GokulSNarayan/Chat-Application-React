import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const ChannelHead = (props) => {
    
        return (
            <div className="flex  w-full items-center py-2 px-2 justify-start  shadow-lg border-b font-medium" style={{borderColor: "#2B2D31",color:"#8E9297",zIndex:"1" }}>


                        <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path fill="#B9BBBE" d="M64.3 490h58.4l33.9-137.7h122.3L245.4 490h58.4l33.9-137.7h119.9v-48.2h-108.2l29.2-117.3h79v-48.2H390.2L424.1 0H365.3l-33.9 138.7H208.8L242.7 0h-58.4l-33.9 138.7H32.4v48.2h106.3l-28.8 117.3h-77.5v48.2h65.8L64.3 490zM197.1 186.8h122.6l-29.2 117.3H168.3L197.1 186.8z" /></svg>
                <div className="px-2 block">
                     

                        
                            <h3>{props.heading}</h3>
                    </div>
                   

                
            </div>
                    )
                }
            
            
export default ChannelHead;