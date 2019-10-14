import React from 'react';
// import {  } from 'reactstrap';
import sendicon from '../sent.svg';

const InputMessage = (props) => {

    return (
        <div className="flex w-full">
            <textarea className="pl-4 rounded-lg" style={{ width: "85%", backgroundColor:"#40444B" , }} type="text"
            onChange={props.changed} value={props.value} ></textarea>
            <button className="px-2" onClick={props.submit}>
                <img height="30px" width="30px" src={sendicon}></img>
            </button>
        </div>
    )

}
export default InputMessage;