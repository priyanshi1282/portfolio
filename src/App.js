import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <h4>This is Priyanshi Agrawal.</h4>
    </div>
  );
}

export default App;
