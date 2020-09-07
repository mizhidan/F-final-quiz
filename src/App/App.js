import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import StudentList from './components/StudentList/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <StudentList />
      </div>
    );
  }
}

export default App;
