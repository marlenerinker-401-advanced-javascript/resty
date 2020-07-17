import React from 'react';
import JSONPretty from 'react-json-pretty';
import If from './if.js';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
    }

    
  }

  // TODO: implement the handle re-run functionality - should re-run the API call and redirect to results page
  handleReRun = () => {
    console.log('handling re-run');
    this.setState( {details: false});
  };

  toggleDetails = () => {
    console.log('showing details');
    if (!this.state.details) {
      this.setState( {details: true});
      return;
    }
    this.setState( { details: false});
  }


  render() {
    let apiCall = this.props.archive;
    console.log('this is apiCall in history', apiCall);
    return (
      <div id='history'>
        <p>This is your history!</p>
        <section id='api-calls'>
          <ul>
          {apiCall.map((item, idx) => {
          return (
            <li key={idx}>
              <JSONPretty id="json-pretty" data={item.method + ' ' + item.url} onClick={this.toggleDetails}></JSONPretty>
              <If condition={this.state.details === true}>
              <JSONPretty id="json-pretty" data={item.body}></JSONPretty>
              <input className="button" type="button" value="Re-run" onClick={this.handleReRun}></input>
              </If>
            </li>
            
          );
        })}
          </ul>
        </section>
        {/* <If condition={this.state.details === true}>
        <section id='query-details'>
        <input className="button" type="button" value="Re-run" onClick={this.handleReRun}></input>
          <ul>
            <li>query details</li>
          </ul>
        </section>
        </If> */}
      </div>
    );
  }
}


export default History;