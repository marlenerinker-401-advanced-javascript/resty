import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      display: '',
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
    console.log('A URL was submitted: ', this.state.url);
    event.preventDefault();
    let data = await fetch(this.state.url);
    let json = await data.json();
    console.log(json);

    let count = json.count;
    let results = json.results;
    this.props.handler(count, results);
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