import React from 'react';
import { WrapRoot } from '../src/index'; // TODO: module resolution needs fixing

export const decorators = [
  Story => (
    <WrapRoot>
      <Story />
    </WrapRoot>
  )
];
