import React from 'react';
import { Button ,StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>1</Text>
        <Text style={[styles.text, styles.text2]}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  
    justifyContent: 'center',
  },
  text:{
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',

    textAlign:'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2:{
    flex: 2,
  }
});
