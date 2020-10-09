import ReactDOM from 'react-dom';

export type TKeyString = {
  [index: string]: string;
};

export type TDOM = typeof ReactDOM | { render: () => void };
