import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from './pages/Search';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/property/:externalID" element= {<PropertyDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
