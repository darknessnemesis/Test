import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  gotoProfile = () => {
    const { navigation } = this.props
    navigation.navigate('Profile')
  }

  render() {
    return (
      <View>
        Home Screen
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});