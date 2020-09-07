import React from 'react';
import './index.scss';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="student-list">
        <h1>学员列表</h1>
        <div className="student-name">
          {this.props.studentList.map((key, index) => {
            return (
              <span key={index} className="name-box">
                {key.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StudentList;
