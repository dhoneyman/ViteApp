import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 66px;
  top: 0;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  left: 0;
`;

const Work = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  right: 0;
  `;

const WorkItem = styled.div`
  margin: 20px;
  &:hover {
    color: #39A989;
  }
  cursor: pointer;
`;

export const NavBar = ({ pageSetterCallback }) => (
  <Wrapper>
    <LeftBox>
      <WorkItem
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
