import React from 'react';
import './index.scss';

class StudentList extends React.Component {
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

  render() {
    return (
      <div className="student-list">
        {this.state.studentList.map((key, index) => {
          return (
            <span key={index} className="name-box">
              {key.name}
            </span>
          );
        })}
      </div>
    );
  }
}

export default StudentList;
