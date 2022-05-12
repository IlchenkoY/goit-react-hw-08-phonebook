import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #545f6c;
  font-size: 18px;
`;

const NavItem = styled.li`
  & .active {
    color: #fff;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: inline-flex;
  margin: 0 20px;
  padding: 0;
`;

export { Link, NavItem, NavList };
