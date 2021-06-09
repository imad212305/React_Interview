import logo from './logo.svg';
import './App.css';
import {MoviesListing} from './MoviesListing'
import AppState from './context/AppState';

function App() {
  return (
    <AppState>
      <MoviesListing />
    </AppState>
  );
}

export default App;
