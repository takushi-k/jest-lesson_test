import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    console.log("aaaaaaaaaaaaaaa " + shoppingList?.list)
    shoppingList = new ShoppingList();
    console.log("bbbbbbbbbbbbbbb " + shoppingList?.list)
  })

  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple")
      shoppingList.addItem("banana")
      expect(shoppingList.list).toEqual(["apple", "banana"])
    })
  })

  describe("removeItem", () => {
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("apple")
      shoppingList.removeItem("apple")
      expect(shoppingList.list).not.toContain("apple")
      expect(shoppingList.list).toEqual([])
    })

    it("リストにアイテムが存在しない場合はエラー", () => {

      expect(() => shoppingList.removeItem("banana")).toThrow("アイテム: banana は存在しません")
    })
  })


})
