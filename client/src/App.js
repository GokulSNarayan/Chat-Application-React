import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import './App.css';
import './tailwind.css'
// import client from 'socket.io-client';

import Topnav from './containers/Topnav';
import register from './components/register';
import login from './components/login';
import ChatRoom from './containers/ChatRoom';

class App extends Component {
  constructor(props) {

    super(props)
    this.state = {
      game: {},
      message: '',
      data: ''

    }
  }

  onMsgChangeHandler = (e) => {
    this.setState({ message: e.target.value })
  }

  clickHandler = () => {
    // this.game.emit('message', this.state.message)
  }




  componentDidMount() {
    // let newClient = client.connect('http://localhost:4000')
    // console.log("client", newClient)
    // this.setState({ game: newClient });
    // newClient.on('message', (msg) => {
    //   this.setState({ data: msg })
    // })
  }
  render() {
    return (
      <Fragment >
          <Topnav />
        <div className="flex justify-center" style={{height:"94vh", backgroundColor:"#363940",
        backgroundImage:"url(/watercolor-wallpaper-hd-1280x768-281709.jpg)",
        backgroundSize:"100% 100%", 
      }}>
          
            
            <Switch>
              <Route path={'/login'} component={login} />
              <Route path={'/register'} component={register} />
              <Route path={'/chatRoom'} component={ChatRoom} />
              <Redirect to='/login' from="/" />
            </Switch>
            
          
        </div>
      </Fragment>
    );

  }
}

export default App;
