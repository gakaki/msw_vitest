import { http, HttpResponse } from "msw";
import { expect, test } from "vitest";
import { fetchExample, getMetricsAzureAxios, getMetricsAzureFetch } from "./sample";
import { server } from "./mockServer";

test("use msw", async () => {
    const res = await fetchExample();
    expect(await res.json()).toEqual({ text: "hello, world" });
});

test("custom response", async () => {
    const result = { text: "hello, msw" }
    server.use(
        http.get("https://example.com", () => {
            return HttpResponse.json(result);
        }),
    );

    const res = await fetchExample();
    expect(await res.json()).toEqual(result);
})

test("request data length", async () => {

    let data = await getMetricsAzureFetch();
    // let data = await getMetricsAzureAxios();
    console.log(data)
    expect(data.dates.length).toBeGreaterThan(1)
    // await sleep(1400)
});



test("1+1 = 2", async () => {
    expect(1 + 1).toEqual(2);
});