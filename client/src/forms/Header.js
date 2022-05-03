import React, { useEffect, useState } from 'react';

class Hidden extends React.Component {

  render() {

    console.log(this.props.data);

    var value = '';

    switch(this.props.data.subtype) {
      case 'h1':
        value = <h1 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /></h1>;
        break;
      case 'h2':
        value = <h2 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /></h2>;
        break;
      case 'h3':
        value = <h3 className={"" + this.props.data.className ? this.props.data.className : ''}><div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /></h3>;
        break;
      case 'h4':
        value = <h4 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /> </h4>;
        break;
      case 'h5':
        value = <h5 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /> </h5>;
        break;
      case 'h6':
        value = <h6 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /> </h6>;
        break;
      default:
        value = <h3 className={"" + this.props.data.className ? this.props.data.className : ''}> <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} /> </h3>;
    }

    return (
      <div>
        { value }
      </div>
    )
  }
}

export default Hidden;
