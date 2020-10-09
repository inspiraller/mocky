import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TButton } from 'src/Main/Styles/withStyle';
import ButtonStyle from 'src/Components/Common/Button/ButtonStyle';
import { args as argsButton } from './_Button';
import { args as argsSubmit } from './_Submit';

const Button = ButtonStyle();

const Template: Story<TButton> = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

const ButtonBasic = Template.bind(argsButton);
ButtonBasic.args = argsButton;

const ButtonSubmit = Template.bind(argsSubmit);
ButtonSubmit.args = argsSubmit;

export { ButtonBasic, ButtonSubmit };

export default { title: 'Button', component: Button } as Meta;
