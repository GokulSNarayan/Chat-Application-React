import React,{Fragment} from 'react';
import { Card, CardBody, CardTitle, CardText,CardImg } from 'reactstrap';
import img1 from '../images/img_avatar.png';

import moment from 'moment';
const Chat = (props) => {

    return (
        <Fragment key={props.id}>
            <div className="flex flex-col " >
            <Card className="shadow-sm border-b-2 flex items-center px-6 " style={{borderColor:"#40444B",padding:"16px 10px", }}>
               
                    <CardImg className="rounded-full object-left-top w-10 h-10 " src={img1} alt=""></CardImg>
                
                <CardBody>
                    <CardTitle className="text-white px-2 pt-2 object-left-top w-40 text-md font-light">{props.user_name}
                    <span style={{color:"#5D6067"}} className="px-2 text-sm font-light">3:26 pm</span></CardTitle>
                    <CardText style={{color:"#919396"}} className="font-thin px-2 pb-2 pl-4">{props.message}</CardText>
                </CardBody>
            </Card>
            </div>
        </Fragment>
    )

}
export default Chat;