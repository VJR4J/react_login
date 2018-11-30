import React, {Component} from 'react';
import { CardSection } from './common';
import * as firebase from 'firebase';
import {Card ,TextInput ,Button ,Text} from 'react-native-paper';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

class LoginForm extends Component {
  state = {email : '',password : '',error : ''};

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error : ''});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
  }//end of onButtonPress

  onLoginSuccess() {
    this.setState(
      {
        error : '',
        email : '',
        password : ''
      });
  }

  onLoginFail() {
    this.setState(
      {
        error : 'Authentication Failed.',
      });
  }

  render()
  {
    return(
        <Card style = {styles.cardContainer}>
          <CardSection>
            <TextInput
             mode = "outlined"
             style = {styles.TextInputStyle}
             label='Email'
             placeholder="user@yourmail.com"
             value={this.state.email}
             onChangeText={email => this.setState({ email })}
             />
          </CardSection>
          <CardSection>
            <TextInput
             mode = "outlined"
             secureTextEntry={true}
             style = {styles.TextInputStyle}
             label='Password'
             placeholder="enter your password"
             value={this.state.password}
             onChangeText={password => this.setState({ password })}
             />
          </CardSection>
          <Text style={styles.errorText}>{ this.state.error }</Text>
          <CardSection>
            <Button mode="outlined" style = {styles.ButtonStyle} onPress={this.onButtonPress.bind(this)}>
              Log in
            </Button>
          </CardSection>
        </Card>
    );
  }//end of render
}//end of class

const styles = {
    TextInputStyle : {
      alginSelf : 'stretch',
      flex : 1,
      marginLeft : 10,
      marginRight : 10,
      marginTop : 10
    },
    ButtonStyle : {
      flex : 1,
      alignSelf : 'stretch',
      borderWidth: 1.5,
      borderColor : '#6200EE',
      marginLeft : 10,
      marginRight : 10,
      marginBottom : 20
    },
    cardContainer : {
      marginTop : 100,
      marginLeft : 20,
      marginRight : 20
    },
    errorText : {
      alignSelf : 'center',
      fontSize : 20,
      color : 'red'
    }
}
export default LoginForm;
