import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

class Breadcrumb extends React.Component {

  render() {
    return (
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            {
              this.props.data.map((bread,i)=>{
                return(
                  <li className={ "breadcrumb-item " + bread.active } key={"li-bread-" + i }><a key={"href-bread-" + i } href={"" + bread.link }>{ bread.label }</a></li>
                )
              })
            }
          </ol>
        </div>
    )
  }
}

export default Breadcrumb;
