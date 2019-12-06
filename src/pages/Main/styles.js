import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
    font-family: 'Raleway', cursive;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 0px;
    border-bottom: 1px solid #ffffff69;
    background: transparent;
    padding: 10px 15px;
    font-size: 16px;
    color: #fff;
  }

  input::placeholder {
    color: #ffffffa1;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #fff;
  border: 0;
  padding: 0 14px;
  margin-left: 10px;
  border-radius: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    margin-right: 0px;
  }
`;
