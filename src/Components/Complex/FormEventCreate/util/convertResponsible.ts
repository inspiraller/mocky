import { IConfigFieldset, IConfigFieldsetInputProps, Toptgroups, Toptions } from 'src/types';

import editConfigFieldset from 'src/util/editConfigFieldset';

import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitialPreload, TResponsibleProps } from 'src/store/preload/_initialState';

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitialEventCreate;
  preload: IInitialPreload;
  submitTouched: boolean;
}

type TgetResponsibleAsOptions = (responsible?: TResponsibleProps) => Toptions | undefined;

export const getResponsibleAsOptions: TgetResponsibleAsOptions = responsible => {
  if (responsible) {
    const options: IConfigFieldsetInputProps['options'] = responsible.map(item => ({
      name: `${item.name} ${item.lastname}`,
      value: item.id
    }));
    return options;
  }
  return undefined;
};

type TgetResponsibleOptGroups = (options?: Toptions) => Toptgroups | undefined;

export const getResponsibleOptGroups: TgetResponsibleOptGroups = options => {
  if (options) {
    const me: Toptions = [options.find(item => item.name === 'Ashley Hernandez')] as Toptions;
    const others: Toptions = options.filter(item => item.name !== 'Ashley Hernandez');
    return { me, others };
  }
  return undefined;
};

type TupdateConfigWithResponsible = (props: {
  preload: IInitialPreload;
  config: IConfigFieldset;
}) => IConfigFieldset | null;

export const updateCoordIdWithResponsible: TupdateConfigWithResponsible = ({ preload, config }) => {
  if (preload.responsible && !config.coordinator_id.optgroups) {
    const { responsible } = preload;
    const options = getResponsibleAsOptions(responsible);
    const optgroups = getResponsibleOptGroups(options);
    return optgroups
      ? editConfigFieldset({
          configFieldset: config,
          key: 'coordinator_id',
          childkey: 'optgroups',
          val: optgroups
        })
      : null;
  }
  return null;
};
