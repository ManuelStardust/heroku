import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import Input from "./Input"
import Button from "../../components/general/Button"

class Filters extends React.Component {

  constructor(props) {

    super(props);

    var formContent = [];

    this.props.data.fields.map((item,i)=>{

      let value = '';
      if(this.props.data.formValues[item.name]){
        value = this.props.data.formValues[item.name];
      }else if (item.value) {
        value = item.value;
      }

      switch(item.type) {
        case 'text':
          var inputContent = <Input data={ item } value={ value } />;
          break;
        case 'number':
          var inputContent = <Number data={ item } value={ value } />;
          break;
        case 'date':
          var inputContent = <Date data={ item } value={ value } />;
          break;
        case 'email':
          var inputContent = <Email data={ item } value={ value } />;
          break;
        case 'password':
          var inputContent = <Password data={ item } value={ value } />;
          break;
        case 'hidden':
          var inputContent = <Hidden data={ item } value={ value } />;
          break;
        case 'file':
          var inputContent = <File data={ item } value={ value } />;
          break;
        case 'textarea':
          var inputContent = <Textarea data={ item } value={ value } />;
          break;
        case 'areaeditor':
          var inputContent = <Areaeditor data={ item } value={ value } />;
          break;
        case 'select':
          var inputContent = <Select data={ item } value={ value } />;
          break;
        case 'radio':
          var inputContent = <Radio data={ item } value={ value } />;
          break;
        case 'checkbox':
          var inputContent = <Checkbox data={ item } value={ value } />;
          break;
        case 'formbuilder':
          var inputContent = <FormBuilder data={ item } value={ value } />;
          break;
        default:
          var inputContent = <Input data={ item } value={ value } />;
      }

      formContent.push(inputContent);
    })

    this.formContent = formContent;

  }

  render() {
    return (
      <form role="form" id={"" + this.props.data.id} ref={"" + this.props.data.formRef} action={"" + this.props.data.action} method={"" + this.props.data.method} encType={"" + this.props.data.enctype} onSubmit={ this.props.onSubmit }>
        { this.formContent }
      </form>
    )
  }
}

export default Filters;
