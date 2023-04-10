import styled from "@emotion/styled";
import { StyledH1, StyledH2 } from '../shared/typography'
import{ Wrapper, Bio } from '../shared/boxes'

export const Lander = () => (
  <Wrapper>
    <Bio>
      <StyledH1>
        Hi, I'm dylan.
      </StyledH1>
      <StyledH2>
          I'm a full stack developer living and playing in Fort Collins, Colorado. I currently work at Encapture, helping to build a platform to allow customers to automate their document processing solutions.
          <br />
          <br />
          As a recent Colorado transplant I spend most of my free time climbing in Poudre Canyon or tearin up the many gravel bike trails Ft Collins has to offer.
      </StyledH2>
    </Bio>

  </Wrapper>

);
