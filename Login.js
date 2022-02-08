import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state={
    username:"",
    password:""
  }
}

login = () => {
      //validation for Login
     if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.props.navigation.navigate('Home', {username: this.state.username });
     }else{
         alert("Please try with valid username and password")
     }
}
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ChartApp</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="username..." 
            placeholderTextColor="#003f5c"
            autoCapitalize='none'
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        
        <TouchableOpacity onPress={() => this.login()}style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});