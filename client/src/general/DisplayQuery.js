import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import crudServices from "../../app/crud/Services"


class DisplayQuery extends React.Component {

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
              Object.entries(this.props.content.data).map((field,j)=>{
                console.log(field);

                return(
                  <div className="col-lg-6 col-6">
                    <strong key={"" + j }>{field[0]}</strong>
                    <p className="text-muted">
                      {field[1]}
                    </p>
                  </div>
                )
              })
            }
        </div>
    )
  }
}

export default DisplayQuery;
