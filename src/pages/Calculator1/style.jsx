import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .calc-alert {
    color: red;
  }

  input[type='submit'] {
    padding: 10px 40px;
    font-weight: bold;
  }
`;
