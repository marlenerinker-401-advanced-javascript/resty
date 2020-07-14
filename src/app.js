import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';


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