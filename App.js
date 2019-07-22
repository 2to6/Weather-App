import React from 'react';
import { Button ,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  clickHandler = () => console.log('Clicked!');

  render(){
    return (
      <View style={styles.container}>
        <Button title={'click me!'} onPress={this.clickHandler}/>
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
});
