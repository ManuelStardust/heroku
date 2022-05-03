import React, { Component, useEffect, useState } from 'react';

class Column extends React.Component {

  render() {
    return (
      <div className={"" + this.props.data.class ? this.props.data.class : ''}>
      { this.props.data.content }
      </div>
    )
  }
}

export default Column;
