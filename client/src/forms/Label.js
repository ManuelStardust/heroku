import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

class Label extends React.Component {

  render() {

    let required = this.props.data.required === true ? "*" : "";

    return (
      <div>
        <label htmlFor={"" + this.props.data.name }>{parse(this.props.data.label)}{ required }</label>
        <a href="#" id={"ttip_" + this.props.data.name } title={"" + this.props.data.description } className="fa fa-question-circle" data-toggle="tooltip"></a>
      </div>

    )
  }
}

export default Label;
