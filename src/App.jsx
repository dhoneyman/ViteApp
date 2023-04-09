import { useState, useCallback, useMemo } from 'react'
import styled from "@emotion/styled";
import {
  LoginForm,
  NavBar,
  Lander,
  Footer,
  Projects,
  Work
} from './components'
import './App.css'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc( 100vh - 64px );
  width: 100%;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;

function App() {
  const [ page, setPage ] = useState( 'home' );
  const [count, setCount] = useState(0);
  const pageSetterCallback = useCallback(( page ) => {
    setPage( page );
  }, []);

  const pageRenderer = useMemo(() => {
    if ( page === 'projects' ) return <Projects />
    if ( page === 'work' ) return <Work />
    return <Lander />
  }, [ page ]);

  return (
    <Main className="App">
      <NavBar
        pageSetterCallback={pageSetterCallback}
        />
      <Body>
        {pageRenderer}
        {/* <Lander /> */}
        <div className="card">
          <LoginForm />
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          reach out to me
        </p>
      </Body>
      <Footer />
    </Main>
  )
}

export default App
