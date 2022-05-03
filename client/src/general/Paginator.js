import React, { useEffect, useState } from 'react';

class Paginator extends React.Component {

  render() {

    var items = [];

    let pages = 1;
    let maxPages = 8;
    let pageStart = 1;
    let pageEnd = 1;

    if(this.props.pages > maxPages){
      pageEnd = maxPages;
      if(this.props.currentPage > maxPages/2){
        pageStart = this.props.currentPage - (maxPages/2);
        pageEnd = this.props.currentPage + (maxPages/2);
      }

      if(this.props.currentPage > this.props.pages - (maxPages/2)){
        pageStart = this.props.pages - (maxPages/2);
        pageEnd = this.props.pages;
      }
    }else{
      pageEnd = this.props.pages;
    }


    if(this.props.pages > maxPages && this.props.currentPage > (maxPages/2)){
      items.push(<li className={ "page-item " + active }><a className="page-link" href="#" onClick={ this.props.onClick.bind(this, 1) }>1</a></li>)
      items.push(<li className={ "page-item " + active }><a className="page-link" href="#" onClick={ '' }>...</a></li>)
    }

    for (var i = pageStart; i <= pageEnd; i++) {
      var active = '';
      if(this.props.currentPage === i){
         active = 'active';
      }
      items.push(<li className={ "page-item " + active }><a className="page-link" href="#" onClick={ this.props.onClick.bind(this, i) }>{ i }</a></li>)
    }

    if(this.props.pages > maxPages && this.props.currentPage < this.props.pages - (maxPages/2)){
      items.push(<li className={ "page-item " + active }><a className="page-link" href="#" onClick={ '' }>...</a></li>)
      items.push(<li className={ "page-item " + active }><a className="page-link" href="#" onClick={ this.props.onClick.bind(this, this.props.pages) }>{ this.props.pages }</a></li>)
    }


    return (
      <ul className="pagination pagination-sm m-0 float-right">
        <li className="page-item"><a className="page-link" href="#">«</a></li>
        { items }
        <li className="page-item"><a className="page-link" href="#">»</a></li>
      </ul>
    )
  }
}

export default Paginator;
