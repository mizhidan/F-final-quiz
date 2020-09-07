import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import StudentList from './components/StudentList/StudentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/students/list')
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
    console.log("aaa");
  }



  render() {
    return (
      <div data-testid="app" className="App">
        <Header handleClickSort={this.handleClickSort()}/>
        <StudentList studentList={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
