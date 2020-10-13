import text from 'src/Main/text';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState, TThunkDispatch } from 'src/store/storeTypes';
import { History } from 'history';
import { push } from 'connected-react-router';

import { IInitial as IInitalCreateEvent } from 'src/store/eventCreate/_initialState';
import { IConfigFieldset } from 'src/types';

import { TacEdit, actions as actionsCreateEvent } from 'src/store/eventCreate/actions';
import getFlatAdjacent from 'src/util/getFlatAdjacent';

import { getEachValid } from 'src/Components/Common/Validate/Validate';
import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';
import NotificationStyle from 'src/Components/Common/Notification/NotificationStyle';

import SectionEvent from 'src/Components/Common/SectionEvent/SectionEvent';
import FieldsetAbout, { configFieldset as configFieldsetAbout } from './FieldsetAbout';
import FieldsetCoordinator, {
  configFieldset as configFieldsetCoordinator
} from './FieldsetCoordinator';
import FieldsetWhen, { configFieldset as configFieldsetWhen } from './FieldsetWhen';

const Row = RowBlockStyle();
const Button = ButtonStyle();
const Notification = NotificationStyle();

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitalCreateEvent;
  title: string;
  push: History['push'];
}

type TSubmitEvent = React.FormEvent<HTMLFormElement>;
type TSubmit = (evt: TSubmitEvent) => void;

export const getFormValid = (eventCreate: IInitalCreateEvent) => {
  const allFieldsets: IConfigFieldset = {
    ...configFieldsetAbout,
    ...configFieldsetCoordinator,
    ...configFieldsetWhen
  };

  const flatAdjacent = getFlatAdjacent(allFieldsets);
  const combined = { ...allFieldsets, ...flatAdjacent };

  const isAllValid: boolean = Object.keys(combined).every(inputKey =>
    getEachValid(inputKey, combined[inputKey], eventCreate[inputKey])
  );

  return isAllValid;
};

const FormEventCreate: FC<IFormSetup> = props => {
  const [submitTouched, setSubmitTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const formid = 'eventCreate';
  const { title, eventCreate } = props;

  const onSubmit: TSubmit = evt => {
    evt.preventDefault();
    setSubmitTouched(true);
    const isValid: boolean = getFormValid(eventCreate);
    setValid(isValid);
    if (isValid) {
      props.push('/EventCreated');
    }
  };

  const buttonProp = submitTouched
    ? {
        'data-valid': valid
      }
    : null;

  return (
    <SectionEvent title={text(title)}>
      {submitTouched && valid ? (
        <Notification>
          <h2>Success</h2>
          <p>Event has been created</p>
        </Notification>
      ) : (
        <form onSubmit={onSubmit}>
          <FieldsetAbout {...{ ...props, formid, submitTouched }} />
          <FieldsetCoordinator {...{ ...props, formid, submitTouched }} />
          <FieldsetWhen {...{ ...props, formid, submitTouched }} />
          <Row data-right="true">
            <Button type="submit" {...buttonProp}>
              {text('Publish event')}
            </Button>
          </Row>
        </form>
      )}
    </SectionEvent>
  );
};

const mapDispatchToProps = (dispatch: TThunkDispatch) =>
  bindActionCreators({ ...actionsCreateEvent, push }, dispatch);

export default connect(
  (state: RootState) => ({
    eventCreate: state.eventCreate
  }),
  mapDispatchToProps
)(FormEventCreate);
