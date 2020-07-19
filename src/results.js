import React from 'react';
import JSONPretty from 'react-json-pretty';
import If from './if.js';


class Results extends React.Component {
  // TODO: populate the URL and method on the form when you click one of the history results
  
  handlePopulate = (event) => {
    console.log('handling re-run');
    console.log(event.target.innerHTML);
    let element = event.target.innerHTML;
    let info = element.split(' ');
    let method = info[0];
    let url = info[1];
    console.log('method is ', method);
    console.log('url is ', url);
    this.props.populate(method, url);
  };

  render() {
    let headers = this.props.headers;
    let items = this.props.data;
    let apiCall = this.props.archive;
    return (
      <div id = 'results'>
        <section id = 'history'>
          <ul>
            {apiCall.map((item, idx) => {
              return (
                <li key={idx} id={idx}>
                  <JSONPretty id="json-pretty" data={item.method + ' ' + item.url} onClick={this.handlePopulate}></JSONPretty>
                </li>
            
              );
            })}
          </ul>
        </section>

        <If condition={items}>
          <section id = 'details'>
            <ul id='headers'>
              <JSONPretty id="json-pretty" data={headers}></JSONPretty>
            </ul>
            <ul id='items'>
                    
              <JSONPretty id="json-pretty" data={items}></JSONPretty>
                       
            </ul>
          </section>
        </If>
      </div>
                
    );
              
  }
}



export default Results;