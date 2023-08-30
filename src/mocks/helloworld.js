import { rest } from "msw"

export const helloworldHandler = rest.get(
  "/api/helloworld",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Hello World!" }))
  },
)
