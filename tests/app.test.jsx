import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import App from "../src/App"

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />)

    expect(screen.getByText("Ada ETL Frontend")).toBeInTheDocument()
  })
})
