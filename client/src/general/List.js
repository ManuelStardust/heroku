import React, { useEffect, useState } from 'react';

import crudServices from "../../app/crud/Services"
import moduleServices from "../../app/general/services/Module"

import Column from "../../components/general/Column"
import Row from "../../components/general/Row"
import Card from "../../components/general/Card"
import Table from "../../components/general/Table"
import DeleteModal from "../../components/general/DeleteModal"
import Button from "../../components/general/Button"
import Filters from "../../components/general/Filters"
import Paginator from "../../components/general/Paginator"

import { Link } from "react-router-dom";

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: '',
      elementsList: [],
      moduleData: { name: this.props.data.module },
      modalIsOpen: false,
    }

    this.onDelete = async (id) => {

      //this.setState({ modalIsOpen: true});
      var yes = confirm("Confirme si desea inactivar el elemento.");
      if (yes === true){

        const res = await crudServices.delete(id, this.state.moduleData);

        if (res.success) {
          const res = await crudServices.list(this.state.moduleData, [], 1, this.props.data.prefilter);
          this.setState({ elementsList: res.data });
        }
        else{
          alert(res.message);
        }
      }
    }

    this.onChangeFilter = async (e) => {
        const form = document.getElementById("filtersForm");
        const dataFilter = new FormData(form);
        const page = 1;
        const rest = await crudServices.list(this.state.moduleData, dataFilter, page, this.props.data.prefilter);
        this.setState({ elementsList: rest.data});
        this.setState({ pages: rest.pagesTotal });
    }

    this.onChangePage = async (page, e) => {
        const form = document.getElementById("filtersForm");
        const dataFilter = new FormData(form);
        const rest = await crudServices.list(this.state.moduleData, dataFilter, page, this.props.data.prefilter);
        this.setState({ elementsList: rest.data});
        this.setState({ currentPage: page });
    }

  }

  async componentDidMount() {
    try{
        const moduleData = await crudServices.getModule(this.state.moduleData);
        if(moduleData.success == true){
            this.setState({ moduleData: {
                name: this.state.moduleData.name,
                model: moduleData.data.model,
                fields: moduleData.data.fields.filter(e => e.list === true),
                filters: moduleData.data.fields.filter(e => e.filter === true),
                actions: moduleData.data.actions,
                props: moduleData.data.props
              }
            });

            const res = await crudServices.list(this.state.moduleData, [], 1, this.props.data.prefilter);

            this.setState({ elementsList: res.data });
            this.setState({ pages: res.pagesTotal });

            if(res.success == true){
              this.setState({ isLoading: false });
            }
        }


    }
    catch (error){
      this.setState({ isLoading: false});
      this.setState({ error: error});
    }
  }

  onCloseModal(e){
    this.setState({ modalIsOpen: false});
  }

  render() {

    var header = [];
    var content = [];
    var cardBody = [];

    if (this.state.isLoading) {
      return <div className="App">Cargando...</div>;
    }

    const filtersData = {
      fields: this.state.moduleData.filters,
      formValues: [],
      onChangeFilter: this.onChangeFilter,
    }

    const filters = <Filters data={ filtersData } />
    cardBody.push(filters);

    var tableContent = {
        fields: this.state.moduleData.fields,
        data: this.state.elementsList,
        actions: this.state.moduleData.actions.filter(e => e.list === "true"),
        onDelete: this.onDelete,
      };

    if((this.props.data.functions) && (this.props.data.functions.saveReviewer)){
      tableContent.saveReviewer = this.props.data.functions.saveReviewer;
    }

    if((this.props.data.functions) && (this.props.data.functions.setReviewer)){
      tableContent.setReviewer = this.props.data.functions.setReviewer;
    }

    if((this.props.data.functions) && (this.props.data.functions.saveAudit)){
      tableContent.saveAudit = this.props.data.functions.saveAudit;
    }

    if((this.props.data.functions) && (this.props.data.functions.setAudit)){
      tableContent.setAudit = this.props.data.functions.setAudit;
    }

    if((this.props.data.functions) && (this.props.data.functions.reviewerChange)){
      tableContent.reviewerChange = this.props.data.functions.reviewerChange;
    }

    const table = <Table tableContent={tableContent} />;
    cardBody.push(table);

    const paginator = <Paginator pages={ this.state.pages } currentPage={ this.state.currentPage } onClick={ this.onChangePage } />;

    var data = {
      header: {
        title: "Lista de " + this.state.moduleData.props.label.plural,
        name: this.state.moduleData.name,
        actions: this.state.moduleData.actions.filter(e => e.header === "true"),
        linkComplement: this.props.data.linkComplement,
      },
      body: cardBody,
      footer: paginator,
    };

    if(this.props.data.title) data.header.title = this.props.data.title;

    const card = <Card data={ data }/>

    const columnData = {
        class: 'col-lg-12 col-12',
        content: card,
      };

    const column = <Column data={ columnData }/>

    return (
      <>
        <Row content={ column }/>
        <DeleteModal isOpen={ this.state.modalIsOpen } onClose={ this.onCloseModal.bind(this) }/>
        <Button onClick={ this.onDelete.bind(this) } />

      </>
    )
  }
}

export default List;
