import React, { useEffect, useState, useRef  } from 'react';

import customerServices from "../services/Customer"
import Column from "../../../components/general/Column"
import Row from "../../../components/general/Row"
import Card from "../../../components/general/Card"
import Timeline from "../../../components/general/Timeline"

function Show(props) {

    const timeData = {
      events: [ { id: 'id', title: 'cccccccccccccc', date: '2020-11-03', icon: 'clock', content: 'cccccccccccccc', footer: 'Id' },
                { id: '2', title: 'eeeeeeee', date: '2020-11-03', icon: 'clock', content: 'eeeeeeee', footer: 'Id' },
                { id: '3', title: 'dddddddddd', date: '2020-11-03', icon: 'clock', content: 'dddddddddd', footer: 'Id' },
                { id: '4', title: 'jjjjjjjjjj', date: '2020-11-03', icon: 'clock', content: 'jjjjjjjjjj', footer: 'Id' },
              ],
    };

    const body = <Timeline timeData={ timeData } />

    const data = {
      header: {
        title: 'Información Cliente',
      },
      body: body,
      footer: '',
    };

    const card = <Card data={ data }/>

    const columnData = {
        class: 'col-lg-8 col-8 offset-md-2',
        content: card,
      };

    const column = <Column data={ columnData }/>

    return (
      <Row content={ column }/>
    )
}

export default Show;
