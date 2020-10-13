import * as mock from './mock';

export type TCoordinatorProps = Array<{
  id: number;
  name: string;
}>;

export type TResponsibleProps = Array<{
  id: number;
  name: string;
  lastname: string;
  email: string;
}>;

export interface IInitial {
  coordinator?: TCoordinatorProps;
  responsible?: TResponsibleProps; //  Array<{ name: string; value: string }>;
}

const initialState: IInitial = {
  coordinator: undefined, // mock.coordinator, MOCK WITH NO INTERNET
  responsible: undefined // mock.responsible MOCK WITH NO INTERNET
};

export default initialState;
