import React, { Component } from 'react';
import Movie from './components/Movie';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
    return (      
      <div className="App">
        <Movie/>
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;