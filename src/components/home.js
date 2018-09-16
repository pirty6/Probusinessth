
import React, { Component } from 'react';
import Hero from './components/hero';
import SideImage from './components/sideImage';
import Quote from './components/quote';
import Companies from './components/companies';

class Home extends Component {
  render() {
    const {
      home,
    } = this.props;

    let homeRender = home.body.map((element, index) => {
      switch (element.type){
        case 'hero':
          return <Hero key={ index } { ...element }/>;
        case 'sideImage':
          return <SideImage key={ index } { ...element }/>;
        case 'quote':
          return <Quote key={ index } { ...element }/>;
        case 'companies':
          return <Companies key={ index } { ...element }/>;
        default:
          return null;
      }
    });
    return (
        <div>
          { homeRender }
        </div>
    );
  }
}

export default Home;
