import './App.css';
import Nav from './components/NavBar/navbar';
import SlideImage from './components/Carousel/carousel';

function App() {
  return (
    <div className="App App-header">
      <Nav />
      <div>
        <SlideImage />
      </div>
      
    </div>
  );
}

export default App;
