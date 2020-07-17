import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='header'>
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li><NavLink activeClassName='selected' exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName='selected' exact to="/history">History</NavLink></li>
          </ul>
        </nav>
  
      </div>
    );
  }
}

export default Header;