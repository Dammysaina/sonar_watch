import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
