import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  input {
    border: none;
    outline: none;

    border-radius: 27px;
    padding: 6px 24px;
  }

  button {
    all: unset;
    cursor: pointer;
    background-color: #1db954;
    border-radius: 27px;

    color: #fff;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 6px 0;
  }
`

export const CheckboxContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  color: #fff;

  input {
    margin-right: 1rem;
  }

  label {
    cursor: pointer;
  }
`
