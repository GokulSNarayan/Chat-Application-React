import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, } from 'reactstrap';
import { Input } from 'react-chat-elements'

const InputMessage = (props) => {

    return (

        <div className="chatInput">

            <textarea type="text" style={{width:95+"%",backgroundColor:"lightgrey"}}></textarea>
                </div>

       
    )

}
export default InputMessage;