import React, { useEffect, useState } from 'react';
import Label from "./Label"

class Input extends React.Component {

  render() {

    var required = "";
    if(this.props.data.required === true) required = "required";

    return (
        <div className={ "row " + (this.props.data.className ? this.props.data.className : '') } >
          <div className="col-3"><Label data={ this.props.data } key={"label" + this.props.data.name } /></div>
          <div className="col-9"><input name={"" + this.props.data.name } key={"input" + this.props.data.name } type={"" + this.props.data.subtype } className="form-control input-sm" id={"" + this.props.data.name } placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } onChange={ (this.props.onChange) ? this.props.onChange.bind(this) : null } /></div>
        </div>
    )
  }
}

export default Input;
