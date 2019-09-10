import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText,NavItem,Nav } from 'reactstrap';
import 'status-indicator/styles.css'



const Contacts = (props) => {

    return (
        <div className="contacts">
            
                <Card>
            <CardTitle>{props.name}
            <div className="status"><status-indicator positive></status-indicator></div>
            </CardTitle>
            
                </Card>
            
        </div>
    )

}
export default Contacts;