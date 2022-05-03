import React, { useEffect, useState } from 'react';
import Label from "./Label"

class Number extends React.Component {

  render() {
    console.log(this.props.data);
    return (
      <div className={ "" + (this.props.data.className ? this.props.data.className : '') }>
        <Label data={ this.props.data } />
        <input name={"" + this.props.data.name } key={"" + this.props.data.name } type={"" + this.props.data.type } className="form-control" id={"" + this.props.data.name } placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } required={this.props.data.required === true ? true : false} onChange={ (this.props.onChange) ? this.props.onChange.bind(this) : null } min = { "" + this.props.data.min } max = { "" + this.props.data.max } />
      </div>
    )
  }
}

export default Number;
