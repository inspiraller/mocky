import { IInitial } from 'src/store/eventCreate/_initialState';
import formatOutput, { IFormatted } from 'src/util/formatOutput';

let eventCreate: IInitial;

describe('formatOutput', () => {
  beforeAll(() => {
    eventCreate = {
      ampm: 'am',
      at: undefined,
      category_id: 0,
      date: '2020-10-29',
      description: 'This is my description',
      duration: 8,
      event_fee: undefined,
      paid_event: false,
      coordinator_id: '4',
      coordinator_email: 'ashley.hernandez@hussa.rs',
      reward: 70,
      time: '18:50',
      title: 'Mr'
    };
  });
  it('should output correct data format', () => {
    const formatted: IFormatted = formatOutput(eventCreate);
    expect(formatted).toEqual(false);
  });
});
