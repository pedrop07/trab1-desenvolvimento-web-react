import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 100%;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserProfile = styled.div`
  max-width: 10.375rem;
  color: #b3b3b3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 8.125rem;

  div:first-of-type {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: #fff;

    span {
      text-transform: capitalize;
    }
  }

  span {
    color: #fff;
    margin: 0px 0.3125rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: #fff;
  }
`

export const StyledLink = styled(NavLink)`
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  min-height: auto;
  min-width: auto;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`

export const LogoutButton = styled.button`
  all: unset;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  button {
    all: unset;
    cursor: pointer;
    background-color: #fff;
    padding: 0.35rem 0.5rem;
    border-radius: 500px;

    transition: all 0.2s ease;

    &:hover {
      background: #dddddd;
    }
  }

  input {
    background-color: #242424;
    color: #fff;
    height: 42px;
    padding: 6px 36px;

    border: 0;
    border-radius: 500px;
    text-overflow: ellipsis;
    width: 100%;

    &:focus {
      box-shadow: 0 0 0 2px #fff;
      outline: none;
    }
  }
`
