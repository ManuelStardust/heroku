import React, { useEffect, useState } from 'react';
import Label from "./Label"

class Areaeditor extends React.Component {

  componentDidMount() {
    ClassicEditor.create( document.querySelector("#" + this.props.data.name ));

  }

  render() {

    return (
      <div className="form-group">
        <Label data={ this.props.data } />
        <textarea name={"" + this.props.data.name } className="form-control" id={"" + this.props.data.name } rows="8" placeholder={"" + this.props.data.placeholder } defaultValue={"" + this.props.value } required={this.props.data.required === "true" ? true : false}></textarea>
      </div>
    )
  }
}

export default Areaeditor;
