import React from 'react';
// import {  } from 'reactstrap';
import sendicon from '../sent.svg';

const InputMessage = (props) => {

    return (
        <div className="flex w-full">
            <textarea className="border-2 border-black pl-4 pt-2" style={{ width: "85%" }} type="text"
            onChange={props.changed} ></textarea>
            <button className="px-2" onClick={props.submit}>
                <img height="30px" width="30px" src={sendicon}></img>
            </button>
        </div>
    )

}
export default InputMessage;