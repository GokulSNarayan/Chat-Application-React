import React from 'react';
import { Card, CardBody,CardTitle, CardText, } from 'reactstrap';

const Chat = (props) => {

    return (
        <div key={props.id} className="flex flex-col ">
        <Card className="bg-white shadow-md border-b-2 bg-gray-900 ">
            <CardBody>

        <CardTitle className="text-teal-200 px-2 py-1 object-left-top w-40">{props.user_name}</CardTitle>
        <CardText className="text-white font-thin">{props.message}</CardText>
            </CardBody>
        </Card>
        </div>
    )

}
export default Chat;