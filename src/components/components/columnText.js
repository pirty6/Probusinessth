
import React, { Component } from 'react';
import '../../css/mabel/columnText.css';

class ColumnText extends Component{
  render() {
    let background = {
      backgroundColor: this.props.value.background_color,
    };

    let columns = this.props.value.text.map((element, index) => (
      <div className='column' key={ index }>
        <img className={ element.icon === null ? 'hidden' : 'show' }
          src={ element.icon }/>
        <p>{ element.paragraph }</p>
      </div>
    ));

    return (
      <div className='column-text' style={ background }>
        <h3>{ this.props.value.title }</h3>
        <div className='smaller-rectangle-show'></div>
        <div className='columns-container'>
          { columns }
        </div>
      </div>
    );
  }
}

export default ColumnText;
