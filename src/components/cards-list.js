import React from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import Exchange from "./exchange";

export default class CardsList extends React.Component {
  renderCards = () => {
    return this.props.exchangeItems.map((item, index) => (
      <Exchange key={ index } item={ item }/>
    ))
  };


  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ styles.container }>{ this.renderCards() }</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
});