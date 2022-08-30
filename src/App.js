import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from './pages/Search';
import { Home } from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/search" element={ <Search /> }  exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
