import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/maynadimoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            May Nadi Moe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/maynadimoe/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
