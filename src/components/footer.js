
import React, { Component } from 'react';
import '../css/mabel/footer.css';

class Footer extends Component {
  render() {
    const {
      footer,
    } = this.props;

    let social = footer.social.map((element, index) => (
        <a className='social-icon' href={ element.link } key={index}>
          <img src={ element.icon }/>
        </a>
    ));

    return (
      <div className='footer'>
        <div className='contact'>
          <h5>Contacto</h5>
          <div className='contact-container'>
            <div className='left-column'>
              <span>{ footer.address } { footer.address_num }</span>
              <span>{ footer.address_col }</span>
              <span>{ footer.city } { footer.post_code }</span>
            </div>
            <div className='right-column'>
              <span>{ footer.email }</span>
              <span>{ footer.telephone }</span>
            </div>
          </div>
        </div>
        <div className='social'>
          <h5>Social</h5>
          <div className='social-container'>
            { social }
          </div>
        </div>
        <div className='privacy-container'>
          <div className='rectangle-footer'></div>
          <div className='left-column'>

          </div>
          <div className='right-column'>
            <a>Privacidad</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
