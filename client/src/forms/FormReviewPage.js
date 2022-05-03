import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

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
import FormBuilder from "./FormBuilder"
import Button from "../../components/general/Button"


class FormReviewPage extends React.Component {

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
        case 'checkbox-group':
          var inputContent = <Checkbox data={ item } value={ value } />;
          break;
        case 'formbuilder':
          var inputContent = <FormBuilder data={ item } fbsetup={ this.props.data.fbsetup } value={ value } />;
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
      <form role="form" id={"" + this.props.data.id} ref={"" + this.props.data.formRef} action={"" + this.props.data.action} method={"" + this.props.data.method} encType={"" + this.props.data.enctype}>
        { this.formContent }

        <Button onClick={ this.props.actions.saveContinue } text="Guardar y Agregar Módulo" className="btn-info" />
        <Button onClick={ this.props.actions.saveFinish } text="Guardar y Publicar" className="btn-success" />

      </form>
    )
  }
}

export default FormReviewPage;
