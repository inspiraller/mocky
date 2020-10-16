import { IInitial } from 'src/store/eventCreate/_initialState';
import { IConfigFieldset, IConfigFieldsetInputProps } from 'src/types';

import { getEachValid, getRequired } from 'src/Components/Common/Validate/Validate';

let eventCreate: IInitial;
let configFieldset: IConfigFieldset;
let sideitem: IConfigFieldsetInputProps;

const getAdjacent = (
  obj: IConfigFieldset,
  inputKey: string,
  adjacentKey: string
): IConfigFieldsetInputProps => {
  const adjacent = obj[inputKey] && obj[inputKey].adjacent;
  if (adjacent && typeof adjacent === 'object') {
    const adjacentItem: IConfigFieldsetInputProps = adjacent[adjacentKey];
    return adjacentItem || {};
  }
  return {};
};

describe('getEachValid', () => {
  describe('ariaExpandedBy condition met as boolean value', () => {
    beforeAll(() => {
      configFieldset = {
        tickbox: {
          label: 'tickbox',
          ariaExpands: 'sideitem',
          adjacent: {
            sideitem: {
              required: true,
              ariaExpandedBy: {
                id: 'tickbox',
                condition: true
              }
            }
          }
        }
      };
      sideitem = getAdjacent(configFieldset, 'tickbox', 'sideitem');
      eventCreate = {
        tickbox: true,
        sideitem: ''
      };
    });
    it('getRequired() should = true', () => {
      expect(getRequired(eventCreate, sideitem)).toEqual(true);
    });
    it('should validate as required=true', () => {
      expect(
        getEachValid({
          eventCreate,
          inputKey: 'sideitem',
          obj: sideitem
        })
      ).toEqual(false);
    });
  });
  describe('ariaExpandedBy condition NOT met', () => {
    beforeAll(() => {
      eventCreate = {
        tickbox: false,
        sideitem: ''
      };
    });
    it('getRequired() should = false', () => {
      expect(getRequired(eventCreate, sideitem)).toEqual(false);
    });
    it('should valide successfully because required === false', () => {
      expect(
        getEachValid({
          eventCreate,
          inputKey: 'sideitem',
          obj: sideitem
        })
      ).toEqual(true);
    });
  });
  describe('ariaExpandedBy condition met as string value', () => {
    beforeAll(() => {
      eventCreate = {
        tickbox: 'specific string'
      };
      if (sideitem.ariaExpandedBy) {
        sideitem.ariaExpandedBy.condition = 'specific string';
      }
    });
    it('getRequired() should = true', () => {
      expect(getRequired(eventCreate, sideitem)).toEqual(true);
    });
    it('should validate as required=true', () => {
      expect(
        getEachValid({
          eventCreate,
          inputKey: 'sideitem',
          obj: sideitem
        })
      ).toEqual(false);
    });
  });
});
