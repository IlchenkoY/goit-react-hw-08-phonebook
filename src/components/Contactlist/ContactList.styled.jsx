import styled from 'styled-components';

const List = styled.ul`
  background-color: #bbbcb6;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-end;
`;

export { List, ListItem };
