import { createAction } from 'redux-actions';
import at from './actionTypes';

const acDoThing = createAction(at.DO_THING);

const actions = {
  acDoThing
};

export default actions;
