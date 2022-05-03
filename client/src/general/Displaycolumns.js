import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import crudServices from "../../app/crud/Services"


class Displaycolumns extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: '',
      newColumn: true,
      modalIsOpen: false,
      totalFields: this.props.content.fields.length,
      columns:  2,
    }

    this.maxFields = Math.ceil(this.state.totalFields/ this.state.columns);

  }

  render() {

    return (
        <div className="row">
            {
              this.props.content.fields.map((field,j)=>{

                var value = this.props.content.data[field.name];

                if(field.origin == "model"){
                  if(this.props.content.data[field.alias]) value = this.props.content.data[field.alias][field.fieldOrigin];

                }

                if(field.type == "file"){
                  var file = this.props.content.data.files.filter(e => e.field === field.name)[0];
                  if(file){
                    value = <><a href={ "/storage/files/" + file.file } target="_blank">{ file.file }</a><a href={ "/storage/files/" + file.file } target="_blank" type="button" className="btn btn-primary btn-sm">Ver Documento</a></>;
                  }
                }

                if(field.type == "textarea"){
                    value = <div dangerouslySetInnerHTML = {{ __html: value }} />;
                }

                if(field.subtype == "url"){
                    value = <a href={ "" + value } target="_blank">{ value }</a>;
                }

                if(field.subtype == "money"){
                    value =  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
                }

                return(
                  <div className="col-lg-6 col-6">
                    <strong key={"" + j }>{field.label}</strong>
                    <p className="text-muted">
                      { value }
                    </p>
                  </div>
                )
              })
            }
        </div>
    )
  }
}

export default Displaycolumns;
