import test from "node:test";
import assert from "node:assert/strict";
import { submitWaitlist, WAITLIST_ENDPOINT } from "../lib/waitlist.ts";

const realFetch = globalThis.fetch;

test.afterEach(() => {
  globalThis.fetch = realFetch;
});

test("waitlist: 2xx returns true and posts the WAITLIST payload", async () => {
  let captured: { url: string; init?: RequestInit } | null = null;
  globalThis.fetch = (async (url: string, init?: RequestInit) => {
    captured = { url, init };
    return new Response("{}", { status: 200 });
  }) as typeof fetch;
  assert.equal(await submitWaitlist("a@b.co"), true);
  assert.equal(captured!.url, WAITLIST_ENDPOINT);
  assert.deepEqual(JSON.parse(String(captured!.init?.body)), {
    data: { email: "a@b.co" },
    form_type: "WAITLIST",
  });
});

test("waitlist: non-2xx returns false", async () => {
  globalThis.fetch = (async () => new Response("no", { status: 500 })) as typeof fetch;
  assert.equal(await submitWaitlist("a@b.co"), false);
});

test("waitlist: network error returns false", async () => {
  globalThis.fetch = (async () => {
    throw new TypeError("network down");
  }) as typeof fetch;
  assert.equal(await submitWaitlist("a@b.co"), false);
});
