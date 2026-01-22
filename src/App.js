import logo from './logo.svg';
import './App.css';


const names = ['Alice','Bob','Charlie'];
const doubled = names.map(name => name.length * 2);
console.log('Doubled lengths:', doubled);

const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log('Destructured:', name, age);

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


import UserList from './UserList';

function App() {
    const users = ['Alice','Bob','Charlie'];
    return <UserList users={users} />;
}



