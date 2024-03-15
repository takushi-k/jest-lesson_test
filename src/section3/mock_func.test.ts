it("はじめてのmock", () => {
  // jest.fn()    ●何も処理を行わない新しいmock関数を生成します
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");   // mock関数実行
})

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "Hello mock2") //あとから実装を変更することが可能
  expect(mockFunc()).toBe("Hello mock2")
})
