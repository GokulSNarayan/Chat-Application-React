import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import './App.css';
import './tailwind.css'
import 'react-redux-toastr/src/styles/index.scss'
// import client from 'socket.io-client';
import register from './components/register';
import login from './components/login';
import ChatRoom from './containers/ChatRoom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'



const AuthRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )}
  />
);

class App extends Component {
  constructor(props) {

    super(props)
    this.state = {
      game: {},
      message: '',
      data: '',
      token: ""

    }
  }

  onMsgChangeHandler = (e) => {
    this.setState({ message: e.target.value })
  }

  clickHandler = () => {
    // this.game.emit('message', this.state.message)
  }




  componentDidMount() {
    const token = localStorage.getItem('token')
    this.setState({ token: token })
    // let newClient = client.connect('http://localhost:4000')
    // console.log("client", newClient)
    // this.setState({ game: newClient });
    // newClient.on('message', (msg) => {
    //   this.setState({ data: msg })
    // })
  }
  render() {
    const { token } = this.props
    return (
      <Fragment >

        <div className="flex justify-center" style={{
          height: "100vh", backgroundColor: "#363940",
          backgroundImage: "url(/watercolor-wallpaper-hd-1280x768-281709.jpg)",
          backgroundSize: "100% 100%",
        }}>

          <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            position="top-center"
            />
          {/* {this.state.token == "" ?} */}
          {/* <AuthRoute path={"/chatRoom"} authUser={this.state.token} component={ChatRoom} /> */}
          <Router>
            <Switch>
              <AuthRoute path="/chatRoom" authUser={token} component={ChatRoom} />
              <Route path={'/login'} component={login} />
              <Route path={'/register'} component={register} />
              <Redirect exact from="/" to='/chatRoom' />
            </Switch>
          </Router>


          {/* <Route path={"/chatRoom"} component={} /> */}

        </div>
      </Fragment>
    );

  }
}

const mapStateToProps = ({ authUser }) => {
  const { user, loading, token } = authUser;
  return { user, loading, token };
};


export default connect(
  mapStateToProps,
  {

  }
)(App);
