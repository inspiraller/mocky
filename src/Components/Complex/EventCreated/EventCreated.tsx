import text from 'src/Main/text';
import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'src/store/storeTypes';

import { IInitial as IInitalCreateEvent } from 'src/store/eventCreate/_initialState';

import { getFormValid } from 'src/Components/Complex/FormEventCreate/FormEventCreate';
import formatOutput from 'src/util/formatOutput';

import NotificationStyle from 'src/Components/Common/Notification/NotificationStyle';
import SectionEvent from 'src/Components/Common/SectionEvent/SectionEvent';

const Notification = NotificationStyle();

export interface IEventCreated {
  eventCreate: IInitalCreateEvent;
  title: string;
}

const EventCreated: FC<IEventCreated> = props => {
  const [valid, setValid] = useState(false);
  const { title, eventCreate } = props;

  useEffect(() => {
    if (!valid) {
      const isValid: boolean = getFormValid(eventCreate);
      setValid(isValid);
    } else {
      console.log(formatOutput(eventCreate));
    }
  }, [valid]);

  return (
    <SectionEvent title={text(title)}>
      {valid ? (
        <Notification>
          <h2>Success</h2>
          <p>Event has been created</p>
        </Notification>
      ) : (
        'Form not valid'
      )}
    </SectionEvent>
  );
};

export default connect((state: RootState) => ({
  eventCreate: state.eventCreate
}))(EventCreated);
