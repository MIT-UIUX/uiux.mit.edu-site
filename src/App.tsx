import React from 'react';
import styled from 'styled-components';
import { Homepage } from './homepage/_homepage';

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
  }
`;

export const App = (props: {}) => {
  return (
    <AppContainer>
      <Homepage/>
    </AppContainer>
  );
}