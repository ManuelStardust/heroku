import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './styles/DnD.css';

class Stepper extends React.Component {

  render() {

    return (
      <>
        <div className="bs-stepper col-lg-10 offset-lg-1">
          <div className="bs-stepper-header" role="tablist">

          {
            this.props.data.map((step,i)=>{
              return(
                <>
                  <div className={ "step " + step.active } data-target={ "#" + step.label } key={"step" + i }>
                    <a type="button" className="step-trigger" role="tab" aria-controls="logins-part" href={"" + step.link } id={ step.label + "logins-part-trigger" } key={"button" + i }>
                      <span className="bs-stepper-circle">{ step.value }</span>
                      <span className="bs-stepper-label">{ step.label }</span>
                    </a>
                  </div>

                  { step.withLine && <div className="line" key={"line" + i }></div>  }

                </>
              )
            })
          }
        </div>
      </div>
    </>
    )
  }
}
export default Stepper;
