export type TAll = Array<Array<string>>;
export type TInitial = {
  all: TAll;
};

const initialState: TInitial = {
  all: [['hello', 'world']]
};

export default initialState;
