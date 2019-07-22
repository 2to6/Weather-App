import React from 'react';
import { Button ,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  state = {
    counter: 0,
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
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
