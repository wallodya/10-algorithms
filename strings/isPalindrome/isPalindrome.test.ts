import isPalindrome from "./isPalindrome"

beforeAll(() : void => {
    jest.setTimeout(10000)
})

describe("is palindrome test empty string", () => {
	test("empty string", () => {
		expect(isPalindrome("")).toBe(true)
	})
})

describe("is not palindrome", () => {
    test("not a palindrome even", () => {
		expect(isPalindrome("abcd")).toBe(false)
	})
	test("not a palindrome odd", () => {
		expect(isPalindrome("abcde")).toBe(false)
	})
	test("not a palindrome numbers and signs even", () => {
		expect(isPalindrome('0#9;0"9,..8/')).toBe(false)
	})
	test("not a palindrome numbers and signs odd", () => {
		expect(isPalindrome('0#9;0"9,..8')).toBe(false)
	})
})

describe("is palindrome", () => {
    test("is palindrome even", () => {
		expect(isPalindrome("abba")).toBe(true)
	})
	test("is palindrome odd", () => {
		expect(isPalindrome("abcba")).toBe(true)
	})
	test("is palindrome numbers and signs even", () => {
		expect(isPalindrome('0#9;0""0;9#0')).toBe(true)
	})
	test("is palindrome numbers and signs odd", () => {
		expect(isPalindrome('0#9;0"9,..8..,9"0;9#0')).toBe(true)
	})
    test("is palindrome cyrillic", () => {
        expect(isPalindrome("панамаманап")).toBe(true)
    })
})