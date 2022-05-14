import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bbbcb6;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
`;

const Label = styled.label`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0 30px 0;
`;

const Button = styled.button`
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

export { Form, Input, Label, Button };
