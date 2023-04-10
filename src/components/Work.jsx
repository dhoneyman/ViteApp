import{ Wrapper, Bio } from '../shared/boxes'
import { StyledH1, StyledH2 } from '../shared/typography'

export const Work = () => (
  <Wrapper>
    <Bio>
      <StyledH1>Work</StyledH1>
      <StyledH2>
        Trained in full stack development with a love and focus on front end.
        Currently I work at <a href='https://encapture.com/'>Encapture</a> as a UI developer helping to transition the company from their
        traditional on prem solution to a SaaS based solution.
        <br />
        <br />
        There are few things I enjoy more
        than building an effecient and intuitive design system to help stream line development.
        <br />
        <br />
        I love what I do and I am always looking for a new and exciting challenge.
      </StyledH2>
    </Bio>
  </Wrapper>
);
