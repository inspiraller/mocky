// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';

import { IInitial as IInitalCreateEvent, TLitVal } from 'src/store/eventCreate/_initialState';
import { TacEdit, actions as actionsCreateEvent } from 'src/store/eventCreate/actions';

import getFlatAdjacent from 'src/util/getFlatAdjacent';
import { IConfigFieldset, IConfigFieldsetInputProps } from 'src/types';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import { validateAll } from 'src/Components/Common/Validate/Validate';

import FieldsetAbout, { configFieldset as configFieldsetAbout } from './FieldsetAbout';
import FieldsetCoordinator, {
  configFieldset as configFieldsetCoordinator
} from './FieldsetCoordinator';
import FieldsetWhen, { configFieldset as configFieldsetWhen } from './FieldsetWhen';

const Row = RowBlockStyle();
const Button = ButtonStyle();

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitalCreateEvent;
  title: string;
}

type TisValid = (inputKey: string, obj: IConfigFieldsetInputProps, value: TLitVal) => boolean;

const isEachValid: TisValid = (inputKey, obj, value) => {
  const error = validateAll({
    label: '',
    value: String(value),
    validate: obj.validate,
    required: obj.required,
    maxLength: obj.maxLength
  });
  return error === '';
};

export const getFormValid = (eventCreate: IInitalCreateEvent) => {
  // import configFieldsets
  const allFieldsets: IConfigFieldset = {
    ...configFieldsetAbout,
    ...configFieldsetCoordinator,
    ...configFieldsetWhen
  };

  const flatAdjacent = getFlatAdjacent(allFieldsets);
  const combined = { ...allFieldsets, ...flatAdjacent };

  const isAllValid: boolean = Object.keys(combined).every(inputKey =>
    // maxLength, required, validate....
    isEachValid(inputKey, combined[inputKey], eventCreate[inputKey])
  );

  return isAllValid;
};
const FormEventCreate: FC<IFormSetup> = props => {
  const [submitTouched, setSubmitTouched] = useState(false);

  const formid = 'eventCreate';
  const { title, eventCreate } = props;

  const onSubmit: TSubmit = evt => {
    evt.preventDefault();
    setSubmitTouched(true);
  };

  const isAllValid = getFormValid(eventCreate);
  console.log('isAllValid =', isAllValid);
  // const isShowErrors = !isAllValid;
  return (
    <FormWrapper title={text(title)} onSubmit={onSubmit}>
      <FieldsetAbout {...{ ...props, formid, submitTouched }} />
      <FieldsetCoordinator {...{ ...props, formid, submitTouched }} />
      <FieldsetWhen {...{ ...props, formid, submitTouched }} />
      <Row>
        <Button type="submit" data-valid={!submitTouched || isAllValid}>
          {text('Publish')}
        </Button>
      </Row>
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
