import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const StyledH1 = styled.h1`
  margin-bottom: 4px;
`;

const StyledH2 = styled.h2`
  margin-bottom: 4px;
  font-style: italic;
  font-weight: 100;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Lander = () => (
  <Wrapper>
    <Bio>
      <StyledH1>
        Hi I'm dylan
      </StyledH1>
      <StyledH2>
          I'm a software developer living and breathing in Fort Collins Colorado. I currently work at Encapture, helping to build a platform to allow customers to automate their document processing solutions.
      </StyledH2>
    </Bio>

  </Wrapper>

);
