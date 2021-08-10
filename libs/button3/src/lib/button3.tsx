import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Button3Props {}

const StyledButton3 = styled.div`
  color: pink;
`;

export function Button3(props: Button3Props) {
  return (
    <StyledButton3>
      <h1>Welcome to Button3!</h1>
    </StyledButton3>
  );
}

export default Button3;
