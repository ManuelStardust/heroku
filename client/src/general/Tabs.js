import React from 'react';

class Tabs extends React.Component {

  render() {
    return (
      <div className="card card-primary card-outline card-outline-tabs">

        <div className="card-header p-0 border-bottom-0">
          <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
          {
            this.props.data.map((tab,i)=>{
              var active = '';
              var selected = '';
              if(i == 0) active = 'active';
              if(i == 0) selected = 'selected';

              return(
                <>
                  <li className="nav-item" key={"step" + i } >
                    <a className={"nav-link " + active } id={"tab_" + i } data-toggle="pill" href={"#content_" + i } key={"nav-link" + i } role="tab" aria-controls={"#control" + i } aria-selected={"" + selected } >
                      { tab.name }
                    </a>
                  </li>

                </>
              )
            })
          }
          </ul>
        </div>

        <div className="card-body">
          <div className="tab-content" id="Contenttab_">
          {
            this.props.data.map((tab,i)=>{
              var active = '';
              if(i == 0) active = 'show active';

              return(
                <>
                    <div className={"tab-pane fade " + active } id={"content_" + i } key={"tab-pane" + i } role="tabpanel" aria-labelledby={"labelledby" + i }>
                      { tab.content }
                    </div>
                </>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs;
