import React, { Fragment } from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat from '../components/chatMessage';
import ChatMenu from '../components/chatMenu';
import Input from '../components/inputMessage';
import { SOCKET_URL } from '../constants/defaultValues';

var socket = require('socket.io-client')(SOCKET_URL);

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: [{
                id: 1,
                user_name: 'Gokul',
                message: "Hai !!!!!"
            },
            {
                id: 2,
                user_name: 'Vineeth',
                message: "Whats up"
            },],

        }
    }

    
    componentDidMount(){
        socket.on('connect', (socket) => {
            console.log("socket====>>>",socket)
            
        });
        
        socket.on('new message', (data) => {this.updateHandler(data)
            console.log("dataaaaa")})

    }
    
    
    
    componentWillUnmount(){
        socket.on('disconnect', function(){});
    }

    
    updateHandler = (data) => {
        
        let newMessages =[...this.state.messages]
        newMessages.push(data)
        this.setState({messages:newMessages})
    }

    submitMessage = () => {
        socket.emit("send message",this.state.message)
    }

    onMessageTypeHandler = (event) => {
        this.setState({message:event.target.value})
  
    }
    render() {
        
                // console.log("messagges",this.state.messages)
        return (
            <div className="flex  flex-wrap flex-col items-start justify-start bg-gray-800" >

                <Fragment>
                    <div className="flex w-1/6 items-start h-full shadow-md border-r-2 border-gray h-screen">
                        <ChatMenu />
                    </div>
                    <div className="w-5/6 flex flex-col px-1 mt-4" style={{ minHeight: "96vh" }}>

                        <div className="overflow-y-scroll order-first" style={{ height: "83%", marginTop: "17" }} >
                            {this.state.messages.map(msg => {
                                return (
                                    <Chat
                                        id={msg.id}
                                        key={msg.id}
                                        user_name={msg.user_name}
                                        message={msg.message} />
                                )
                            })}
                        </div>
                        <div className="flex items-stretch py-1 px-6 order-last align-center">
                            <Input 
                            submit={this.submitMessage}
                            changed={this.onMessageTypeHandler} />
                        </div>
                    </div>

                </Fragment>

            </div>
        )
    }
}

export default ChatRoom;
