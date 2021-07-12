import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch"

describe("Test in Helpers", () => {
  let token = ""
  test("fetch without token should works", async () => {
    const response = await fetchWithoutToken(
      "auth",
      { email: "mongo@gmail.com", password: "123123" },
      "POST"
    )
    expect(response instanceof Response).toBe(true)

    const body = await response.json()
    expect(body.ok).toBe(true)

    token = body.token
  })
  test("fetchWithToken shoulds works", async () => {
    localStorage.setItem("token", token)
    const response = await fetchWithToken("events")
    const body = await response.json()

    expect(body.error).toBe(false)
  })
})
