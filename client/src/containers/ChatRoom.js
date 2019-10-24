import React, { Fragment } from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat from '../components/chatMessage';
import RightMenu from '../components/RightMenu';
import LeftMenu from '../components/LeftMenu';
import Input from '../components/inputMessage';
import MainNav from '../components/MainNav';
import { connect } from 'react-redux';
import { SOCKET_URL, API_URL } from '../constants/defaultValues';
import axios from 'axios';
import _ from 'lodash';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}
// var socket = require('socket.io-client')(SOCKET_URL);

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            channels: [{
                id: 1,
                channel_name: "Dev Support"
            },
            {
                id: 2,
                channel_name: "Android"
            }],
            user_name: "",
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
            }
           ],

        }
    }


    componentDidMount() {
        // this.getUserData();
        this.props.socket.on('new message', (data) => {
            this.updateHandler(data)
            this.scrollToBottom();
            console.log("dataaaaa", data)
        })

        this.props.socket.on('get users', (data) => {
            
           this.setState({ users: data })
           console.log("users===>>", data)
       })


        // this.scrollToBottom();

    }

    getUserData = () => {
        var user_name;
        axios.post(`${API_URL}/users/getUserDetails`, {}, { headers })
            .then(res => {
                if (res.data.status === 1) {

                    // console.log("Result=======>>>", res)
                    user_name = res.data.result.user_name
                    this.setState({ user_name: user_name })
                    this.props.socket.emit('new user', user_name)
                }
                else {
                    alert("No data")
                }
            })
    }

    componentWillUnmount() {
        this.props.socket.on('disconnect', function () { });
    }


    updateHandler = (data) => {

        let newMessages = [...this.state.messages]
        newMessages.push({...data,id:newMessages.length +1})
        console.log("New message===>>",newMessages)
        this.setState({ messages: newMessages })
    }

    submitMessage = () => {
        this.props.socket.emit("send message", this.state.message)
        console.log("Socket id",this.props.socket)
        this.setState({ message: "" })
    }

    onMessageTypeHandler = (event) => {
        this.setState({ message: event.target.value })

    }


    scrollToBottom = () => {
        this.el.scrollIntoView({ behavior: 'auto' });
    }
    render() {

        // console.log("props",this.props)
        const { user } = this.props
        return (
            <Fragment>
                <div className="flex flex-wrap flex-row items-start justify-start " style={{ height: "100vh", backgroundColor: "#363940", display: "contents" }} >
                    <div className="flex w-1/6 items-start h-full shadow-md border-r-2 " style={{ borderColor: "#40444B", backgroundColor: "#2F3136" }} >
                        <LeftMenu
                            channels={this.state.channels} />
                    </div>
                    <div className="w-5/6 flex flex-col flex-wrap" style={{ minHeight: "50%", backgroundColor: "#363940", }}>
                        <div className="flex w-full" style={{ backgroundColor: "#363940" }}>
                            <MainNav
                                heading="general"
                                user_name={user.user_name}
                                history={this.props.history} />
                        </div>
                        <div className="flex justify-end" style={{ height: "94vh" }}>
                            <div className="w-4/5 flex flex-col">
                                <div className="overflow-y-auto order-2 pl-4 pr-1" id="style-1" style={{ height: "81vh", marginTop: "17" }}>
                                    {this.state.messages.map(msg => {
                                        return (
                                            <div key={msg.id} ref={el => { this.el = el; }}>
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
                                <div className="flex items-stretch py-2 pt-4 px-4 order-3 align-center pt-2 border-t" style={{ borderColor: "#40444B" }}>
                                    <Input
                                        submit={this.submitMessage}
                                        changed={this.onMessageTypeHandler}
                                        value={this.state.message} />
                                </div>
                            </div>
                            <div className="flex w-1/5 items-start h-full shadow-md border-r-2 " style={{ borderColor: "#40444B", backgroundColor: "#2F3136" }} >

                                <RightMenu
                                    users={this.state.users} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ authUser }) => {
    const { user, socket } = authUser;
    return { user, socket };
};


export default connect(
    mapStateToProps,
    {
        
    }
)(ChatRoom);