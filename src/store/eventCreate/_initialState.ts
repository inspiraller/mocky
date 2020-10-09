export interface IInitial {
  [key: string]: string;
}

const initialState: IInitial = {
  title: '',
  description: '',
  category: '',
  payment: 'paid event',
  reward: ''
};

export default initialState;
