import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const helloContract = c.router({
  getHello: {
    method: "GET",
    path: "/hello",
    responses: {
      200: z.object({
        response: z.string(),
      }),
      500: z.object({
        response: z.string(),
      }),
    },
    summary: "Echo Hello",
  },

  getOneHello: {
    method: "GET",
    path: "/hello/:id",
    pathParams: z.object({
      id: z.coerce.number(),
    }),
    responses: {
      200: z.object({
        response: z.string(),
      }),
      500: z.object({
        response: z.string(),
      }),
    },
    summary: "Echo Hello",
  },
});
