
import React, { Component } from 'react';
import '../../css/mabel/button.css';

class Button extends Component{
  render() {
    return (
      <div className='button-container'>
        <div className='cta-primary-show'>
          <span>{ this.props.value.text }</span>
        </div>
      </div>
    );
  }
}

export default Button;
