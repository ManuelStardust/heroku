import React, { useEffect, useState } from 'react';
import Label from "./Label"

class File extends React.Component {

  render() {
    return (
    <div className="form-group">
        <Label data={ this.props.data } />
        <div className="input-group">
          <div className="custom-file">
            <input name={"" + this.props.data.name } key={"input" + this.props.data.name } type="file" className="" id={"" + this.props.data.name } placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } required={this.props.data.required === "true" ? true : false} />
          </div>
        </div>
      </div>
    )
  }
}

export default File;
