import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Homepage from "./Components/Homepage"
import Quote from './Components/Quote'
import Footer from './Components/Footer'
import Residential from './Components/Residential'
import Commercial from './Components/Commercial'

import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteName: '',
      quotePhoneNumber: '',
      quoteEmail: '',
      quoteCity: '',
      quoteSpecifics: '',
      menuOpen: false
    }
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      quoteName,
      quotePhoneNumber,
      quoteEmail,
      quoteCity,
      quoteSpecifics
    } = this.state

    const templateParams = {
      name: quoteName,
      phonenumber: quotePhoneNumber,
      email: quoteEmail,
      city: quoteCity,
      specifics: quoteSpecifics
    };

    console.log(templateParams)

    emailjs.send('yahoo', 'firstchoice', templateParams, 'user_39eGvIDcXAtbGo8VzXCn7')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

    this.setState({
      quoteName: '',
      quotePhoneNumber: '',
      quoteEmail: '',
      quoteCity: '',
      quoteSpecifics: ''
    })
  }

  render() {
    const {
      quoteName,
      quotePhoneNumber,
      quoteEmail,
      quoteCity,
      quoteSpecifics
    } = this.state

    return (
      <Router>
        <div className="App">
          <Route
            path='/'
            render={(props) => (<Navbar
              menuOpen={this.state.menuOpen}
              closeMenu={this.closeMenu}
              handleStateChange={this.handleStateChange}
              toggleMenu={this.toggleMenu}
            />)}
          />
          <Route
            path='/' exact
            render={(props) => (<Homepage />)}
          />
          <Route
            path='/residential'
            render={(props) => (<Residential />)}
          />
          <Route
            path='/commercial'
            render={(props) => (<Commercial />)}
          />
          <Route
            path='/quote' exact
            render={(props) => (<Quote
              quoteName={quoteName}
              quotePhoneNumber={quotePhoneNumber}
              quoteEmail={quoteEmail}
              quoteCity={quoteCity}
              quoteSpecifics={quoteSpecifics}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />)}
          />
          <Route
            path='/'
            render={(props) => (<Footer />)}
          />
        </div>
      </Router>
    )
  }
}

