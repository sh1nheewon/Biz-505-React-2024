import logo from './logo.svg';
import './css/App.css';
import Hello from './comps/Hello';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Hello />
    </div>
  );
}

// App 이라는 함수를 다른 곳에서 import 할 수 있도록 화는 선언문
export default App;