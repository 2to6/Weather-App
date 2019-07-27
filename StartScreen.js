import React from 'react';
import {  StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class StartScreen extends React.Component{

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const {navigation} = this.props;
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => {
                    navigation.navigate("CityList")
                }}>
                    <Text style={styles.Text}>main page</Text>
                </TouchableOpacity>

           
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

    text: {
        fontSize: 20,
        textAlign: 'center',
    }, 
    item: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'orange',
    },
});