
import React, { Component } from 'react';
import '../../css/mabel/companies.css';

class Companies extends Component{
  render() {
    let companiesRender = this.props.value.companies.map((element, index) => (
      <a className='company' key={ index } href={ element.link }>
          <img src={ element.image }/>
      </a>
    ));
    return (
      <div className='companies'>
        <h3>{ this.props.value.title }</h3>
        <div className='smaller-rectangle-show'></div>
        <div className='companies-container'>
          { companiesRender }
        </div>
      </div>
    );
  }
}

export default Companies;
