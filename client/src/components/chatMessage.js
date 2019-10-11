import React from 'react';
import { Card, CardBody,CardTitle, CardText, } from 'reactstrap';

const Chat = (props) => {

    return (
        <div key={props.id} className="flex flex-col ">
        <Card className="shadow-sm border-b-2 border-gray-500 bg-gray-800 ">
            <CardBody>

        <CardTitle className="text-red-700 px-2 pt-1 object-left-top w-40">{props.user_name}</CardTitle>
        <CardText className="text-white font-thin px-2 pb-1">{props.message}</CardText>
            </CardBody>
        </Card>
        </div>
    )

}
export default Chat;