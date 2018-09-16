import React, { Component } from 'react';
import '../../css/mabel/header.css';

class Header extends Component{
  render() {
    return (
      <div className='header'>
        <h6>{ this.props.value.subtitle }</h6>
        <h2>{ this.props.value.title }</h2>
        <div className='paragraph'>
          { this.props.value.paragraph }
        </div>
        <div className='smaller-rectangle-show'></div>
      </div>
    );
  }
}

export default Header;
