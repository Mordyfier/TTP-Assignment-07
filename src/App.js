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
      
      <div className='controls'>
        <input type="text" id="search-field" name="search-field" placeholder='Try "cats"'></input>
        <div className='select-btns'>
          <button type="button" id="trending-button">Trending</button>
          <button type="button" id="random-button">Random</button>
        </div>
      </div>


      <Search />
    </div>
  );
}

export default App;
