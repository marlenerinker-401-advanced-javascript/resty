import React from 'react';
import JSONPretty from 'react-json-pretty';
import If from './if.js';
import { withRouter } from 'react-router-dom';


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
    
    
  }

  handleRedirect = () => {
    this.props.history.push('/');
  }

  extractContent = (s) => {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  
  handleReRun = async(event) => {
   
    console.log('handling re-run');
    let item = document.getElementById(`${event.target.className}call`);

    
    let info = this.extractContent(item.innerHTML).split(' ');
    let method = info[0];
    let url = info[1];
    console.log('method is ', method);
    console.log('url is ', url);
    await this.handleRedirect();
    await this.props.populate(method, url);
  };

  toggleDetails = (idx) => {    
    
    let temp = this.state.details;
    temp[idx] = !temp[idx];
    this.setState( {details: temp});
    
  }


  render() {
    let apiCall = this.props.archive;
    console.log('this is apiCall in history', apiCall);
    return (
      <div id='history'>
        <p id='intro'>This is your API call history. Click on a call to see details.</p>
        <section id='api-calls'>
          <ul>
          {apiCall.map((item, idx) => {
          return (
            <li key={idx} id={idx}>
              <JSONPretty id={idx + 'call'} data={item.method + ' ' + item.url} onClick={() => this.toggleDetails(idx)}></JSONPretty>
              <If condition={this.state.details[idx] === true}>
              <input className= {idx} type="button" value="Re-run" onClick={this.handleReRun}></input>
              <JSONPretty className={idx} data={item.body}></JSONPretty>
              </If>
            </li>
            
          );
        })}
          </ul>
        </section>
      </div>
    );
  }
}


export default withRouter(History);