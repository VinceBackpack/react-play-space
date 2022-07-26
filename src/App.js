import './App.css';
import { GetList } from './services/fetchAPI';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
      <Banner 
        purpose="Rent A Home"
        title="Rental homes for everyone"
        desc="description"
        buttonText="Explore Renting"
        // linkName="/search?purpose=for-rent"
        imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
      />
      </Router>
      
      {/* <GetList /> */}

    </div>
  );
}

export default App;
