import React from 'react';
import DataProvider from './features/api/DataProvider';
import {BrowserRouter as Route} from "react-router-dom"

import Header from './components/header/Header';
import Pages from './components/mainpages/Pages';

function App() {
  return (
    <div className="App">
      <DataProvider/>
      <Route>
              <Header/>
              <Pages/>
  
      </Route>
    </div>
  );
}

export default App;
