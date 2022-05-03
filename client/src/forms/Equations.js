import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../general/styles/DnD.css';

class Draggable extends React.Component {

  onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);

    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    const id = event.dataTransfer.getData('text');

      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
      event.dataTransferclearData();
  }

  render() {
    return (
      <>
      <div className="example-parent">
        <div className="example-origin">
          <div
            id="draggable-1"
            className="example-draggable"
            draggable="true"
            onDragStart={ this.onDragStart.bind(event) }
          >
            draggable
          </div>
        </div>

        <div className="example-dropzone" onDragOver={ this.onDragOver.bind(event) } onDrop={ this.onDrop.bind(event) } >
          dropzone
        </div>
      </div>
    </>
    )
  }
}
export default Draggable;
