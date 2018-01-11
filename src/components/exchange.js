import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Card from "./common/card";
import {COLORS} from "../constants";

const Exchange = (props) => {
  const {item} = props;
  const containterStyle = [styles.exchangeItems,
    {
      borderColor: item.difference > 0 ? COLORS.EXCHANGE_BORDER_GREEN : COLORS.EXCHANGE_BORDER_RED,
      backgroundColor: item.difference > 0 ? COLORS.EXCHANGE_BACKGROUND_GREEN : COLORS.EXCHANGE_BACKGROUND_RED
    }];

  return (
    <View style={ containterStyle }>
      <Text style={ styles.header }>
        {
          item.secondStep.from
        }
      </Text>

      <Text>
        Difference: { item.difference }
      </Text>

      <Card>
        <Text style={styles.cardText}>Buy for: { item.firstStep.send }</Text>
        <Text style={styles.cardText}>Exchange: { item.firstStep.exchange }</Text>
        <Text style={styles.cardText}>Reserve: { item.firstStep.reserve }</Text>
      </Card>

      <Card>
        <Text style={styles.cardText}>Sell for: { item.secondStep.receive }</Text>
        <Text style={styles.cardText}>Exchange: { item.secondStep.exchange }</Text>
        <Text style={styles.cardText}>Reserve: { item.secondStep.reserve }</Text>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  exchangeItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    padding: 10
  },

  header: {
    fontSize: 24
  },

  cardText: {
    padding: 5,
    fontSize: 20
  }
});

export default Exchange;