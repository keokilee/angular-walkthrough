import { Reducer, Action } from '@ngrx/store'

import { Guest } from '../models/guest'

export const ADD_GUEST = 'ADD_GUEST'

export const guests: Reducer<Guest[]> = (state: Guest[] = [], action: Action) => {
  switch (action.type) {
    case ADD_GUEST:
      state.push(action.payload)
      return state
    default:
      return state
  }
}
