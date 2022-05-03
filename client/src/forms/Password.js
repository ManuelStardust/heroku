import React, { useEffect, useState } from 'react';
import Label from "./Label"

class Password extends React.Component {

  render() {
    return (
      <div className="form-group">
        <Label data={ this.props.data } />
        <input name={"" + this.props.data.name } key={"" + this.props.data.name } type={"" + this.props.data.type } className="form-control" id={"" + this.props.data.name } placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } required={this.props.data.required === "true" ? true : false} />
      </div>
    )
  }
}

export default Password;
