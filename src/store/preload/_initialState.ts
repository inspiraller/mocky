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
  coordinator: mock.coordinator, // undefined, //TODO - REVERT AFTER TESTIG WITH NO INTERNET
  responsible: mock.responsible // undefined //TODO - REVERT AFTER TESTIG WITH NO INTERNET
};

export default initialState;
