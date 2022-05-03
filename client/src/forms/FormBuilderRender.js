import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import Label from "./Label"
import Hidden from "./Hidden"
import Button from "../../components/general/Button"

import {formRender} from './form-render.min'

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");

class FormBuilderRender extends Component {

  constructor(props) {
    super(props);

    this.fb = createRef();

    this.state = {
      isLoading: true,
    }

  }

  componentDidMount() {
    var form = this.props.data.form.form;

    this.formBuilder = $(this.fb.current).formRender({
      formData: form, // This is data you stored in database when you build the form
      dataType: 'json'
    });
  }

  render() {
    var sendButton = "";
    if(this.props.data.sendButton){
      sendButton =  <Button type="submit" text="Guardar y continuar" className="btn-success" align="justify-content-center" />;
    }

    return   (
      <>
        <form role="form" id={"" + this.props.data.id} ref={"" + this.props.data.formRef} action={"" + this.props.data.action} method={"" + this.props.data.method} encType={"" + this.props.data.enctype} onSubmit={ this.props.onSubmit }>
          <div id="fb-render" className="fb-render" ref={this.fb} />
          { sendButton }
        </form>
      </>
    )
  }
}

export default FormBuilderRender;
