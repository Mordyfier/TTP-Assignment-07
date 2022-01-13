import './App.css';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GIF Search App
        </h1>
      </header>
      
      <div className="text-field">
        <label htmlFor="zipCode" id="zipCode-lbl"><strong>Gif Keyword:</strong></label>
        <input type="text" id="zipCode" name="zipCode"></input>
        <button type="button" id="searchButton">Search</button>
      </div>
      <div className='select-btns'>
      <button type="button" id="trendingButton">Trending</button>
      <button type="button" id="randomButton">Random</button>
      </div>
      <Search />
    </div>
  );
}

export default App;
