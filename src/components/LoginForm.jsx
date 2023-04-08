import styled from "@emotion/styled";

export const LoginForm = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container>
      <label for='username'>
        Username:
      </label>
      <input type='text' id='username' />
      <label for='password'>
        Password:
      </label>
      <input type='password' id='password' />
    </Container>
  )
};
