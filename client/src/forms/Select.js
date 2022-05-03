import React, { useEffect, useState } from 'react';
import SelectReact from 'react-select'
import Label from "./Label"

import crudServices from "../../app/crud/Services"

class Select extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isLoading: true,
    }
    this.moduleData = { name: this.props.data.model, model: this.props.data.modelOrigin, fieldOrigin: this.props.data.fieldOrigin};
  }

  async componentDidMount() {
    try{

      this.options = [];
      this.value = [];

      var option = {"value": '', "label": '--Seleccionar--'};
      this.options.push(option);

      switch(this.props.data.origin) {
        case "model":
          var data = await crudServices.options(this.moduleData);

          data.data.map((item,i)=>{
            if(this.props.value == item.id) this.value = {"value": item.id, "label": item[this.props.data.fieldOrigin]};
            var option = {"value": item.id, "label": item[this.props.data.fieldOrigin]};
            this.options.push(option);
          })

          if(data.success == true){
            this.setState({ isLoading: false });
          }
          break;
        case "enum":
          var data = await crudServices.getEnum(this.moduleData);
          data.data.map((item,i)=>{
            if(this.props.value == item.value) this.value = {"value": item.value, "label": item.value};
            var option = {"value": item.value, "label": item.value};
            this.options.push(option);
          })

          if(data.success == true){
            this.setState({ isLoading: false });
          }
          break;
        case 'manual':

          this.props.data.values.map((item,i)=>{
            if(this.props.value == item.value) this.value = {"value": item.value, "label": item.label};
          })

          this.options = this.props.data.values;

          if(this.options){
            this.setState({ isLoading: false });
          }

          break;
        case 'function':
          var fatherId = null;

          if(this.props.data.father){
            var e = document.getElementsByName(this.props.data.father);
            fatherId = e[0].value;
          }

          var list = await crudServices.selectFunction(this.props.data.alias, fatherId);

          list.data.data.map((item,i)=>{
            if(this.props.value == item.id) this.value = {"value": item.id, "label": item.nombre};
            var option = {"value": item.id, "label": item.nombre};
            this.options.push(option);
          })

          if(list.success == true){
            this.setState({ isLoading: false });
          }
          break;
        default:
          this.options = this.props.data.options;
          if(this.options){
            this.setState({ isLoading: false });
          }
      }
    }
    catch (error){
        this.state.isLoading = false;
        this.state.error = error;
    }
  }

  render() {

    const options = [];

    if (this.state.isLoading) {
      return <div className="App">Cargando...</div>;
    }

    return (
      <>
        <div className={"" + (this.props.data.className ? this.props.data.className : '') }>
          <Label data={ this.props.data } />
          <SelectReact options={this.options} name={"" + this.props.data.name } id={"" + this.props.data.name } required={this.props.data.required === "true" ? true : false} defaultValue={ this.value } onChange={ (this.props.onChange) ? this.props.onChange.bind(this) : null } placeholder="--Seleccionar--" />

        </div>
      </>
      /*<SelectReact options={this.options} name={"" + this.props.data.name } id={"" + this.props.data.name } required={this.props.data.required === "true" ? true : false} defaultValue={ this.value } onChange={ (this.props.onChange) ? this.props.onChange.bind(this) : null } placeholder="--Seleccionar--" />
*/
    )
  }
}

export default Select;
