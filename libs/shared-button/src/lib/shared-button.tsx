import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedButtonProps {}

const StyledSharedButton = styled.div`
  color: pink;
`;

export function SharedButton(props: SharedButtonProps) {
  return (
    <StyledSharedButton>
      <h1>Welcome to SharedButton!</h1>
    </StyledSharedButton>
  );
}

export default SharedButton;
