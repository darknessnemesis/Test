import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View>
        Profile Screen
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