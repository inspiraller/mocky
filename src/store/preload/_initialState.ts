// import * as mock from './mock';

export type TResponsibleProps = Array<{
  id: number;
  name: string;
  lastname: string;
  email: string;
}>;

export interface IInitial {
  responsible?: TResponsibleProps; //  Array<{ name: string; value: string }>;
}

const initialState: IInitial = {
  responsible: undefined // mock.responsible MOCK WITH NO INTERNET
};

export default initialState;
