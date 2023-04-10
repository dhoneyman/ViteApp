import styled from "@emotion/styled";
import { ReactComponent as LightningBolt } from "../assets/lightning.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 66px;
  top: 0;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  left: 0;
  align-items: center;
`;

const Work = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  right: 0;
  `;

const WorkItem = styled.div`
  margin: ${(props) => !!props.leftItem ? '0px' : '20px'};
  &:hover {
    color: #39A989;
  }
  cursor: pointer;
`;

const StyledBolt = styled( LightningBolt )`
  font-size: 50px;
  color: white;
`;

export const NavBar = ({ pageSetterCallback }) => (
  <Wrapper>
    <LeftBox>
      <StyledBolt />
      <WorkItem
        leftItem
        onClick={() => pageSetterCallback( 'home' )}
      >
        dylanh
      </WorkItem>
    </LeftBox>
    <Work>
      <WorkItem
        onClick={() => pageSetterCallback( 'home' )}
      >
        home
      </WorkItem>
      <WorkItem
        onClick={() => pageSetterCallback( 'projects' )}
      >
        projects
      </WorkItem>
      <WorkItem
        onClick={() => pageSetterCallback( 'work' )}
      >
        work
      </WorkItem>
    </Work>
  </Wrapper>
);
