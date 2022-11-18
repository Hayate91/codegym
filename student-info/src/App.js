import logo from './logo.svg';
import './App.css';
import './custom.css';
import Student from './component/Student';

let data = [
  {
    id: 'AA01',
    name: "Henry",
    age: "3x",
    address: ""
  },
  {
    id: 'FG13',
    name: "Miley",
    age: "22",
    address: "New York"
  },
  {
    id: 'DE05',
    name: '秦霄贤',
    age: '25',
    address: '沈阳市'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student data={data} />
      </header>
    </div>
  );
}

export default App;
