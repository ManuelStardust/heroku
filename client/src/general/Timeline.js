import React, { useEffect, useState } from 'react';

class Timeline extends React.Component {

  render() {

    console.log(this.props);
    return (
      <div className="timeline">
        {
          this.props.data.events.map((event,j)=>{
            return(
              <>
                <div className="time-label">
                  <span className="bg-green">{ event.date }</span>
                </div>

                <div>
                  <i className="fas fa-envelope bg-blue"></i>
                  <div className="timeline-item">
                    <h3 className="timeline-header">{ event.event }</h3>
                    <div className="timeline-body">
                      { event.description }
                    </div>
                    <div className="timeline-footer">
                      <a className="btn btn-primary btn-sm">Ver</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
        <div>
          <i className="fas fa-clock bg-gray"></i>
        </div>
      </div>


    )
  }
}

export default Timeline;
