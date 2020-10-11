export type TAt = {
  [key: string]: string;
};

const at: TAt = {
  POPULATE_COORDINATOR: '@preload/PopulateCoordinator',
  POPULATE_RESPONSIBLE: '@preload/PopulateResponsible'
};

export default at;
