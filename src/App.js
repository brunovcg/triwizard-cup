import './styles/App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';

function App() {
  return (

    <div className="App">
      <header>
        <Header/>   
      </header>

      <main>

        <button className="button">SHUFFLE</button>

        <CardList/>

      </main>
      
    </div>
  );
}

export default App;
