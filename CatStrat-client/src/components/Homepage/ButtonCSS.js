import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#74c947' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#06ab19' : '#fff')};
  }
`