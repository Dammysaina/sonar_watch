import './App.css';
import Header from './components/header';
import Language from './components/languages';
import Privacypolicy from './components/privacypolicy';
import Termsandcons from './components/termsandcons';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Termsandcons /> */}
      <Language/>
      {/* <Privacypolicy /> */}
    </div>
  );
}

export default App;
