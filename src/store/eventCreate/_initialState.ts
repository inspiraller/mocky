export type TLitVal = string | number | boolean | undefined;

export interface IInitial {
  [key: string]: TLitVal;
}

const initialState: IInitial = {
  title: '',
  description: '',
  category_id: -1,
  paid_event: 'paid event',
  event_fee: undefined,
  reward: 0,
  responsible: undefined,
  email: undefined
};

export default initialState;
