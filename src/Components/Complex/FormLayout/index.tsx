// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC } from 'react';

import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

// import RowStyle from 'src/Components/Common/Row/RowStyle';
// import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import FieldsetAbout from './FieldsetAbout';
import FieldsetCooridinator from './FieldsetCoordinator';

// const Row = RowStyle();
// const Button = ButtonStyle();

const formid = 'eventCreate';

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitial;
  title: string;
}

const FormSetup: FC<IFormSetup> = ({ title, acEdit, eventCreate }) => {
  const onSubmit: TSubmit = evt => {
    console.log('onSubmit - evt = ', evt);
  };
  return (
    <FormWrapper title={text(title)} onSubmit={onSubmit}>
      <FieldsetAbout {...{ formid, acEdit, eventCreate }} />
      <FieldsetCooridinator {...{ formid, acEdit, eventCreate }} />
      {/* <Row>
        <Button type="submit" disabled={configFieldset.isSubmitting}>
          {text('Publish')}
        </Button>
      </Row> */}
    </FormWrapper>
  );
};

export default FormSetup;
