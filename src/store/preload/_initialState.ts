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
  responsible?: TResponsibleProps;
}

const initialState: IInitial = {
  coordinator: undefined,
  responsible: undefined
};

export default initialState;
