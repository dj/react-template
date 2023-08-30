import { setupWorker } from "msw"

import { handlers } from "./handlers"

// Set up mock service worker to respond to HTTP requests with mocked responses
export const worker = setupWorker(...handlers)
