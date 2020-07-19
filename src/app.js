import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';
import { BrowserRouter, Route } from 'react-router-dom';


import './design/app.scss';
import './design/footer.scss';
import './design/header.scss';
import './design/form.scss';
import './design/results.scss';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: '',
      data: '',
      history: [],
      archive: [],
      method: '',
      url: ''
    }
    this.getHistory = this.archiveHistory.bind(this);
  };



  handleForm = (headers, data, apiCall) => {
    this.setState( { headers, data } );
    if (apiCall){
    this.state.history.push(apiCall);
    localStorage.setItem('history', JSON.stringify(this.state.history));
    this.archiveHistory();
    } 
  };

  populateForm = async(method, url) => {
    console.log('this.state from populate form', this.state.method);
    await this.setState({ method, url });
    console.log('populate form: method and url ', method, url);
    console.log('this.state from populate form', this.state.method);
  }

  async archiveHistory() {
    let history = await JSON.parse(localStorage.getItem('history'));
    this.setState( {archive: history});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/">
            <Form handler={this.handleForm} method={this.state.method} url={this.state.url}/>
            <Results headers={this.state.headers} data={this.state.data} archive={this.state.archive} populate={this.populateForm}/>
          </Route>
          <Route exact path="/history">
            <History archive={this.state.archive}/>
          </Route>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}



export default App;