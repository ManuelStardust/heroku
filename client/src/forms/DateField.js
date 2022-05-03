import React, { useEffect, useState } from 'react';
import Label from "./Label"

require("jquery-ui-sortable");

class DateField extends React.Component {

  componentDidMount() {
    datepicker("#" + this.props.data.name, {
      formatter: (input, date, instance) => {
        const value = date.getFullYear() + "-" + this.appendLeadingZeroes((date.getMonth() + 1)) + "-" + this.appendLeadingZeroes(date.getDate());
        input.value = value;
      }
    });
  }

  appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }

  render() {

    return (
      <div className={"form-group " + this.props.class } >
        <Label data={ this.props.data } />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
          </div>
          <input type="text" id={"" + this.props.data.name } name={"" + this.props.data.name } className="form-control datepickert" defaultValue={"" + this.props.value } onChange={ (this.props.onChange) ? this.props.onChange.bind(this) : null }/>
        </div>
      </div>
    )
  }
}

export default DateField;
