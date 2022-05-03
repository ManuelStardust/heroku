import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";

import {formRender} from './form-render.min'

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");

class FormBuilderPage extends Component {

  constructor(props) {
    super(props);

    this.fb = createRef();

    this.state = {
      isLoading: true,
    }

  }

  componentDidMount() {
    var form = this.props.data;
    this.formBuilder = $(this.fb.current).formRender({
      formData: form, // This is data you stored in database when you build the form
      dataType: 'json'
    });
  }

  render() {
    return   (
      <>
          <div id="fb-render" className="fb-render" ref={this.fb} />
      </>
    )
  }
}

export default FormBuilderPage;
