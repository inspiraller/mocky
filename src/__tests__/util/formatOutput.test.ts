import { IInitial } from 'src/store/eventCreate/_initialState';
import formatOutput, { IFormatted, getDate, constructCoordinator } from 'src/util/formatOutput';

let eventCreate: IInitial;

describe('formatOutput all ', () => {
  describe('constructCoordinator', () => {
    it('should construct data', () => {
      expect(constructCoordinator('0', 'email@somwhere')).toEqual({
        id: '0',
        email: 'email@somwhere'
      });
    });
  });
  describe('getData', () => {
    it('should output correct date format', () => {
      expect(getDate('date', 'time')).toEqual('dateTtime');
    });
  });
  describe('formateOuput', () => {
    it('should output correct data format', () => {
      eventCreate = {
        ampm: 'am',
        at: undefined,
        category_id: 1,
        date: '2020-11-02',
        description: 'This is my description',
        duration: 2,
        event_fee: undefined,
        paid_event: false,
        coordinator_id: '9',
        coordinator_email: 'janet.stewart@hussa.rs',
        reward: 10,
        time: '14:30',
        title: 'Mr'
      };
      const formatted: IFormatted = formatOutput(eventCreate);
      expect(formatted).toEqual({
        category_id: 1,
        coordinator: { email: 'janet.stewart@hussa.rs', id: '9' },
        date: '2020-11-02T14:30',
        description: 'This is my description',
        duration: 2,
        event_fee: undefined,
        paid_event: false,
        reward: 10,
        title: 'Mr'
      });
    });
  });

});
