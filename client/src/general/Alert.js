import React, { useEffect, useState } from 'react';

class Alert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var message = '';
    var type = '';

    switch(this.props.data) {
      case 'created':
        message = "El registro se creo correctamente.";
        type = "alert-success";
        break;
      case 'updated':
        message = "El registro se actualizo correctamente.";
        type = "alert-warning";
        break;
      case 'deleted':
        message = "El registro se elimino correctamente.";
        type = "alert-danger";
        break;
      case 'payment':
          message = "Los datos de registro no se encuentran completos, por favor actualizarlos para continuar con el proceso de pago.";
          type = "alert-danger";
          break;
      default:
        message = "";
        type = "alert-info";
    }

    return (
        <div className="col-md-12">
          <div className={"alert alert-dismissible " + type }>
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h5><i className="icon fas fa-exclamation-triangle"></i> Notificación </h5>
              { message }
          </div>
        </div>
    )
  }
}

export default Alert;
