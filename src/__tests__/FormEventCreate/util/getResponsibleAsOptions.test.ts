import {
  getResponsibleAsOptions,
  getResponsibleOptGroups
} from 'src/Components/Complex/FormEventCreate/util/convertResponsible';

describe('convertResponsible', () => {
  describe('getResponsibleAsOptions', () => {
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
    it('should convert options into optgroups', () => {
      const options = [
        {
          name: 'john doe',
          value: 30
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
          }
        ]
      });
    });
  });
  
});
