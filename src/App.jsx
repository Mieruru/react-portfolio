import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div id="pageContainer">
      <Header />
      <div id="bodyContent">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
