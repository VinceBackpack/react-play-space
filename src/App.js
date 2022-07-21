import './App.css';
import { GetList } from './services/fetchAPI';
import { Banner } from './components/Banner';

function App() {


  return (
    <div className="App">
      Hello to the main page!
      <Banner 
        purpose="Rent A Home"
        title="Rental homes for everyone"
        desc="description"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
      />
      
      {/* <GetList /> */}

    </div>
  );
}

export default App;
