import React, { Component } from 'react'

import '../App.scss'

class Quote extends Component {

  render() {
    return (
      <>
        <div className='quote-container'>
          <div className='quote-headline'>
            <h1>GET FREE QUOTE</h1>
          </div>
          <div className='quote-form-container'>
            <form onSubmit={this.props.handleSubmit}>
              <input type="text" name='quoteName' placeholder={'First and Last Name'} value={this.props.quoteName} onChange={this.props.handleChange} />
              <br />

              <input type="text" name='quotePhoneNumber' placeholder={'Phone Number'} value={this.props.quotePhoneNumber} onChange={this.props.handleChange} />
              <br />

              <input type="text" name='quoteEmail' placeholder={'E-Mail'} value={this.props.quoteEmail} onChange={this.props.handleChange} />
              <br />

              <input type="text" name='quoteCity' placeholder={'City'} value={this.props.quoteCity} onChange={this.props.handleChange} />
              <br />

              <textarea type="text" name='quoteSpecifics' placeholder={'Tell us any specifics about your project'} value={this.props.quoteSpecifics} onChange={this.props.handleChange} />
              <br />

              <input className='quote-form-button' type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}


export default Quote