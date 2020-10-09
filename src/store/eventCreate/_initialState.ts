export type TLitVal = string | number | boolean;

export interface IInitial {
  [key: string]: TLitVal;
}

const initialState: IInitial = {
  title: '',
  description: '',
  category_id: -1,
  payment: 'paid event',
  reward: 0
};

export default initialState;
