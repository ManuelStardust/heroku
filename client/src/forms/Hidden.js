import React, { useEffect, useState } from 'react';
import Label from "./Label"

class Hidden extends React.Component {

  render() {

    return (
      <div className="form-group" key={"" + this.props.data.name } >
        <input name={"" + this.props.data.name } key={"input" + this.props.data.name } type="hidden" className="form-control" id={"" + this.props.data.name } placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } required={this.props.data.required === "true" ? true : false} />
      </div>
    )
  }
}

export default Hidden;
