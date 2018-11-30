import React, { Component } from 'react';
import firebase from '../initializers/firebase';

//Redux
import { connect } from 'react-redux';
import { saveToken } from '../initializers/actions';
import { clearToken } from '../initializers/actions';

//Components
import AuthElements from '../components/AuthElements';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

    this.state = {
      userLoggedIn: false,
      photoUrl: ''
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ userLoggedIn: true, photoUrl: user.providerData[0].photoURL }) : this.setState({ userLoggedIn: false })
    });
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

    firebase.auth().signInWithPopup(provider).then(result => {
      let token = result.credential.accessToken;
      this.props.saveToken(token);
    }).catch(err => {
      console.log(err);
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.props.clearToken();
    });
  }

  render() {
    return(
      <AuthElements
        login={this.login}
        logout={this.logout}
        userLoggedIn={this.state.userLoggedIn}
        token={this.props.token}
        photoUrl={this.state.photoUrl}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = {
  saveToken,
  clearToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);