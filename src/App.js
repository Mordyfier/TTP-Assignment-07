import './App.css';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Zip Code App
        </h1>
      </header>
      
      <div className="text-field">
        <label htmlFor="zipCode"><strong>Gif Keyword:</strong></label>
        <input type="text" id="zipCode" name="zipCode"></input>
      </div>
      <button type="button" id="trendingButton">Trending</button>
      <button type="button" id="randomButton">Random</button>
      <Search />
    </div>
  );
}

export default App;
