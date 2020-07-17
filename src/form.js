import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }


  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleOption(event) {
    event.preventDefault();
    this.setState({method: event.target.value});
  }

  async handleSubmit(event) {
    // TODO: add spinner during fetch

    console.log('A URL was submitted: ', this.state.url);
    event.preventDefault();
    let restOptions = {
      method: this.state.method,
    };
    let results = await fetch(this.state.url, restOptions);
    let json = await results.json();
    console.log(results);
    console.log(json);

    let headers = JSON.stringify(results.headers, null, 2);
    let data = JSON.stringify(json, null, 2);
    let apiCall = {method: this.state.method, url: this.state.url, body: data};
    this.props.handler(headers, data, apiCall);
  }

  render() {
    return (
      <div id='form'>
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input type="text" id="url" placeholder="http://api.url.here" name="url"onChange={this.handleChange}></input>
          <input className="action" type="submit" value="GO!" ></input><br></br>
          <input className="button" type="button" value="GET" onClick={this.handleOption} autoFocus></input>
          <input className="button" type="button" value="POST" onClick={this.handleOption}></input>
          <input className="button" type="button" value="PUT" onClick={this.handleOption}></input>
          <input className="button" type="button" value="DELETE" onClick={this.handleOption}></input>
        </form>
      </div>
    );
  }
}

export default Form;