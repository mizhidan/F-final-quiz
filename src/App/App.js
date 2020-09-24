/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import StudentList from './components/StudentList/StudentList';
import GroupList from './components/GroupList/GroupList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      sortedList: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/students')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          studentList: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClickSort() {
    fetch("http://localhost:8080/students")
    .then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        sortedList: data,
      })
    })
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <Header handleClickSort={this.handleClickSort.bind(this)}/>
        <GroupList sortedList={this.state.sortedList}/>
        <StudentList studentList={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
