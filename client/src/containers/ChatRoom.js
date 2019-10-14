import React, { Fragment } from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat from '../components/chatMessage';
import ChatMenu from '../components/chatMenu';
import Input from '../components/inputMessage';
import { SOCKET_URL, API_URL } from '../constants/defaultValues';
import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}
var socket = require('socket.io-client')(SOCKET_URL);

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            user_name:"",
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
            },
            {
                id: 3,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 4,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 5,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 6,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 7,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 8,
                user_name: 'Vineeth',
                message: "Whats up"
            },
            {
                id: 9,
                user_name: 'Vineeth',
                message: "Whats up"
            },],

        }
    }


    componentDidMount() {
        var user_name;
        axios.post(`${API_URL}/users/getUserDetails`,{}, {headers} )
            .then(res => {
                if(res.data.status==1){

                    console.log("Result=======>>>", res)
                    user_name =  res.data.result.user_name
                    this.setState({user_name:user_name})
                    socket.emit('new user',user_name)
                }
                else{
                    alert("No data")
                }
            })
            
                
                    
                
               
        socket.on('new message', (data) => {
            this.updateHandler(data)
            console.log("dataaaaa",data)
        })

        socket.on('get users', (data) => {
            this.setState({users:data})
            console.log("users===>>",data)
        })

    }



    componentWillUnmount() {
        socket.on('disconnect', function () { });
    }


    updateHandler = (data) => {

        let newMessages = [...this.state.messages]
        newMessages.push(data)
        this.setState({ messages: newMessages })
    }

    submitMessage = () => {
        socket.emit("send message", this.state.message)
        this.setState({message:""})
    }

    onMessageTypeHandler = (event) => {
        this.setState({ message: event.target.value })

    }
    render() {

        // console.log("messagges",this.state.messages)
        return (
            <div className="flex flex-wrap flex-row items-start justify-start " style={{ height:"700px", backgroundColor:"#363940"}} >

                <Fragment>
                    <div className="flex w-1/6 items-start h-full shadow-md border-r-2 " style={{ height:"727px",borderColor:"#40444B",backgroundColor:"#2F3136"}} >
                        <ChatMenu 
                        users={this.state.users} />
                    </div>
                    <div className="w-5/6 flex flex-col px-1 " style={{ minHeight: "50%",backgroundColor:"#363940"}}>

                        <div className="overflow-y-auto order-first" style={{ height:"622px", marginTop: "17" }} >
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
                        <div className="flex items-stretch py-2 pt-2 px-4 order-last align-center pt-2">
                            <Input
                                submit={this.submitMessage}
                                changed={this.onMessageTypeHandler}
                                value={this.state.message} />
                        </div>
                    </div>

                </Fragment>

            </div>
        )
    }
}

export default ChatRoom;
