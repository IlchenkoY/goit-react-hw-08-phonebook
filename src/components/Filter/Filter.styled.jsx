import styled from 'styled-components';

const Label = styled.label`
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

const Input = styled.input`
  width: 100%;
  margin: 10px 0 30px 0;
`;

export { Label, Input };
