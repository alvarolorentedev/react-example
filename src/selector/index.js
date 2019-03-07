import { createSelector } from 'reselect'

export const counter = state => state.counter

export const counterSquare = createSelector(
    counter,
    value => value * value
  )