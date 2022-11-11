import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  font-size: 40;
  color: #e5b32e;
  background-color: ${p => {
    return p.theme.colors.grey;
  }};
`;
