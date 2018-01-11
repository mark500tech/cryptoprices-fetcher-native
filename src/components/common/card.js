import React from 'react';
import {View, StyleSheet} from 'react-native';

import {COLORS} from "../../constants";

const Card = (props) => (
    <View style={styles.exchangeItems}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
  exchangeItems: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.CARD_BORDER,
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: 5,
    padding: 20,
    marginTop: 10
  }
});

export default Card;