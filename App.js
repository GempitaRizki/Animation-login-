import logo from './loader.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Gempita
        </p>
        <a
          className="App-link"
          href="./Chat.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simply Click.
        </a>
      </header>
    </div>
  );
}

export default App;
