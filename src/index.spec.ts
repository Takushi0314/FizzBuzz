import { FizzBuzz } from "./index";

test("0を渡すと文字列0を返す", () => {
  expect(FizzBuzz(0)).toBe("0");
});

test("1を渡すと文字列1を返す", () => {
  expect(FizzBuzz(1)).toBe("1");
});

test("3の倍数のときは数の代わりにFizzに変換して出力する", () => {
  expect(FizzBuzz(0)).toBe(0);
});

test("5の倍数のときは数の代わりにBuzzに変換して出力する", () => {
  expect(FizzBuzz(0)).toBe(0);
});

test("3と5両方の倍数のときは数の代わりにFizzBuzzに変換して出力する", () => {
  expect(FizzBuzz(0)).toBe(0);
});
