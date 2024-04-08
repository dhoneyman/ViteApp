import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  margin-top: 20px;
`;

const ContactItem = styled.a`
  padding: 8px;
`;

export const Footer = () => (
  <Wrapper>
    <ContactItem href='https://www.linkedin.com/in/dylan-honeyman-0b78631aa/'>
      LinkedIn
    </ContactItem>
    <ContactItem href='https://github.com/dhoneyman'>
      GitHub
    </ContactItem>
    <ContactItem href='mailto:dylanhoneyman@gmail.com'>
      Email
    </ContactItem>
  </Wrapper>
);
