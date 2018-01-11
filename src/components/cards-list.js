import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import Exchange from "./exchange";
import moment from 'moment';

export default class CardsList extends React.Component {
  renderCards = () => {
    return this.props.exchangeItems.map((item, index) => (
      <Exchange key={ index } item={ item }/>
    ))
  };


  render() {
    const lastUpdate = new moment();
    return (
      <View>
        <View style={styles.textContainer}>
          <Text>
            Last update: { lastUpdate.format('H:mm:ss') }
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={ false }
          style={ styles.exchangeItems }>{ this.renderCards() }</ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  exchangeItems: {
    width: '100%',
  }
});