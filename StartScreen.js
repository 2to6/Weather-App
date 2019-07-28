import React from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class StartScreen extends React.Component{

    static navigationOptions = {
        title: 'OpenWeather',
    };

    render() {
    
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain'}}
                                source={require('./weather-logo/logo.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={{backgroundColor: 'coral'}}
                                onPress={() => {
                                navigation.navigate("CityList")
                                }}>
                                <Text style={styles.text}>Show CityList</Text>
                            </TouchableOpacity>
                        </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#696969'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    }, 
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});