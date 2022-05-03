import React from 'react';

import Modal from './Modal';

class DeleteModal extends React.Component {

  render() {

  return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <div className="DeleteBadgeModal">
          <h1>Atención</h1>
          <p>Confirme si desea inactivar el elemento seleccionado.</p>

          <div>
            <button onClick={ this.props.onDelete } className="btn btn-danger mr-4">
              Eliminar
            </button>
            <button onClick={ this.props.onClose } className="btn btn-primary">
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default DeleteModal;
