import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormWrapper, { IFormWrapper } from 'src/Components/Common/Form/FormWrapper';

import { args as argsV1 } from './_FormV1';
import { args as argsV2 } from './_FormV2';
import { args as argsV3 } from './_FormV3';

export interface IFormWrapperChildren extends IFormWrapper {
  children: React.ReactElement;
}

const Template: Story<IFormWrapperChildren> = ({ children, ...rest }) => (
  <FormWrapper {...rest}>{children}</FormWrapper>
);

const FormV1 = Template.bind(argsV1);
FormV1.args = argsV1;
export { FormV1 };

const FormV2 = Template.bind(argsV2);
FormV2.args = argsV2;
export { FormV2 };

const FormV3 = Template.bind(argsV3);
FormV3.args = argsV3;
export { FormV3 };

export default { title: 'Form', component: FormWrapper } as Meta;
