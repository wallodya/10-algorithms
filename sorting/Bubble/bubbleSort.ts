const bubbleSort = (arr: number[]) : number[] => {
    const newArr = [...arr]

    let swapped : boolean = false

    for (let i = 0; i < newArr.length; i++) {
        swapped = false

        for (let j = 1; j < newArr.length; j++) {
            if (newArr[j-1] > newArr[j]) {
                [newArr[j-1], newArr[j]] = [newArr[j], newArr[j-1]]
                swapped= true
            }
        }

        if (!swapped) return newArr
    }

    return newArr
}

export default bubbleSort