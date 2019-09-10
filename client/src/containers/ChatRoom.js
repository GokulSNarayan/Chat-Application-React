import React, {Fragment} from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import { Row } from 'reactstrap';
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
            <div className="chatPage">

                <Fragment>
            <div className="chatMenu">
            <ChatMenu />
             </div>
            <div className="chatContainer">
                <div className="chatInfo">
                {this.state.messages.map(msg => {
                    return(   
                        <Chat
                        id={msg.id}
                        class={"chat" + " user"}
                        user_name={msg.user_name} 
                        message={msg.message}/>
                        )
                    })}
                    </div>
                <Input />
            </div>
                
            </Fragment>

                    </div>
        )
    }
}

export default ChatRoom;

{/* <Chat user={this.state.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    placeholder={"Type a message..."}
                    width={400}>
                </Chat> */}