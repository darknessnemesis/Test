import React, {Fragment, Component} from 'react';
import { SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  TextInput,  StatusBar,  Button, } from 'react-native';
import { Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: 'Username', text2: 'Password'};
  }
  clickLogin() {
    Alert.alert("Log in");
  }
  clickRegis() {
    Alert.alert("Register");
  }
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Text style={styles.bigBlue}>
      Login
      </Text>
      <TextInput
        style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text1) => this.setState({text1})}
        value={this.state.text1}
      />
      <TextInput
        style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text2) => this.setState({text2})}
        value={this.state.text2}
        onPress={() => this.props.navigation.navigate('ProfileScreen')}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color="#FF0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
        />
      </View>
    </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  },
  buttonContainer: {
    margin: 20,
    width: 300,
    height: 40,
  }
});