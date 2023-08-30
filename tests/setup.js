import { expect, afterEach, beforeAll, afterAll } from "vitest"
import { cleanup } from "@testing-library/react"
import matchers from "@testing-library/jest-dom/matchers"
import { server } from "../src/mocks/server.js"

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Run before all tests
beforeAll(() => {
  // Establish API mocking before all tests.
  server.listen()
})

// Run after each test
afterEach(() => {
  // Reset any request handlers that we may add during the tests, so they don't affect other tests.
  server.resetHandlers()
  // Cleanup react testing library.
  cleanup()
})

// Run after all tests
afterAll(() => {
  // Shutdown mock server.
  server.close()
})
