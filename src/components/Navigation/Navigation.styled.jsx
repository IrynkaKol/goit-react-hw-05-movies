import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Container = styled.div`
max-width: 960px;
padding: 0 16px;
`;


export const Header = styled.header`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 3px solid grey;

  > NavLink {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;