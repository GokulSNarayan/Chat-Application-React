import React from 'react';
import { Card,CardTitle,CardImg} from 'reactstrap';
import 'status-indicator/styles.css'
import img1 from '../images/img_avatar.png';


const Contacts = (props) => {

//    let status =(props.id % 2 == 0) ? "positive" : "negative"
    return (
        <div key= {props.id} className="py-1" >
            
                <Card className="flex flex-row flex-wrap items-center text-white " >
            <div className="relative mr-2 ">
            <div className="absolute right-0 bottom-0  z-10 "><status-indicator positive></status-indicator></div>
            <div><CardImg className="rounded-full mx-auto w-8 h-8 " src={img1} alt=""></CardImg></div>
                </div>
                
            <CardTitle className="px-2">{props.name}
            </CardTitle>
            
                </Card>
            
        </div>
    )

}
export default Contacts;