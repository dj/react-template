/**
 * Setup a mock server with our mock request handlers for tests
 */
import { setupServer } from "msw/node"
import { handlers } from "./handlers"

export const server = setupServer(...handlers)
