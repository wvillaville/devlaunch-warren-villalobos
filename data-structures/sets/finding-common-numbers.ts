
/*
You are tasked with writing a function to find the common elements between two arrays of numbers. The function should use the Set data structure, which allows for efficient lookup and eliminates duplicates.
INPUTS
arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6, 7]
OUTPUTS
[3, 4, 5]

*/

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 4, 5, 6, 7];

function commonNumbers(arr1: number[], arr2: number[]) {
    const numbers1 = new Set<number>(arr1);
    const numbers2 = new Set<number>(arr2);
    const commonNumbers = new Set<number>();

    for (let value of numbers1) {
        if (numbers2.has(value)) {
            commonNumbers.add(value);
        }
    }

    return Array.from(commonNumbers);
}

const result = commonNumbers(arr1, arr2);
console.log(result);