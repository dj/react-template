// Example of using redux-toolkit to create actions and reducer
import { createAction } from "@reduxjs/toolkit"

export const incrementCounter = createAction("counter/increment")
export const decrementCounter = createAction("counter/decrement")

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case incrementCounter.type:
      return state + 1
    case decrementCounter.type:
      return state - 1
    default:
      return state
  }
}
