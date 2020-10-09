import React, { FC, Fragment } from 'react';

type TProps = { title: string };
const Basic: FC<TProps> = ({ title }) => <Fragment>{title}</Fragment>;
export default Basic;
