import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      console.log("res :", res)
      this.setState({studentInfo: res.data})
    }).catch(err => console.log(err));
  }
  render() {
    console.log(this.props);
    const { studentInfo } = this.state;
    return (
      <div className="box">
        <button onClick={() => this.props.history.goBack()}>Back to class list</button>
        <h1>Student</h1>
        <h1>{studentInfo.first_name}</h1>
        <h1>{studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
      </div>
    )
  }
}