import React from 'react';
import ReactAntAsyncButton from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  return (
    <Container>
      <ReactAntAsyncButton
        minGap={2000}
        callback={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
            }, 100);
          });
        }}>
        Download
      </ReactAntAsyncButton>
    </Container>
  );
};
