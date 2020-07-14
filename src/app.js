import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';

import './design/app.scss';
import './design/footer.scss';
import './design/header.scss';
import './design/form.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}



export default App;