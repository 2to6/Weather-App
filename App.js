import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  fruits = [
    { name: 'Acai' },
    { name: 'Apples' },
    { name: 'Apricots' },
    { name: 'Avocado' },
    { name: 'Ackee' },
    { name: 'Bananas' },
    { name: 'Bilberries' },
    { name: 'Blueberries' },
    { name: 'Blackberries' },
    { name: 'Boysenberries' },
    { name: 'Bread fruit' },
    { name: 'Cantaloupes (cantalope)' },
    { name: 'Chocolate-Fruit' },
    { name: 'Cherimoya' },
    { name: 'Cherries' },
    { name: 'Cranberries' },
    { name: 'Cucumbers' },
    { name: 'Currants' },
    { name: 'Dates' },
    { name: 'Durian' },
    { name: 'Eggplant' },
    { name: 'Elderberries' },
    { name: 'Figs' },
    { name: 'Gooseberries' },
    { name: 'Grapes' },
    { name: 'Grapefruit' },
    { name: 'Guava' },
    { name: 'Honeydew melons' },
    { name: 'Horned melon (Kiwano)' },
    { name: 'Huckleberries' },
    { name: 'Ita Palm' },
    { name: 'Jujubes' },
    { name: 'Kiwis' },
    { name: 'Durian is an unusual tropical fruit.' },
    { name: 'Kumquat' },
    { name: 'Lemons' },
    { name: 'Limes' },
    { name: 'Lychees' },
    { name: 'Mangos' },
    { name: 'Mangosteen' },
    { name: 'Mulberries' },
    { name: 'Muskmelon' },
    { name: 'Nectarines' },
    { name: 'Ogden melons' },
    { name: 'Olives' },
    { name: 'Oranges' },
    { name: 'Papaya' },
    { name: 'Passion fruit' },
    { name: 'Peaches' },
    { name: 'Pears' },
    { name: 'Peppers' },
    { name: 'Persimmon' },
    { name: 'Pineapple' },
    { name: 'Plums' },
    { name: 'Pluot' },
    { name: 'Pomegranate' },
    { name: 'Prickly Pear' },
    { name: 'Quince' },
    { name: 'Rambuton' },
    { name: 'Raspberries' },
    { name: 'Rose Apple' },
    { name: 'Starfruit' },
    { name: 'Sapadilla' },
    { name: 'Strawberries' },
    { name: 'Tamarind' },
    { name: 'Tangelo' },
    { name: 'Tangerines' },
    { name: 'Tomatoes' },
    { name: 'Ugli fruit' },
    { name: 'Voavanga (Spanish Tamarind)' },
    { name: 'Watermelons' },
    { name: 'Xigua melon' },
    { name: 'Yellow watermelon' },
    { name: 'Zucchini' },
  ];

  renderItem({ name }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.fruits.map(this.renderItem)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,   //핸드폰 상단의 상태표시줄을 건드리지 않게함
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});