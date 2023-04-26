import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
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

export const InputContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`
