import './App.css';
import giphy_anim from '../src/img/giphy_anim.gif'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GIF Lookup
        </h1>
        <img src={giphy_anim} alt="giphy animated logo" />
      </header>
      
      <div className="text-field">
        <label htmlFor="zipCode" id="zipCode-lbl"><strong>Gif Keyword:</strong></label>
        <input type="text" id="searchButtonText" name="searchButton"></input>
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
