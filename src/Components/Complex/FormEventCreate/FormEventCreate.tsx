// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';

import { IInitial as IInitalCreateEvent } from 'src/store/eventCreate/_initialState';
import { TacEdit, actions as actionsCreateEvent } from 'src/store/eventCreate/actions';

// import RowStyle from 'src/Components/Common/Row/RowStyle';
// import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import FieldsetAbout from './FieldsetAbout';
import FieldsetCoordinator from './FieldsetCoordinator';
import FieldsetWhen from './FieldsetWhen';

// const Row = RowStyle();
// const Button = ButtonStyle();

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitalCreateEvent;
  title: string;
}

const FormEventCreate: FC<IFormSetup> = props => {
  const onSubmit: TSubmit = evt => {
    console.log('onSubmit - evt = ', evt);
  };
  const formid = 'eventCreate';
  const { title } = props;
  return (
    <FormWrapper title={text(title)} onSubmit={onSubmit}>
      <FieldsetAbout {...{ ...props, formid }} />
      <FieldsetCoordinator {...{ ...props, formid }} />
      <FieldsetWhen {...{ ...props, formid }} />
      {/* <Row>
        <Button type="submit" disabled={configFieldset.isSubmitting}>
          {text('Publish')}
        </Button>
      </Row> */}
    </FormWrapper>
  );
};

const mapDispatchToProps = (dispatch: TThunkDispatch) =>
  bindActionCreators({ ...actionsCreateEvent }, dispatch);

export default connect(
  (state: RootState) => ({
    eventCreate: state.eventCreate
  }),
  mapDispatchToProps
)(FormEventCreate);
