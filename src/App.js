import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import Counter from './Counter';

function App() {
  // Step 3: ES6+ examples
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Step 4: props example
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>User List</h2>
        <UserList users={users} />

        <h2>Counter</h2>
        <Counter />

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
