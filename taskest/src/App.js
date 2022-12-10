import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBRXfi7CrxhZXhFVKlNLpkDwDDUyhCd3Uk",
  authDomain: "board-pro.firebaseapp.com",
  databaseURL: "https://board-pro-default-rtdb.firebaseio.com",
  projectId: "board-pro",
  storageBucket: "board-pro.appspot.com",
  messagingSenderId: "100477925458",
  appId: "1:100477925458:web:c14826f16ce2dc04c6878b",
  measurementId: "G-F5EDV5KDGZ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;