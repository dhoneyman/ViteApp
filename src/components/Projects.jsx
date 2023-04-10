import{ Wrapper, Bio } from '../shared/boxes'
import { StyledH1, StyledH2 } from '../shared/typography'

export const Projects = () => (
  <Wrapper>
    <Bio>
      <StyledH1>
        Projects
      </StyledH1>
      <StyledH2>
        Coming soon. Many projects taken offline by deprecatted heroku stack. 🫠
        <br/>
        Nearly all projects can be seen at my <a href='https://github.com/dhoneyman'>GitHub.</a>
      </StyledH2>
    </Bio>
  </Wrapper>
);
