import Header from './components/header';
import './App.css';
import ToDo from './components/todoForm';
import List from './components/list';

function App() {
  return (
    <div className="App">

      <Header />
      <ToDo />
      <br />
      <List />


    </div >
  );
}

export default App;
