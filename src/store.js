import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/reducer"
import { api } from "./features/api/api"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  },
})

export default store
