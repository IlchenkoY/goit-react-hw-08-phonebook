import styled from 'styled-components';

const PasswordButton = styled.button`
  border: none;
  position: relative;
  bottom: 53px;
  left: 190px;
  outline: none;
  border-radius: 50px;

  @media screen and (max-width: 555px) {
    left: 90px;
  }
`;

export { PasswordButton };
