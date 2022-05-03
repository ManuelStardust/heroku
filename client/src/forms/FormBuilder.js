import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import Label from "./Label"
import Hidden from "./Hidden"
import Textarea from "./Textarea"


window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

class FormBuilder extends Component {

  constructor(props) {
    super(props);

    this.fb = createRef();

    this.state = {
      isLoading: true,
    }

    let fbsetup =  this.props.fbsetup;

    fbsetup.onAddField = function(fieldId) {
      callApi.call();
     };

    /*fbsetup.onAddOption = function(fieldId) {
      callApi.call();
    };*/

    fbsetup.onClearAll = function(fieldId) {
      callApi.call();
    };

    fbsetup.onCloseFieldEdit = function(fieldId) {
      callApi.call();
    };

    fbsetup.onOpenFieldEdit = function(fieldId) {
      callApi.call();
    };

    this.formData = fbsetup;

    const callApi = ()  =>  {
      var data = this.formBuilder.actions.getData('json', true);
      var field = $("#" + this.props.data.name).val(data);
    }

  }

  componentDidMount() {
    this.formBuilder = $(this.fb.current).formBuilder(this.formData);
    var value = this.props.value;
    let este = this;

    this.formBuilder.promise.then(function(formBuilder){
      formBuilder.actions.setData(value);
      formBuilder.actions.setLang('es-ES')
    }, value).catch(error => { return error });

  }

  render() {

    return   (
      <>
        <Label data={ this.props.data } key={"label" + this.props.data.name } />
        <div id="fb-editor" className="fb-editor" ref={this.fb} />
        <Textarea data={ this.props.data } value="" />
      </>
    )
  }
}

export default FormBuilder;
