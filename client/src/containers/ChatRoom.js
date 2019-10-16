import React, { Fragment } from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat from '../components/chatMessage';
import RightMenu from '../components/RightMenu';
import LeftMenu from '../components/LeftMenu';
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
            channels:[{
                id:1,
                channel_name:"Dev Support"
            },
            {
                id:2,
                channel_name:"Android"
            }],
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
            this.scrollToBottom();
            console.log("dataaaaa",data)
        })

        socket.on('get users', (data) => {
            this.setState({users:data})
            console.log("users===>>",data)
        })

        this.scrollToBottom();

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


    scrollToBottom = () => {
        this.el.scrollIntoView({ behavior: 'auto' });
      }
    render() {

        // console.log("messagges",this.state.messages)
        return (
            <div className="flex flex-wrap flex-row items-start justify-start " style={{ height:"700px", backgroundColor:"#363940", display:"contents"}} >

                <Fragment>
                    <div className="flex w-1/6 items-start h-full shadow-md border-r-2 " style={{ height:"726px",borderColor:"#40444B",backgroundColor:"#2F3136"}} >
                        <LeftMenu 
                        channels={this.state.channels} />
                    </div>
                    <div className="w-4/6 flex flex-col pl-4 pr-1 " style={{ minHeight: "50%",backgroundColor:"#363940",height:"726px"}}>

                        <div className="overflow-y-auto order-first" id="style-1" style={{ height:"622px", marginTop: "17" }}>
                            {this.state.messages.map(msg => {
                                return (
                                    <div ref={el => { this.el = el;}}>
                                    <Chat
                                        id={msg.id}
                                        key={msg.id}
                                        user_name={msg.user_name}
                                        message={msg.message}
                                         />
                                         </div>
                                )
                            })}
                        </div>
                        <div className="flex items-stretch py-2 pt-4 px-4 order-last align-center pt-2 border-t" style={{borderColor:"#40444B"}}>
                            <Input
                                submit={this.submitMessage}
                                changed={this.onMessageTypeHandler}
                                value={this.state.message} />
                        </div>
                    </div>
                    <div className="flex w-1/6 items-start h-full shadow-md border-r-2 " style={{ height:"726px",borderColor:"#40444B",backgroundColor:"#2F3136"}} >
                        
                        <RightMenu 
                        users={this.state.users} />
                    </div>

                </Fragment>

            </div>
        )
    }
}

export default ChatRoom;
