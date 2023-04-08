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
  padding: 6px;
`;

export const NavBar = () => (
  <Wrapper>
    <LeftBox>
      dylanh
    </LeftBox>
    <Work>
      <WorkItem>
        one
      </WorkItem>
      <WorkItem>
        two
      </WorkItem>
      <WorkItem>
        three
      </WorkItem>
    </Work>
  </Wrapper>
);
