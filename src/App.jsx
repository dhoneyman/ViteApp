import { useState } from 'react'
import styled from "@emotion/styled";
import {
  LoginForm,
  NavBar,
  Lander,
  Footer
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
  const [count, setCount] = useState(0)

  return (
    <Main className="App">
      <NavBar />
      <Body>
        <Lander />
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
