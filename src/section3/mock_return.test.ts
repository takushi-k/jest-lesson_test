it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value")   //モック関数の戻り値にしたい値を設定 永続的に設定されることになる
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
})

it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value")   //モック関数の戻り値にしたい値を設定 １度だけで、永続的にならない
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe(undefined);
})

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved value");   //mockFuncを呼び出すと、promiseが返され、psomiseから引数で渡した"Resolved value"を取得することができる
  const result = await mockFunc();
  expect(result).toBe("Resolved value")
})
