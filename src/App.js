import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import Counter from './Counter';

function App() {
  // ES6 examples
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Props example
  const users = ['Alice', 'Bob', 'Charlie'];

  // ✅ Conditional rendering
  const isLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Conditional rendering */}
        {isLoggedIn ? (
          <p>Welcome back!</p>
        ) : (
          <p>Please log in</p>
        )}

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
