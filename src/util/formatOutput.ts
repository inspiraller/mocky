import { IInitial } from 'src/store/eventCreate/_initialState';

export interface IFormatted {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  coordinator: {
    email: string;
    id: string;
  };
  date: string;
  duration: number;
}

export const getDate = (date: string, time: string): string => `${date}T${time}`;

export const constructCoordinator = (
  coordinator_id: string,
  coordinator_email: string
): IFormatted['coordinator'] => ({
  email: coordinator_email,
  id: coordinator_id
});

const formatOutput = (eventCreate: IInitial): IFormatted => {
  const coordinator: IFormatted['coordinator'] = constructCoordinator(
    eventCreate.coordinator_id as string,
    eventCreate.coordinator_email as string
  );

  const date = getDate(eventCreate.date as string, eventCreate.time as string);

  const output: IFormatted = {
    title: eventCreate.title as string,
    description: eventCreate.description as string,
    category_id: eventCreate.category_id as number,
    paid_event: eventCreate.paid_event as boolean,
    event_fee: eventCreate.event_fee as number,
    reward: eventCreate.reward as number,
    duration: eventCreate.duration as number,
    coordinator,
    date
  };
  return output;
};

export default formatOutput;
