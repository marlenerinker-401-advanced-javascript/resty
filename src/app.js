import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';

import './design/app.scss';
import './design/footer.scss';
import './design/header.scss';
import './design/form.scss';
import './design/results.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      results: [],
    }
  };

  handleForm = (count, results) => {
    this.setState( { count, results } );
  };

  render() {
    return (
      <div>
        <Header />
        <Form handler={this.handleForm}/>
        <Results count={this.state.count} results={this.state.results}/>
        <Footer />
      </div>
    );
  }
}



export default App;