import React, { Component, useEffect, useState } from 'react';

class Button extends React.Component {

  render() {
    //justify-content-center
    return (
      <div className={"d-flex " + this.props.align}>
        <button type={ "" + this.props.type } onClick={ this.props.onClick } className={ "btn " + this.props.className } >
          { this.props.text }
        </button>
      </div>
    )
  }
}

export default Button;
