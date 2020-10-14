import { IConfigFieldset } from 'src/types';
import {
  getResponsibleAsOptions,
  getResponsibleOptGroups,
  updateCoordIdWithResponsible
} from 'src/Components/Complex/FormEventCreate/util/convertResponsible';

describe('convertResponsible', () => {
  describe('getResponsibleAsOptions', () => {
    it('should NOT try to convert responsible if not existing', () => {
      const result = getResponsibleAsOptions(undefined);
      expect(result).toEqual(undefined);
    });
    it('should convert responsible into options format', () => {
      const responsible = [
        {
          name: 'john',
          lastname: 'doe',
          id: 30,
          email: 'somthing@ss.com'
        }
      ];
      const converted = [
        {
          name: 'john doe',
          value: 30
        }
      ];
      const result = getResponsibleAsOptions(responsible);
      expect(result).toEqual(converted);
    });
  });
  describe('getResponsibleOptGroups', () => {
    it('should NOT try to convert responsible if not existing', () => {
      const result = getResponsibleOptGroups(undefined);
      expect(result).toEqual(undefined);
    });
    it('should convert options into optgroups', () => {
      const options = [
        {
          name: 'john doe',
          value: 30
        },
        {
          name: 'mary contrary',
          value: 12
        },
        {
          name: 'Ashley Hernandez',
          value: 3
        }
      ];

      const result = getResponsibleOptGroups(options);
      expect(result).toEqual({
        me: [
          {
            name: 'Ashley Hernandez',
            value: 3
          }
        ],
        others: [
          {
            name: 'john doe',
            value: 30
          },
          {
            name: 'mary contrary',
            value: 12
          }
        ]
      });
    });
    describe('updateCoordIdWithResponsible', () => {
      it('should NOT try to get - updateCoordIdWithResponsible - if reponsible undefined', () => {
        const result = updateCoordIdWithResponsible({
          preload: {
            responsible: undefined
          },
          config: {
            coordinator_id: {
              optgroups: undefined
            }
          }
        });
        expect(result).toEqual(null);
      });
      it('should get - updateCoordIdWithResponsible - if reponsible empty', () => {
        const result = updateCoordIdWithResponsible({
          preload: {
            responsible: []
          },
          config: {
            coordinator_id: {
              optgroups: undefined
            }
          }
        });
        expect(result).toEqual({ coordinator_id: { optgroups: { me: [undefined], others: [] } } });
      });
      it('should convert responsible into options format', () => {
        const configFieldset: IConfigFieldset = {
          coordinator_id: {
            optgroups: undefined
          }
        };

        const responsible = [
          {
            name: 'john',
            lastname: 'doe',
            id: 30,
            email: 'somthing@ss.com'
          },
          {
            name: 'Ashley',
            lastname: 'Hernandez',
            id: 3,
            email: 'somthing@ss.com'
          },
          {
            name: 'mary',
            lastname: 'contrary',
            id: 12,
            email: 'somthing@ss.com'
          }
        ];

        const converted: IConfigFieldset | null = updateCoordIdWithResponsible({
          preload: { responsible },
          config: configFieldset
        });
        expect(converted).toEqual({
          coordinator_id: {
            optgroups: {
              me: [
                {
                  name: 'Ashley Hernandez',
                  value: 3
                }
              ],
              others: [
                {
                  name: 'john doe',
                  value: 30
                },
                {
                  name: 'mary contrary',
                  value: 12
                }
              ]
            }
          }
        });
      });
    });
  });
});
