import React, { FC } from 'react';

import H1Style from 'src/Components/Common/H1/H1Style';
import FormStyle from './FormStyle';

const H1 = H1Style();
const Form = FormStyle();

type TSubmitEvent = React.FormEvent<HTMLFormElement>;
export type TSubmit = (evt: TSubmitEvent) => void;

export interface IFormWrapper {
  title: string;
  onSubmit: TSubmit;
}

const FormWrapper: FC<IFormWrapper> = ({ children, title, onSubmit }) => {
  return (
    <section>
      <H1>{title}</H1>
      <Form onSubmit={onSubmit}>{children}</Form>
    </section>
  );
};

export default FormWrapper;
