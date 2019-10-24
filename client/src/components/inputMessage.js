import React from 'react';
// import {  } from 'reactstrap';
import sendicon from '../sent.svg';
import addSvg from '../images/icons8-plus.svg'
import addSvg2 from '../images/plus.svg'
const InputMessage = (props) => {

                // <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                //     <path d="M26 0C11.7 0 0 11.7 0 26s11.7 26 26 26 26-11.7 26-26S40.3 0 26 0zM26 50C12.8 50 2 39.2 2 26S12.8 2 26 2s24 10.8 24 24S39.2 50 26 50z" /><path d="M38.5 25H27V14c0-0.6-0.4-1-1-1s-1 0.4-1 1v11H13.5c-0.6 0-1 0.4-1 1s0.4 1 1 1H25v12c0 0.6 0.4 1 1 1s1-0.4 1-1V27h11.5c0.6 0 1-0.4 1-1S39.1 25 38.5 25z" />
                // </svg>
    return (
        <div className="flex w-full" style={{ height: "50px" }}>
            <button className="px-2 rounded-lg rounded-r-none" style={{ backgroundColor: "#40444B", marginRight: "3px", outline: "none" }}>
            <svg style={{backgroundColor:"#B9BBBE",borderRadius:"50%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path d="M12 2C6.5 2 2 6.5 2 12 2 17.5 6.5 22 12 22 17.5 22 22 17.5 22 12 22 6.5 17.5 2 12 2zM12 4C16.4 4 20 7.6 20 12 20 16.4 16.4 20 12 20 7.6 20 4 16.4 4 12 4 7.6 7.6 4 12 4zM11 7L11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11 13 7 11 7z"/></svg>
            </button>
            <textarea onKeyPress={props.keyPress} className="p-3 rounded-lg rounded-l-none text-white" id="style-2" style={{ width: "85%", backgroundColor: "#40444B", outline: "none" }} type="text"
                onChange={props.changed} value={props.value}  ></textarea>
            
        </div>
    )

}
export default InputMessage;