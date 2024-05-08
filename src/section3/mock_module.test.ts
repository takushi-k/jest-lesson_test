import fs from "fs";
import { readFile } from "./mock_module";

jest.mock("fs"); //モジュールのパスを引数に取り、そのモジュール全体を自動的にモック化することができる
const mockFs = jest.mocked(fs)
mockFs.readFileSync.mockReturnValue("dummy data")

// jest.mock("fs", () => ({
//   readFileSync: jest.fn().mockReturnValue("dummy data")
// }));

it("readFileがデータを返却する", () => {
  const result = readFile("path/dumy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
})
