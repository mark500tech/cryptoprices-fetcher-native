import React from 'react';
import styled from 'styled-components/native';

import {COLORS} from "../../constants";

const Card = (props) => (
    <Container>
        {props.children}
    </Container>
);

const Container = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.CARD_BORDER};
  background-color: ${COLORS.CARD_BACKGROUND};
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
`;

export default Card;