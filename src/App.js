import React, {Component} from 'react';
import {Provider as PaperProvider ,Button} from 'react-native-paper';
import * as firebase from 'firebase';
import {ImageBackground ,View} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn : null };

  componentWillMount() {
    firebase.initializeApp(
      {
        //Your firebase API key HERE
      }
    );

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn : true });
        }
        else {
          this.setState({ loggedIn : false });
        }
    });
  }//end of componentWillMount

  renderContent() {
    switch (this.state.loggedIn) {
      case true :
          return (
            <Button style = {styles.ButtonStyle} onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
      );
      case false :
        return <LoginForm/>;
      default : return <LoginForm/>;
    }//end of switch
  }//end of renderContent

  // onButtonPress() {
  //   this.setState({ loggedIn : false});
  // }//end of onButtonPress

  render() {
    return (
      // <ImageBackground source={require('./img/cycle.jpg')}
      //   style={styles.bgContainer}>
      <View style={styles.bS}>
        <PaperProvider>
          <Header headerText = "User Auth"/>
          {this.renderContent()}
        </PaperProvider>
      </View>
      // </ImageBackground>
    );
  }//end of render

}//end of class

const styles = {
    ButtonStyle : {
      flex : 1,
      alignSelf : 'stretch',
      borderWidth: 1.5,
      borderColor : '#6200EE',
      marginTop : 20,
      justifyContent : 'center',
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 570
    },
    bS : {
      backgroundColor : "#F5F4FF",
      width : '100%',
      height : '100%'
    }//,
    // bgContainer : {
    //   flex : 1,
    //   alignItems : 'center',
    //   justifyContent : 'center'
    // },
    // inner : {
    //   width : '100%',
    //   height : '100%'
    // }
}//end of styles

export default App;
