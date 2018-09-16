
import React, { Component } from 'react';
import Header from './components/header';
import SideImage from './components/sideImage';
import ColumnText from './components/columnText';
import Button from './components/button';

class Services extends Component{
  render() {
    const {
      services,
    } = this.props;

    let serviceRender = services.body.map((element, index) => {
      switch (element.type){
        case 'header':
          return <Header key={ index } { ...element }/>;
        case 'sideImage':
          return <SideImage key={ index } { ...element }/>;
        case 'columnText':
          return <ColumnText key={ index } { ...element }/>;
        case 'button':
          return <Button key={ index } { ...element }/>;
        default:
          return null;
      }
    });

    return (
      <div className='services'>
        { serviceRender }
      </div>
    );
  }
}

export default Services;
