const englishAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
] as const

type eng = typeof englishAlphabet

type cipherMap = {
    [key in typeof englishAlphabet[number]]: typeof englishAlphabet[number]
}

const getCipherMap = (alphabet: eng, shift: number) => {
    return alphabet
                .reduce((charsMap, currentChar, currentCharIndex) => {
                    const charsMapClone: any = { ...charsMap }

                    let encryptedCharIndex = (currentCharIndex + shift) % alphabet.length
                    if (encryptedCharIndex < 0) encryptedCharIndex += alphabet.length
                    charsMapClone[currentChar] = alphabet[encryptedCharIndex]
                    return charsMapClone
                }, {})
}

const ceasarCipherEncrypt = (str: string, shift: number, alphabet: eng = englishAlphabet): string => {
    const cipherMap: {[key:string]: typeof englishAlphabet[number]} = getCipherMap(alphabet, shift)
    return str
            .toLocaleLowerCase()
            .split('')
            .map(char => char === ' ' ? '&' : cipherMap[char] || char)
            .join('')
}

const ceasarCipherDecrypt = (str: string, shift: number, alphabet : eng = englishAlphabet): string => {
    const cipherMap: {[key:string]: typeof englishAlphabet[number]} = getCipherMap(alphabet, -shift)
    return str 
            .toLocaleLowerCase()
            .split('')
            .map(char => char === '&' ? ' ' : cipherMap[char] || char)
            .join('')
}

const testEncrypted = ceasarCipherEncrypt('hello world', 4)
const testDecrypted = ceasarCipherDecrypt(testEncrypted, 4)

console.log(testEncrypted)
console.log(testDecrypted)