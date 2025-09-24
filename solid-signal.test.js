import { createEffect } from "solid-js"
import { createMutable } from "solid-js/store"

function assertEquals(
  /** @type {any} */ actual,
  /** @type {any} */ expected,
  /** @type {string} */ message
) {
  if (actual !== expected)
    throw new Error(message + `\nExpected ${expected}, but got ${actual}`)
}

describe("solid.js store and effect", () => {
  it("works", async () => {
    const state = createMutable({ count: 0 })

    let count = 0

    createEffect(() => {
      count++
      console.log("State changed effect:", state.count)
    })

    assertEquals(count, 1, "effect should run once initially")

    state.count++
    await new Promise((r) => setTimeout(r, 100))
    assertEquals(count, 2, "effect should run again after state change")
  })
})
