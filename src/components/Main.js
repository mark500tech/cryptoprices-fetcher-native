import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {fetchExchangeItems} from "../actions/exchangeItemsAction";
import CardsList from "./cards-list";

class Main extends React.Component {
  componentWillMount() {
    this.fetchInterval = setInterval(this.props.fetchExchangeItems, 5000);
    // this.props.fetchExchangeItems();
  }

  render() {
    const { exchangeItems } = this.props;
    return (
      <View style={styles.exchangeItems}>
        {
          exchangeItems && <CardsList exchangeItems={ exchangeItems }/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exchangeItems: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  }
});

const mapStateToProps = ({exchangeItems}) => ({
  exchangeItems: exchangeItems.items,
  loading: exchangeItems.loading
});

export default connect(mapStateToProps, {
  fetchExchangeItems
})(Main);
