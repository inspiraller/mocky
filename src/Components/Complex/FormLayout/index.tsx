// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';

import { IConfigForm } from 'src/store/eventCreate/configForm';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

// import RowStyle from 'src/Components/Common/Row/RowStyle';
// import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import FieldAbout from './FieldAbout';

// const Row = RowStyle();
// const Button = ButtonStyle();

export interface IFormSetup {
  acEdit: TacEdit;
  eventCreate: IInitial;
  configForm: IConfigForm;
  title: string;
}

const FormSetup: FC<IFormSetup> = ({ title, configForm, acEdit, eventCreate }) => {
  const onSubmit: TSubmit = evt => {
    console.log('onSubmit - evt = ', evt);
  };
  const formid = uuidv4();
  return (
    <FormWrapper title={text(title)} onSubmit={onSubmit}>
      <FieldAbout {...{ formid, configForm, acEdit, eventCreate }} />
      {/* <Row>
        <Button type="submit" disabled={configForm.isSubmitting}>
          {text('Publish')}
        </Button>
      </Row> */}
    </FormWrapper>
  );
};

export default FormSetup;
