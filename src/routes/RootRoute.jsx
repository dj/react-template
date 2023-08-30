import { useSelector, useDispatch } from "react-redux"
import { incrementCounter, decrementCounter } from "../features/counter/reducer"
import { useGetHelloWorldQuery } from "../features/api/api"

export default function RootRoute() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const { data, error, isFetching, status } = useGetHelloWorldQuery()

  return (
    <>
      <h1>Ada ETL Frontend</h1>

      <h2>RTK Query</h2>
      <p>GET /api/helloworld</p>
      <p>isFetching: {`${isFetching}`} </p>
      <p>status: {status} </p>
      <p>error: {error} </p>
      <p>data: {JSON.stringify(data)}</p>

      <h2>Redux</h2>
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: incrementCounter.type })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: decrementCounter.type })}>
        decrement
      </button>
    </>
  )
}
