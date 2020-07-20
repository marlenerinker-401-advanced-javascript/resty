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
    
    this.getButton = React.createRef();
    this.postButton = React.createRef();
    this.putButton = React.createRef();
    this.deleteButton = React.createRef();
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

  // componentDidUpdate() {
  //   console.log(this.state.method);
  //   if (this.state.method === 'GET') {
  //     this.getButton.current.select();
  //   }
  //   if (this.state.method === 'POST') {
  //     this.postButton.current.select();
  //   }
  //   // if (this.state.method === 'PUT') {
  //   //   this.putButton.current.focus();
  //   // }
  //   // if (this.state.method === 'DELETE') {
  //   //   this.deleteButton.current.focus();
  //   // }
   
  // }
  

  
  async handleSubmit(event) {
    try {
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
  //deprecated function that still works with current version of React (John Cokos suggested that I use this.)
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.url!==this.props.url){
      this.setState({url: nextProps.url });  
    }
    if(nextProps.method!==this.props.method){
      this.setState({method: nextProps.method });  
    }
  }

  
  

  render() {
    
    return (
      <div id='form' >
        <form >
          <label>URL:</label>
          <input type="text" id="url" placeholder="http://api.url.here" name="url"  value={this.state.url} onChange={this.handleChange} ></input>
          <input className="action" type="submit" value="GO!" onClick={this.handleSubmit}></input><br></br>
          <div className="radio-toolbar">
            <input ref ={this.getButton} id ="getButton" name ="button"  type="radio" value="GET" onClick={this.handleOption} checked={this.state.method === 'GET'}></input>
            <label htmlFor="getButton">GET</label>
            <input ref ={this.postButton} id ="postButton" name ="button"  type="radio" value="POST" onClick={this.handleOption} checked={this.state.method === 'POST'}></input>
            <label htmlFor="postButton">POST</label>
            <input ref ={this.putButton} id ="putButton" name ="button"  type="radio" value="PUT" onClick={this.handleOption} checked={this.state.method === 'PUT'}></input>
            <label htmlFor="putButton">PUT</label>
            <input ref ={this.deleteButton} id ="deleteButton" name ="button"  type="radio" value="DELETE" onClick={this.handleOption} checked={this.state.method === 'DELETE'}></input>
            <label htmlFor="deleteButton">DELETE</label>
          </div>
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