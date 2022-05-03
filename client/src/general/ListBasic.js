import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

class ListBasic extends React.Component {

  render() {

    return (
      <section>
        <ul>
            {
              this.props.tableContent.data.map((item,i)=>{
                return(
                  <li key={"" + i }>
                    {
                      this.props.tableContent.fields.map((field,j)=>{

                        var value = item.[field.name];

                        if(field.origin == "model"){
                          var get = "get_" + field.name.toLowerCase();
                          if(item.[get]) value = item.[get].name;
                        }

                        if(field.subtype == "progress"){
                          var progress = "0%";
                          if(item.[field.name]){
                            progress = item.[field.name] + "%";
                            var progressClass = "bg-danger";

                            if(item.[field.name] >= 30 && item.[field.name] < 100){
                              progressClass = "bg-warning";
                            }else if(item.[field.name] == 100){
                              progressClass = "bg-success";
                            }
                          }
                          value = <><div className="progress progress-xs"><div className={"progress-bar " + progressClass} style={{width: progress}}></div></div>{ progress }</>;
                        }

                        if(field.subtype == "url"){
                          value = <a href={ "" + value } target="_blank">Ver</a>;
                        }

                        return(
                          <td key={"" + j }>{ value }</td>
                        )
                      })
                    }

                  </li>
                )
              })
            }
        </ul>
      </section>
    )
  }
}

export default ListBasic;
