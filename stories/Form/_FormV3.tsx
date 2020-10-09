import React from 'react';
import { IFormWrapperChildren } from './index.stories';

export const args: IFormWrapperChildren = {
  title: 'Lorem ipsum',
  children: <span>form stuff</span>,
  onSubmit: () => {
    console.log('submitted');
  }
};

export default args;
