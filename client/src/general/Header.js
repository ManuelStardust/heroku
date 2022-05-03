import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Breadcrumb from "./Breadcrumb"

class Header extends React.Component {

  componentDidMount(){
    var headerContent = $("#content-header-component").html();
    $("#content-header-component").html('');
    $("#content-header").html(headerContent);
  }

  render() {

    return (
      <div id="content-header-component">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{ this.props.data.title }</h1>
          </div>
            <Breadcrumb data={ this.props.data.breadcrumb } />
        </div>
      </div>
    )
  }
}
export default Header;
