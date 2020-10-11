// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC } from 'react';

import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';

import { IInitial as IInitalCreateEvent } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitalPreload } from 'src/store/preload/_initialState';

// import RowStyle from 'src/Components/Common/Row/RowStyle';
// import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import getAjax from 'src/util/getAjax';

import FieldsetAbout from './FieldsetAbout';
import FieldsetCooridinator from './FieldsetCoordinator';

// const Row = RowStyle();
// const Button = ButtonStyle();

const formid = 'eventCreate';

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitalCreateEvent;
  preload: IInitalPreload;
  title: string;
}

const FormSetup: FC<IFormSetup> = ({ title, acEdit, eventCreate, preload }) => {
  const onSubmit: TSubmit = evt => {
    console.log('onSubmit - evt = ', evt);
  };
  return (
    <FormWrapper title={text(title)} onSubmit={onSubmit}>
      <FieldsetAbout {...{ formid, acEdit, eventCreate }} />
      <FieldsetCooridinator {...{ formid, acEdit, eventCreate, preload }} />
      {/* <Row>
        <Button type="submit" disabled={configFieldset.isSubmitting}>
          {text('Publish')}
        </Button>
      </Row> */}
    </FormWrapper>
  );
};

export default FormSetup;
