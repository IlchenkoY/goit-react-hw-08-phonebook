import styled from 'styled-components';

const ShowPasswordButton = styled.button`
  border: none;
  position: relative;
  bottom: 53px;
  left: 190px;
  outline: none;
  border-radius: 50px;
  background-color: inherit;

  @media screen and (max-width: 555px) {
    left: 90px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 10px 15px;
  margin-top: 10px;
  margin-left: auto;
  background-color: #2f4f4f;
  color: white;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-2px);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export { ShowPasswordButton };
