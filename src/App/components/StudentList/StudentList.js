import React from 'react';
import './index.scss';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }


  handleClick(e) {
    this.setState({
      display: true,
    })
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
          {this.state.display && <input type="name" className="input-box"/>} 
          <button type="button" onClick={this.handleClick.bind(this)}>+添加学员</button>
        </div>
      </div>
    );
  }
}

export default StudentList;
