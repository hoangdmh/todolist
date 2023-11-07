import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
// import StateComponent from './example/StateComponent';
// import MyForm from './example/MyForm';

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world! I'm coming</p>
        <MyComponent />
        {/* <StateComponent />
        <MyForm /> */}
      </header>
    </div>
  );
}

export default App;
