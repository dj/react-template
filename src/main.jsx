import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

async function main() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

if (import.meta.env.DEV) {
  // Only mock API endpoints in development mode
  import("./mocks/browser")
    .then(({ worker }) => {
      worker.start()
    })
    .then(main)
} else {
  // Otherwise, just start the app
  main()
}
