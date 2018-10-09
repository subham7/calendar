import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from '../../utils/dates.js';
import './antd.css';

import { Modal, Button } from 'antd';


class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, event : '' }
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,event : ''
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false, event : ''
    });
  }


render() {
  const localizer = BigCalendar.momentLocalizer(moment);
  let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

  return (
    <div style={{ height: 700 }}>
  <BigCalendar
  selectable
  localizer={localizer}
      events={[
        {
          'title': 'My event',
          'allDay': false,
          'start': new Date(2018, 9, 9, 10, 0), // 10.00 AM
          'end': new Date(2018, 9, 9, 14, 0), // 2.00 PM
        }
      ]}
      views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    onSelectEvent={event1 => this.setState({visible : true, event : event1})}
    />
    <Modal
      title={this.state.event.title}
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
    </Modal>
    </div>

);
}
}

export default ShowModal
