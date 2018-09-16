
import React, { Component } from 'react';
import '../css/mabel/sidebar.css';

class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showNavigation: !this.state.showNavigation });
  }

  componentDidMount() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        this.setState({ showNavigation: false });
      }
    }.bind(this), false);
  }

  render() {
    const {
      links,
      goToLink,
    } = this.props;

    let linksRender = links.map((element, index) => (
      <div key={ index } className='nav' onClick={ () => { goToLink(element.link); }
      }>
        <span>{ element.title }</span>
      </div>
    ));

    return (
      <div className='sidebar'>
        <div id='menu' className={this.state.showNavigation ? 'on' : 'menu'}
          onClick={this.onClick.bind(this)}>
          <i className='close'>
            <span>
              <p></p>
              <p></p>
              <p></p>
            </span>
          </i>
        </div>
        <div className={ 'drawer ' + (this.state.showNavigation ? 'show' : 'hidden')} >
            { linksRender }
        </div>
      </div>
    );
  }
}

export default Sidebar;
