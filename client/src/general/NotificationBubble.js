import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

class NotificationBubble extends React.Component {

    render() {
      return (
        <a className="nav-link" data-toggle="dropdown" href="/crud/notificaciones/list" aria-expanded="false">
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
      )
    }
}

export default NotificationBubble;
ReactDOM.render(<NotificationBubble />, document.getElementById('notification-bubble'));
