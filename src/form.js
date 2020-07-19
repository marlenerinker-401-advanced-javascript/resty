import React from 'react';
import If from './if.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.setStateFromProps = this.setStateFromProps.bind(this);
  }


  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleOption(event) {
    event.preventDefault();
    this.setState({method: event.target.value});
  }

  
  async handleSubmit(event) {
    try {
      console.log('A URL was submitted: ', this.state.url);
      console.log('this.state from handleSubmit: ', this.state);
      event.preventDefault();
      this.setState({ loading: true});
      let restOptions = {
        method: this.state.method,
      };
      let results = await fetch(this.state.url, restOptions);
      let json = await results.json();
      this.setState( { loading: false});
      console.log(results);
      console.log(json);
  
      let headers = JSON.stringify(results.headers, null, 2);
      let data = JSON.stringify(json, null, 2);
      let apiCall = {method: this.state.method, url: this.state.url, body: data};
      this.props.handler(headers, data, apiCall);
      
      
      

    }
    catch (error) {
      this.setState( {loading: false});
      let headers = {};
      let data = 'An error occurred. Try again.';
      let apiCall = null;
      this.props.handler(headers, data, apiCall);
    }  
       
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.url!==this.props.url){
      //Perform some operation
      this.setState({url: nextProps.url });  
    }
  }
  setStateFromProps() {
    if(this.props.method) {
      this.setState({ method: this.props.method});
    }
    if(this.props.url) {
      this.setState( { url: this.props.url});
    }
  }

  render() {
    
    return (
      <div id='form'>
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input type="text" id="url" placeholder="http://api.url.here" name="url"  value={this.state.url} onChange={this.handleChange}></input>
          <input className="action" type="submit" value="GO!" ></input><br></br>
          <input className="button" type="button" value="GET" onClick={this.handleOption} autoFocus></input>
          <input className="button" type="button" value="POST" onClick={this.handleOption}></input>
          <input className="button" type="button" value="PUT" onClick={this.handleOption}></input>
          <input className="button" type="button" value="DELETE" onClick={this.handleOption}></input>
        </form>
        <If condition={this.state.loading === true}>
          <section className="spinner">
            <i className="fa fa-spinner fa-spin" />
          </section>
        </If>
      </div>
    );
  }
}

export default Form;