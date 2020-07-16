import React from 'react';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  let count = props.count;
  let items = props.results;
  return (
    <div id = 'results'>
      <p id='count'>API Total Count: {count}</p>
      <p id='item-count'>Returned Count: {items.length}</p>
      <ul id='items'>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              <JSONPretty id="json-pretty" data={item}></JSONPretty>
            </li>
          );
        })}
      </ul>
    </div>
    
  );
  
};


export default Results;