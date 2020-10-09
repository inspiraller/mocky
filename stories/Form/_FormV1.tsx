import React from 'react';
import { IFormWrapperChildren } from './index.stories';

export const args: IFormWrapperChildren = {
  title: 'A Title',
  children: <span>Contents of form</span>,
  onSubmit: () => {
    console.log('submitted');
  }
};

export default args;
