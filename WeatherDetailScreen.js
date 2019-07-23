import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

 export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Weather Information',
  };

   render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});