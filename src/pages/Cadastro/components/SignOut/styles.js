import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 6px 12px;
  appearance: none;
  border: 1px solid ${({ error }) => (error ? '#d31225' : '#878787')};
  font-size: 1rem;
  border-radius: 4px;
  color: #000;
`

export const SubmitButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #1db954;
  border-radius: 27px;

  color: #000;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 0;
  margin-top: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`
