import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

class CardHeader extends React.Component {
  render() {
    const actions = [];

    if(this.props.header.actions){
      this.props.header.actions.map((action,j)=>{
          let actionContent = "";

          var show = 0;

          if(action.conditions){
            var res = action.conditions.split(";");
            switch(res[1]) {
              case '=':
                if(item[res[0]] === res[2]){
                  show = 1;
                }
                break
            }
            console.log(res[0]);
          }else{
            show = 1;
          }

          if(show==1){
            switch(action.type) {
              case 'link':

                var linkComplement = "";
                var linkTarget = "";
                if(this.props.header.linkComplement) linkComplement = this.props.header.linkComplement;
                if(action.target) linkTarget = action.target;

                actionContent = <Link key={"" + j } to={"" + action.link + linkComplement } className={ "" + action.class } target={ "" + linkTarget } > { action.title } </Link>;
                break
              case 'a':
                actionContent = <a key={"" + j } href="#" className={ "" + action.class  } onClick={ () => this.props.header.functions[action.onClick].bind()(this.props.header.linkComplement) }> { action.title } </a>;
                break
              default:
                actionContent = <Link key={"" + j } to={"/customer/edit/"+item.id} className="btn btn-light"> { action.title } </Link>;
            }
            actions.push(actionContent)
          }
      })
    }

    return (
        <div className="card-header">
          <h3 className="card-title"> { this.props.header.title } </h3>
          <div className="card-tools">
            <div className="btn-group">
              { actions }
              { this.props.header.extra }
            </div>
            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
            </button>
          </div>
        </div>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
      { this.props.body }
      </div>
    )
  }
}


class CardFooter extends React.Component {
  render() {
    return (
      <div className="card-footer">
      { this.props.footer }
      </div>
    )
  }
}


class Card extends React.Component {

  render() {
    return (
      <div className={ "card card-outline card-info " + this.props.data.class }>
        <CardHeader header={ this.props.data.header } />
        <CardBody  body={ this.props.data.body } />
        <CardFooter footer={ this.props.data.footer } />
      </div>
    )
  }
}

export default Card;
