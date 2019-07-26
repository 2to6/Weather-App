import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

export default class WeatherDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const cityName = navigation.getParam('city', 'Unknown');
        return {
            title: `Weather Info: ` + cityName,
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const city = navigation.getParam('city', null);

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b59b2f6b4c62b33a007db6708713d1e6`)
            .then(response => response.json())
            .then(info => {
                this.setState({
                    ...info,
                    isLoading: false,
                });
            });
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.top}>
                    <Text>Loading...</Text>
                </View>
            )
        }

        let celsius = this.state.main.temp - 273.15;
        let humidity = this.state.main.humidity;
        let description = this.state.weather[0].description;
        let icon = this.state.weather[0].icon;

        switch (icon) {
            case "01d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/01d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "01n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/01n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}>: {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "02d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/02d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "02n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/02n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "03d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/03d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "03n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/03n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "04d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/04d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "04n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/04n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "09d":
                return (<LinearGradient
                    colors={['#8360c3', '#2ebf91']}
                    style={styles.bg}>
                    <View style={styles.top}>
                        <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                            source={require('./weather-icon/09d.png')} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.main}> {description}</Text>
                        <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                    </View>
                </LinearGradient>
                );
            case "09n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/09n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "10d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/10d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "10n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/10n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "11d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/11d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>

                );
            case "11n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/11n.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "50d":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/50d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
            case "50n":
                return (
                    <LinearGradient
                        colors={['#8360c3', '#2ebf91']}
                        style={styles.bg}>
                        <View style={styles.top}>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/50d.png')} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.main}> {description}</Text>
                            <Text style={styles.temp}> {celsius.toFixed(1)}℃</Text>
                        </View>
                    </LinearGradient>
                );
        }
    }
}

const styles = StyleSheet.create({
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
    bg: {
        flex: 1,
        width,
    },
    main: {
        fontSize: 40,
        marginBottom: 10,
        fontWeight: '600',
        color: 'white',
    },
    temp: {
        fontSize: 30,
        color: 'white',
    },
    container:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});