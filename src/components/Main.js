import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import Card from "./common/card";
import {fetchDataPending} from "../actions/dataAction";

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Container>
        <Card>
          <TextWrapper>
            Hello!
          </TextWrapper>
        </Card>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const TextWrapper = styled.Text`
  font-size: 20px;
`;

const mapStateToProps = ({data}) => ({
  data: data.exchangeItems
});

export default connect(mapStateToProps, {
  fetchData: fetchDataPending
})(Main);
