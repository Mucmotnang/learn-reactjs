import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tuan Phan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TodoFeature />
    </div>
  );
}

export default App;
