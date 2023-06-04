import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Cards />
    </div>
  );
}

export default App;
