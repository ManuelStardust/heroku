import React, { useEffect, useState, useRef  } from 'react';

import customerServices from "../services/Customer"
import Column from "../../../components/general/Column"
import Row from "../../../components/general/Row"
import Card from "../../../components/general/Card"
import Form from "../../../components/forms/Form"
import Button from "../../../components/general/Button"

class New extends React.Component {

  constructor(props) {
    super(props);

    const saveCustomer = async e => {
      e.preventDefault()

        const form = document.getElementById("customerCreate");
        const data = new FormData(form);
        const res = await customerServices.save(data);

        if (res.success) {
          alert(res.message)
        }
        else {
          alert(res.message)
        }
    }

    const dataForm = {
      action: '',
      method: 'POST',
      enctype: 'multipart/form-data',
      id: 'customerCreate',
      formRef: React.createRef(),
      inputs: [
        { type: 'text', name: 'name', label: 'Nombre', placeholder: 'cc', value: '', tooltip: 'Nombre del cliente' },
        { type: 'text', name: 'document', label: 'Documento', placeholder: '', value: '', tooltip: 'Documento del cliente'  },
        { type: 'select', name: 'documentType', label: 'Tipo de Documento', placeholder: '', options: [{ name: 'CC', value: 'CC' }, { name: 'CE', value: 'CE' }, { name: 'NIT', value: 'NIT' }], value: '', tooltip: 'Tipo de documento del cliente' },
        { type: 'textarea', name: 'description', label: 'Descripción', placeholder: '', value: '', tooltip: 'Descripción' },
        { type: 'text', name: 'contact', label: 'Contacto', placeholder: 'Nombre del contacto', value: '', tooltip: 'Nombre del contacto' },
        { type: 'email', name: 'contactEmail', label: 'Correo del Contacto', placeholder: 'Correo del contacto', value: '', tooltip: 'Correo del contacto' },
        { type: 'text', name: 'contactPhone', label: 'Teléfono Contacto', placeholder: 'Teléfono Contacto', value: '', tooltip: 'Teléfono Contacto' },
      ],
      formValues: [],
    };

    const form = <Form data={ dataForm } />;

    const footer = <Button data={ dataForm } onClick={ saveCustomer } type="submit" />;

    const data = {
      header: {
        title: 'Clientes',
      },
      body: form,
      footer: footer,
    };

    const card = <Card data={ data }/>

    const columnData = {
        class: 'col-lg-8 col-8 offset-md-2',
        content: card,
      };

    this.column = <Column data={ columnData }/>

  }

  render() {
    return (
      <Row content={ this.column }/>
    )
  }
}

export default New;
