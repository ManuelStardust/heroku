import React, { useEffect, useState } from 'react';
import Label from "./Label"

import SignaturePad from 'react-signature-pad-wrapper'
import Button from "../../components/general/Button"
//require("signature_pad");


class Signature extends React.Component {

  constructor(props) {

    super(props);

      this.clearPad = async (e) => {
        e.preventDefault();
        this.signaturePad.clear();
        document.getElementById(this.props.data.name).value = "";
      }

      this.handleOnEnd = async (e) => {
        var img = this.signaturePad.toDataURL("img/png");
        document.getElementById(this.props.data.name).value = img;
      }

  }

  componentDidMount() {

    this.signaturePad.clear();
    this.signaturePad.dotSize = '0.2';
  }

  render() {
    return (
      <>
        <Label data={ this.props.data } key={"label" + this.props.data.name } />
        <SignaturePad options={{minWidth: 8, maxWidth: 12, dotSize: 0.8, backgroundColor: 'rgb(220, 220, 220)', onEnd: this.handleOnEnd.bind(this)}} ref={ref => this.signaturePad = ref} />
        <Button text="Limpiar" className="btn-danger" onClick={this.clearPad.bind(this)} align="justify-content-end"/>
        <input id={"" + this.props.data.name } name={"" + this.props.data.name } type="hidden" value="" required/>
      </>
    )
  }
}

export default Signature;
