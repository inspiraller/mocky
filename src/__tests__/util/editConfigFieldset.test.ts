import { IConfigFieldset } from 'src/types';

import editConfigFieldset from 'src/util/editConfigFieldset';

describe('editConfigFieldset', () => {
  it('should update - label', () => {
    const configFieldset: IConfigFieldset = {
      id: {
        label: 'some label'
      }
    };
    const newValue = 'new name';
    const edited = editConfigFieldset({
      configFieldset,
      key: 'id',
      childkey: 'label',
      val: newValue
    });
    expect(edited.id.label).toEqual(newValue);
  });
  it('should update - optgroups', () => {
    const configFieldset: IConfigFieldset = {
      id: {
        optgroups: {
          groupname: [{ name: 'fruit', value: '0' }]
        }
      }
    };
    const newValue = {
      groupname: [{ name: 'fruit', value: '2' }]
    };
    const edited = editConfigFieldset({
      configFieldset,
      key: 'id',
      childkey: 'optgroups',
      val: newValue
    });
    expect(edited.id.optgroups).toEqual(newValue);
  });
});
