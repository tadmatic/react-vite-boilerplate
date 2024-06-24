import { useState } from 'react';
import { Button } from 'react-bootstrap';

import viteLogo from '/vite.svg';

import reactLogo from './assets/images/react.svg';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card p-3 mb-3">
        <p>
          <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </p>
        <p className="mb-0">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </Layout>
  );
}

export default App;
