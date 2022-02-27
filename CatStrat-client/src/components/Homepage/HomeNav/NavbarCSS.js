import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  visibility: hidden;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  color: black;
  background-color: #fff;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  font-size: 20px;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  font-family: "Redressed";
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-left: -104px;
  text-decoration: none;
  cursor: pointer;
  color: #74c947;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #74c947;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 60px;
`

export const NavItem = styled.li`
  font-family: "Roboto Slab";
  padding-top: 15px;
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &.active {
    margin-top: 10px;
    border-bottom: 5px solid #74c947;
  }

  &:hover {
    color: #74c947;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled(LinkR)`
  font-family: "Roboto Slab";
  border-radius: 50px;
  background: #74c947;
  color: white;
  white-space: nowrap;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: -50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #06ab19;
    color: white;
  }
`

