import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import Header from "./Header"
import Paragraph from "./Paragraph"

import Input from "./Input"
import Number from "./Number"
import Email from "./Email"
import Password from "./Password"
import File from "./File"
import Hidden from "./Hidden"
import Textarea from "./Textarea"
import Areaeditor from "./Areaeditor"
import Select from "./Select"
import Radio from "./Radio"
import Checkbox from "./Checkbox"
import DateField from "./DateField"
import Signature from "./Signature"
import FormBuilder from "./FormBuilder"
import Button from "../../components/general/Button"


class Form extends React.Component {

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
          var inputContent = <Input data={ item } value={ value } onChange="" />;
          break;
        case 'number':
          var inputContent = <Number data={ item } value={ value } onChange="" />;
          break;
        case 'date':
          var inputContent = <DateField data={ item } value={ value } onChange="" />;
          break;
        case 'email':
          var inputContent = <Email data={ item } value={ value } onChange="" />;
          break;
        case 'password':
          var inputContent = <Password data={ item } value={ value } onChange="" />;
          break;
        case 'hidden':
          var inputContent = <Hidden data={ item } value={ value } onChange="" />;
          break;
        case 'file':
          var inputContent = <File data={ item } value={ value } onChange="" />;
          break;
        case 'textarea':
          var inputContent = <Textarea data={ item } value={ value } onChange="" />;
          break;
        case 'areaeditor':
          var inputContent = <Areaeditor data={ item } value={ value } onChange="" />;
          break;
        case 'select':
          var inputContent = <Select data={ item } value={ value } onChange="" />;
          break;
        case 'radio-group':
          var inputContent = <Radio data={ item } value={ value } onChange="" />;
          break;
        case 'checkbox-group':
          var inputContent = <Checkbox data={ item } value={ value } onChange="" />;
          break;
        case 'formbuilder':
          var inputContent = <FormBuilder data={ item } fbsetup={ this.props.data.fbsetup } value={ value } onChange="" />;
          break;
        case 'signature':
          var inputContent = <Signature data={ item } />;
          break;
        case 'header':
          var inputContent = <Header data={ item } />;
          break;
        case 'paragraph':
          var inputContent = <Paragraph data={ item } />;
          break;
        default:
          var inputContent = <Input data={ item } value={ value } onChange="" />;
      }

      formContent.push(inputContent);
    })

    this.formContent = formContent;

  }

  render() {

    var submitButton = "";
    if(!this.props.data.notDefaultButton){
      submitButton = <Button type="submit" text="Enviar" className="btn-success mt-3" align="justify-content-center" />;
    }
    return (
      <form role="form" id={"" + this.props.data.id} ref={"" + this.props.data.formRef} action={"" + this.props.data.action} method={"" + this.props.data.method} encType={"" + this.props.data.enctype} onSubmit={ this.props.onSubmit }>
        { this.formContent }
        { submitButton }
      </form>
    )
  }
}

export default Form;
