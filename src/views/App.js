import logo from './logo.svg';
import './App.scss';
import ListTodo from './todos/ListTodo';

function App() {
  // const App = () => {
  return (
    <div className="App">
      <div className="container">
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
