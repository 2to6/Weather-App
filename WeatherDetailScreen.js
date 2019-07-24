import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Constants } from 'expo';

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
                <View style={styles.container}>
                    <Text>데이터를 불러오는 중입니다.</Text>
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
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/01d.png')} />
                        </View>
                    );
            case "01n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/01n.png')} />
                        </View>
                    );
            case "02d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/02d.png')} />
                        </View>
                    );
            case "02n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/02n.png')} />
                        </View>
                    );
            case "03d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/03d.png')} />
                        </View>
                    );
            case "03n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/03n.png')} />
                        </View>
                    );
            case "04d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/04d.png')} />
                        </View>
                    );
            case "04n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/04n.png')} />
                        </View>
                    );
            case "09d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/09d.png')} />
                        </View>
                    );
            case "09n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/09n.png')} />
                        </View>
                    );
            case "10d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/10d.png')} />
                        </View>
                    );
            case "10n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/10n.png')} />
                        </View>
                    );
            case "11d":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/11d.png')} />
                        </View>
                    );
            case "11n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/11n.png')} />
                        </View>
                    );
            case "50d": 
            return (
                <View style={styles.container}>
                    <Text>온도: {celsius.toFixed(1)}</Text>
                    <Text>습도: {humidity.toFixed(1)}%</Text>
                    <Text>날씨: {description}</Text>
                    <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                        source={require('./weather-icon/50d.png')} />
                </View>
            );
            case "50n":
                    return (
                        <View style={styles.container}>
                            <Text>온도: {celsius.toFixed(1)}</Text>
                            <Text>습도: {humidity.toFixed(1)}%</Text>
                            <Text>날씨: {description}</Text>
                            <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }}
                                source={require('./weather-icon/50d.png')} />
                        </View>
                    );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
});