import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'


function App() {
  return (
    <div id="pageContainer">
      <Header />
      <div id="bodyContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
