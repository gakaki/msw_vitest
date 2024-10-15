import { http, HttpResponse } from "msw";

import { setupServer } from "msw/node";
import { url } from "./sample";
import fs from 'node:fs'

// https://github.com/mswjs/msw/issues/397#issuecomment-751230924
export const apiEndpoint = (path: string) =>
    new URL(path, "https://example.com").toString();

const readJSON = (fileName: string) => {
    const json = fs.readFileSync(`./src/json/metrics_azure.json`, "utf8")
    const obj = JSON.parse(json)
    console.log(obj)
    return obj
}

const mockMetricsAzure = http.get("https://*.ondemand.com/api/metrics/*", () => {
    const json = readJSON("metrics_azure.json")
    return HttpResponse.json(json);
})

const restHandlers = [
    http.get(apiEndpoint("/"), () => {
        return HttpResponse.json({ text: "hello, world" });
    }),
    mockMetricsAzure
];

export const server = setupServer(...restHandlers);
