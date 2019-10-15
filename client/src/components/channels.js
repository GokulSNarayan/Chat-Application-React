import React from 'react';
import { Card,CardTitle,CardImg} from 'reactstrap';
import img1 from '../images/img_avatar.png';


const Channels = (props) => {

//    let status =(props.id % 2 == 0) ? "positive" : "negative"
    return (
        <div key= {props.id} className="py-1" >
            
                <Card className="flex flex-row flex-wrap items-center" >
            <div className="relative">
            
              <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path fill="#B9BBBE" d="M64.3 490h58.4l33.9-137.7h122.3L245.4 490h58.4l33.9-137.7h119.9v-48.2h-108.2l29.2-117.3h79v-48.2H390.2L424.1 0H365.3l-33.9 138.7H208.8L242.7 0h-58.4l-33.9 138.7H32.4v48.2h106.3l-28.8 117.3h-77.5v48.2h65.8L64.3 490zM197.1 186.8h122.6l-29.2 117.3H168.3L197.1 186.8z"/></svg>
            <div>
            </div>
                </div>
                
            <CardTitle className="px-2" style={{color:"#8E9297"}}>{props.name}
            </CardTitle>
            
                </Card>
            
        </div>
    )

}
export default Channels;