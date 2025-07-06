// src/App.js - THIS IS THE CORRECT CODE

import Header from './components/Header';
import Menu from './components/Menu';    
import Footer from './components/Footer';  
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;