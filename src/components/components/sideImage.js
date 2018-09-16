import React, { Component } from 'react';
import '../../css/mabel/sideImage.css';

class SideImage extends Component {
  render() {

    let sideImage;
    if (this.props.value.right_image) {
      sideImage = {
        flexDirection: 'row-reverse',
        backgroundColor: this.props.value.background_color,
      };
    } else {
      sideImage = {
        backgroundColor: this.props.value.background_color,
      };
    };

    let padding;
    if (this.props.value.rectangle) {
      padding = {
        paddingTop: '12rem',
      };
    }

    return (
      <div className={'side-image' + (this.props.value.rectangle ? ' rectangle' : '')}
         style={{ ...sideImage, ...padding }}>
          <div className='right-column'>
            <div className={ 'rectangle-' + (this.props.value.rectangle ? 'show' : 'hidden')}
               ref={(rectangle) => {this.rectangle = rectangle;}}>
            </div>
            <img className='image' src={ this.props.value.image.md }/>
          </div>
          <div className='left-column'>
          <div className='container'>
            <div className={ 'smaller-rectangle-' +
            (this.props.value.smaller_rectangle ? 'show' : 'hidden')}>
            </div>
            <h3>{ this.props.value.title }</h3>
            <p>{ this.props.value.paragraph }</p>
            <div className='cta-container'>
              <a className={ 'cta-' + this.props.value.cta.breed +
                (this.props.value.cta.text === '' ? '-hidden' : '-show')}
                 href={ this.props.value.cta.link}>
                <span>{ this.props.value.cta.text }</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideImage;
