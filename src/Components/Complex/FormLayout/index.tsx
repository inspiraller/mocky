// import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment
import text from 'src/Main/text';
import React, { FC } from 'react';
import FormWrapper, { TSubmit } from 'src/Components/Common/Form/FormWrapper';
import { TValidate, validateNotEmpty, validateLength } from 'src/Components/Common/Validate/Validate';

// import RowStyle from 'src/Components/Common/Row/RowStyle';
// import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';

import FieldAbout from './FieldAbout';

// const Row = RowStyle();
// const Button = ButtonStyle();

export interface IFormState {
  isSubmitting: boolean;
  inputs: {
    [key: string]: {
      type?: string;
      validate?: TValidate;
      required?: boolean;
      options?: Array<{ name: string; value: number }>;
      radios?: string[];
      adjacent?: string;
      maxLength?: number;
    };
  };
}

const configFormState: IFormState = {
  isSubmitting: false,
  inputs: {
    title: {
      required: true
    },
    description: {
      type: 'textarea',
      required: true,
      maxLength: 140
    },
    category: {
      type: 'select',
      options: [
        { name: text('rock'), value: 0 },
        { name: text('indie'), value: 1 },
        { name: text('accoustic'), value: 2 }
      ]
    },
    payment: {
      type: 'radio',
      radios: [text('Free event'), text('Paid event')]
    },
    reward: {
      validate: validateNotEmpty,
      adjacent: text('reward points for attendance')
    }
  }
};

const FormSetup: FC = () => {
  const onSubmit: TSubmit = evt => {
    console.log('onSubmit - evt = ', evt);
  };

  return (
    <FormWrapper title={text('New Event')} onSubmit={onSubmit}>
      <FieldAbout {...{ formState: configFormState }} />
      {/* <Row>
        <Button type="submit" disabled={formState.isSubmitting}>
          {text('Publish')}
        </Button>
      </Row> */}
    </FormWrapper>
  );
};

export default FormSetup;
