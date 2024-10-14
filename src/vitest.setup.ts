import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mockServer";

// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
