import React from 'react';
import { IFormWrapperChildren } from './index.stories';

export const args: IFormWrapperChildren = {
  title: 'Some Event',
  children: <span>Contents 2</span>,
  onSubmit: () => {
    console.log('submitted');
  }
};

export default args;
