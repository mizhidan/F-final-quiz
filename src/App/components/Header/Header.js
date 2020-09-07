import React from 'react';
import './index.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {

  }

  render() {
    return (
      <div className="headers">
        <h1>分组列表</h1>
        <button className="get-student-list-btn" type="button" onClick={this.props.handleClick}>
          分组学员
        </button>
      </div>
    );
  }
}

export default Header;
