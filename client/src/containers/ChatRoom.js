import React, { Fragment } from 'react';
// import { Chat } from '@progress/kendo-react-conversational-ui';
import Chat from '../components/chatMessage';
import RightMenu from '../components/RightMenu';
import LeftMenu from '../components/LeftMenu';
import Input from '../components/inputMessage';
import MainNav from '../components/MainNav';
import { connect } from 'react-redux';
import swal from 'sweetalert';




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
            messages: [],

        }
    }

    
    componentDidMount() {
        if (Object.keys(this.props.socket).length === 0) {
            // console.log("From componentDidMount")
            swal("Socket Connection Lost!", "Please Login Again", "error", {
                buttons: false,
                timer: 2000
            });
            
        } else {
            // console.log("From componentDidMount else",this.props)
            try {
                this.props.socket.on('new message', (data) => {
                    this.updateHandler(data)
                    this.scrollToBottom();
                })

                this.props.socket.on('get users', (data) => {

                    this.setState({ users: data })
                    // console.log("users===>>", data)
                })
            }
            catch (e) {
                console.log("error", e)
            }
        }
        this.scrollToBottom();
    }






    componentWillUnmount() {
        try {
            if(Object.keys(this.props.socket).length !== 0){
                this.props.socket.on('disconnect', function () { });
            }
        }
        catch (e) {
            console.log("Error At componentWillUnmount", e)
        }
    }



    updateHandler = (data) => {

        let newMessages = [...this.state.messages]
        newMessages.push({ ...data, id: newMessages.length + 1 })
        // console.log("New message===>>",newMessages)
        this.setState({ messages: newMessages })
    }

    submitMessage = () => {
        if (Object.keys(this.props.socket).length !== 0) {
            try {
                this.props.socket.emit("send message", this.state.message)
                // console.log("Socket id", this.props.socket)
                this.setState({ message: "" })
            }
            catch (e) {
                console.log("error", e)
            }
        } else {
            swal("Socket Connection Lost!", "Please Login Again", "error", {
                buttons: false,
                timer: 2000
            });
        }
    }

    onKeyPressHandler = (event) => {
        // console.log("Message",this.state.message)
        if (event.key === 'Enter' && this.state.message.trim() !== '') {
            event.preventDefault();
            this.submitMessage();
        }

    }

    onMessageTypeHandler = (event) => {
        this.setState({ message: event.target.value })

    }


    scrollToBottom = () => {
        try{
            // console.log("Length==>>",this.state.messages.length, this.el)
        if(this.state.messages.length !== 0 && Object.keys(this.props.socket).length !== 0){

            this.el.scrollIntoView({ behavior: 'auto' });
        }
        }
        catch(err){
            console.log(err)
        }
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
                                    {this.state.messages.length !==0 ? this.state.messages.map(msg => {
                                        return (
                                            <div key={msg.id} ref={el => { this.el = el; }}>
                                                <Chat
                                                    id={msg.id}
                                                    key={msg.id}
                                                    user_name={msg.user_name}
                                                    message={msg.message}
                                                    date = {msg.date}
                                                />
                                            </div>
                                        )
                                    }) : <div>
                                        <h1 className="text-6xl text-center text-white">Type Something !!!</h1>
                                    </div>}
                                </div>
                                <div className="flex items-stretch py-2 pt-4 px-4 order-3 align-center pt-2 border-t" style={{ borderColor: "#40444B" }}>
                                    <Input
                                        keyPress={this.onKeyPressHandler}
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