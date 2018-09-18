import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor(props) {
    super(props)
      this.state= {
        students: []
      }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      console.log("res: ", res);
      this.setState({students: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    const { students } = this.state;
    let studentList = students.map((e, ind) => (
      <Link
        to={`/student/${e.id}`}
        key={ind}
      >
        <h3>
          {e.first_name} {e.last_name}
        </h3>
      </Link>
    ));
    return (
      <div className="box">
        <button onClick={() => this.props.history.goBack()}>Back home page</button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { studentList }
      </div>
    )
  }
}