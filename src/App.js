import './App.css';
import { GetList, baseURL } from './services/fetchAPI';
// import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search, getServerSideProps} from './pages/Search';
import { Home } from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/search" element={ <Search /> }  />
        </Routes>
      </Router>
      
      {/* <GetList url={baseURL} /> */}
      <GetList />
    </div>
  );
}

export default App;
