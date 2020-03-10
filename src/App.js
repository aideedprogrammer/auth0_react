import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Google from './components/Google';

function App() {
  return (
    <div>

    
    <div className="App">
        <p>
          Facebook Authentication
        </p>
        <Facebook />
        
    </div>
    <div className="App">
      <Google />
    </div>
    </div>
  );
}

export default App;
