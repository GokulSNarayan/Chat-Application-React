import React from 'react';
import { Card, CardBody,CardTitle, CardText, } from 'reactstrap';

const Chat = (props) => {

    return (
        <div key={props.id} className={props.class}>
        <Card className="">
            <CardBody>

        <CardTitle className="">{props.user_name}</CardTitle>
        <CardText>{props.message}</CardText>
            </CardBody>
        </Card>
        </div>
    )

}
export default Chat;