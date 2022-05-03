import React, { Component, useEffect, useState } from 'react';
import Input from "./Input"

class Dashboard extends React.Component {

  constructor(props) {

    super(props);

    var formContent = [];

    this.props.data.inputs.map((item,i)=>{

      switch(item.type) {
        case 'text':
          var inputContent = <Input data={ item } />;
          break;
        case 'number':
          var inputContent = <Number data={ item } />;
          break;
        case 'date':
          var inputContent = <Date data={ item } />;
          break;
        case 'email':
          var inputContent = <Email data={ item } />;
          break;
        case 'password':
          var inputContent = <Password data={ item } />;
          break;
        case 'file':
          var inputContent = <File data={ item } />;
          break;
        case 'textarea':
          var inputContent = <Textarea data={ item } />;
          break;
        case 'areaeditor':
          var inputContent = <Areaeditor data={ item } />;
          break;
        case 'select':
          var inputContent = <Select data={ item } />;
          break;
        case 'radio':
          var inputContent = <Radio data={ item } />;
          break;
        case 'checkbox':
          var inputContent = <Checkbox data={ item } />;
          break;
        default:
          var inputContent = <Input data={ item } />;
      }

      formContent.push(inputContent)
    })

    this.formContent = formContent;
  }

  render() {

    return (
      <form role="form" id={"" + this.props.data.id} ref={"" + this.props.data.formRef} action={"" + this.props.data.action} method={"" + this.props.data.method} encType={"" + this.props.data.enctype}>
        { this.formContent }
      </form>

    )
  }
}

export default Dashboard;
