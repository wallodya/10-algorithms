const hammingDistance = (str1: string, str2: string) : number => {
    if (str1.length !== str2.length) {
        throw new Error("strings should be of the same length")
    }

    let delta: number = 0

    for (let i: number = 0; i <str1.length; i ++) {
        if (str1[i] !== str2[i]) {
            delta += 1
        }
    }

    return delta
}

export default hammingDistance