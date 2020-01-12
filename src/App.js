import React from 'react';
import './App.css';
import Hideble from './componets/hideble'
import AutocompleteText from './AutoCompleteTex'
import contries from './countries'

function App() {
  return (
    <div className="App">
      {/* <Hideble text="dynamic value !"/> */}
      <div className="Auto-complete">
      <AutocompleteText items={contries} />
      </div>
      
    </div>
  );
}

export default App;
