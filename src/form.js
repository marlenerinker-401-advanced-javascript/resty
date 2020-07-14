import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A URL was submitted: ', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input type="text" id="url" name="url"onChange={this.handleChange}></input>
          <input type="submit" value="Go" ></input><br></br>
          <input type="button" value="GET" onClick={() => this.setState({method: 'GET'})}></input>
          <input type="button" value="POST" onClick={() => this.setState({method: 'POST'})}></input>
          <input type="button" value="PUT" onClick={() => this.setState({method: 'PUT'})}></input>
          <input type="button" value="DELETE" onClick={() => this.setState({method: 'DELETE'})}></input>
        </form>
        <section>
          <p>{this.state.method}</p>
          <p>{this.state.value}</p>
        </section>
      </div>
    );
  }
}

export default Form;