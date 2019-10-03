import React, {Fragment} from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat  from '../components/chatMessage';
import ChatMenu from '../components/chatMenu';
import Input from '../components/inputMessage';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'dsadasddddddddddddddsagfhshvcdaaaaaahhhhhhhhhhhhhhhhhhhhhhgggg',
            messages:[{
                id:1,
                user_name:'Gokul',
                message:"Hai !!!!!"
            },
            {
                id:2,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:3,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:4,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            },{
                id:5,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:6,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:7,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            },{
                id:8,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:9,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:10,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            },{
                id:11,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:12,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:13,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            },{
                id:14,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:15,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:16,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            },{
                id:17,
                user_name:'Vineeth',
                message:"Whats up"
            },
            {
                id:18,
                user_name:'Vivek',
                message:"Busy cant talk right now"
            },
            {
                id:19,
                user_name:'Sagar',
                message:"Lets play pubg,blahhhh blahhhh blahhhh blahhhhblahhhhblahhhh "
            }],
            
        }
    }
    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
    };
    render() {
        return (
            <div className="flex mb-6 flex-wrap flex-col items-start justify-start h-screen">

                <Fragment>
            <div className="flex w-1/6 items-start h-screen shadow-md bg-gray-900">
            <ChatMenu />
             </div>
            <div className="w-5/6 block h-full px-1">
            
                <div className="block overflow-y-scroll order-first" style={{height:"85%"}} >
                {this.state.messages.map(msg => {
                    return(   
                        <Chat
                        id={msg.id}
                        key={msg.id}
                        
                        user_name={msg.user_name} 
                        message={msg.message}/>
                        )
                    })}
                    </div>
                    <div className="order-last">
                <Input />
                </div>
            </div>
                
            </Fragment>

                    </div>
        )
    }
}

export default ChatRoom;
