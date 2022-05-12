import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 10px 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: auto;
  background-color: #2f4f4f;
  color: white;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-2px);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const H1 = styled.h1`
  margin-right: 10px;
  display: inline;
`;

export { H1, Button };
