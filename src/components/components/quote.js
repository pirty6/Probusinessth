
import React, { Component } from 'react';
import '../../css/mabel/quote.css';

class Quote extends Component {
  render() {
    return (
      <div className='quote'>
        <div className='container'>
          <img className='quotation-mark' src='./assets/quote.svg'/>
          <div className='quote-container'>
            <h4>"{ this.props.value.quote }"</h4>
          </div>
          <div className='smaller-rectangle-show'></div>
          <div className='author-container'>
            <p className='author'>{ this.props.value.author }</p>
            <p className='workplace'>{ this.props.value.workplace }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
