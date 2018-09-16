import React, { Component } from 'react';
import '../../css/mabel/hero.css'

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='container'>
          <h1>{ this.props.value.title }</h1>
          <h2>{ this.props.value.subtitle }</h2>
        </div>
      </div>
    );
  }
}

export default Hero;
