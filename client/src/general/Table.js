import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

class Table extends React.Component {

  render() {

    return (
      <section>
        <table className="table table-bordred table-striped" id= {"table_" }>
          <thead>
            <tr>
                {
                  this.props.tableContent.fields.map((item,i)=>{
                    return(
                      <th scope="col" key={"" + i }>{item.label}</th>
                    )
                  })
                }
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              this.props.tableContent.data.map((item,i)=>{
                return(
                  <tr key={"" + i }>
                    {
                      this.props.tableContent.fields.map((field,j)=>{

                        var value = item[field.name];

                        if(field.origin == "model"){
                          var get = field.alias;
                          if(item[get]) value = item[get][field.fieldOrigin];
                        }

                        if(field.subtype == "progress"){
                          var progress = "0%";
                          if(item[field.name]){
                            progress = item[field.name] + "%";
                            var progressClass = "bg-danger";

                            if(item[field.name] >= 30 && item[field.name] < 100){
                              progressClass = "bg-warning";
                            }else if(item[field.name] == 100){
                              progressClass = "bg-success";
                            }
                          }
                          value = <><div className="progress progress-xs"><div className={"progress-bar " + progressClass} style={{width: progress}}></div></div>{ progress }</>;
                        }

                        if(field.subtype == "url"){
                          value = <a href={ "" + value } target="_blank">Ver</a>;
                        }

                        if(field.type == "textarea"){
                            value = <div dangerouslySetInnerHTML = {{ __html: value }} />;
                        }

                        if(field.subtype == "money"){
                            value =  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
                        }

                        if(field.type == "file"){
                          value = <><a href={ "/storage/files/" + value } target="_blank">{ value }</a></>;
                        }

                        return(
                          <td key={"" + j }>{ value }</td>
                        )
                      })
                    }

                    <td key={"acciones" + i }>
                    {
                      this.props.tableContent.actions.map((action,j)=>{

                        var show = 0;

                        if(action.conditions){
                          var res = action.conditions.split(";");
                          switch(res[1]) {
                            case '=':
                              if(item[res[0]] === res[2]){
                                show = 1;
                              }
                              break
                            case 'in':
                              if(JSON.stringify(res[2]).includes(item[res[0]])){
                                show = 1;
                              }
                              break
                          }
                        }else{
                          show = 1;
                        }

                        if(show==1){
                          switch(action.type) {
                            case 'link':
                              return(<Link key={"" + j } to={"" + action.link + item.id} className={ "" + action.class } > { action.title } </Link>);
                              break
                            case 'a':
                              return(<a key={"" + j } href="#" className={ "" + action.class } onClick={ () => this.props.tableContent[action.onClick].bind()(item.id) }> { action.title } </a>
);
                              break
                            default:
                              return(<Link key={"" + j } to={"/customer/edit/"+item.id} className="btn btn-light"> { action.title } </Link>);
                          }
                        }
                      })
                    }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </section>
    )
  }
}

export default Table;
