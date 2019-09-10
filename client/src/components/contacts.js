import React from 'react';
import { Card,CardTitle,} from 'reactstrap';
import 'status-indicator/styles.css'



const Contacts = (props) => {

//    let status =(props.id % 2 == 0) ? "positive" : "negative"
    return (
        <div key= {props.id} className="contacts">
            
                <Card >
            <CardTitle>{props.name}
            <div className="status"><status-indicator positive></status-indicator></div>
            </CardTitle>
            
                </Card>
            
        </div>
    )

}
export default Contacts;