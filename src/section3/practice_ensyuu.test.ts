import axios from "axios";
import Users from "./practice_ensyuu";

jest.mock("axios") //axiosモジュールのモック化を行う
const mockAxios = jest.mocked(axios);   //モック化されたaxiosの型を持つオブジェクトを定義

describe("Users", () => {
  beforeEach(() => {
    mockAxios.get.mockClear() //モック化したaxiosのgetメソッドの初期化を行う  戻り値を変更した場合でも、初期状態に戻すことができる
  })

  it("ユーザーを取得できる", async () => {
    const users = [{name: "Taro"}, {name: "Hanako"}]
    const resp = { data: users};
    mockAxios.get.mockResolvedValue(resp)  //戻り値としてセット

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json")

  })
})
