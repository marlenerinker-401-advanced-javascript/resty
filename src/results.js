import React from 'react';
import JSONPretty from 'react-json-pretty';
import If from './if.js';


class Results extends React.Component {
  // TODO: populate the URL and method on the form when you click one of the history results
  
  

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
                <li key={idx}>
                  <JSONPretty id="json-pretty" data={item.method + ' ' + item.url}></JSONPretty>
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