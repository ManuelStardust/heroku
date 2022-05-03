import React, { Component, useEffect, useState } from 'react';

import Input from "../forms/Input"
import Number from "../forms/Number"
import Email from "../forms/Email"
import Password from "../forms/Password"
import File from "../forms/File"
import Hidden from "../forms/Hidden"
import Textarea from "../forms/Textarea"
import Areaeditor from "../forms/Areaeditor"
import Select from "../forms/Select"
import Radio from "../forms/Radio"
import Checkbox from "../forms/Checkbox"
import DateField from "../forms/DateField"
import FormBuilder from "../forms/FormBuilder"
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
          var inputContent = <Input data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'number':
          var inputContent = <Number data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'date':
          var inputContent = <DateField data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'email':
          var inputContent = <Email data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'password':
          var inputContent = <Password data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'hidden':
          var inputContent = <Hidden data={ item } value={ value } />;
          break;
        case 'file':
          var inputContent = <File data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'textarea':
          var inputContent = <Textarea data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'areaeditor':
          var inputContent = <Areaeditor data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'select':
          var inputContent = <Select data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'radio':
          var inputContent = <Radio data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'checkbox-group':
          var inputContent = <Checkbox data={ item } value={ value } class="input-group-sm col-lg-2 col-md-6 col-md-12 float-left" onChange={ this.props.data.onChangeFilter } />;
          break;
        case 'formbuilder':
          var inputContent = <FormBuilder data={ item } fbsetup={ this.props.data.fbsetup } value={ value } />;
          break;
        default:
          var inputContent = <Input data={ item } value={ value } class="input-group-sm col-lg-3 col-md-6 col-md-12" onChange={ this.props.data.onChangeFilter } />;
      }

      formContent.push(inputContent);
    })

    this.formContent = formContent;

  }

  render() {
    return (
        <div className="col-md-12" >
          <form role="form" id={"filtersForm"} action="" method={"POST"} ref={ React.createRef() } >
            { this.formContent }
          </form>
        </div>
    )
  }
}

export default Filters;
