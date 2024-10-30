import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <div id="pageContainer">
      <Header />
      <div id="bodyContent">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
