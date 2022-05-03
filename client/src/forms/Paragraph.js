import React, { useEffect, useState } from 'react';

class Hidden extends React.Component {

  render() {

    var value = '';

    value = <div dangerouslySetInnerHTML = {{ __html: this.props.data.label }} />;

    return (
      <div>
        <p className={"" + this.props.data.className ? this.props.data.className : ''}>
          { value }
        </p>
      </div>
    )
  }
}

export default Hidden;
