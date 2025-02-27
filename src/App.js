import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <NavBar />
      </main>
    </div>
  );
}

export default App;
