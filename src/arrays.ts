/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 2) {
        numbers = [numbers[0], numbers[numbers.length - 1]];
        return numbers;
    }
    if (numbers.length === 1) {
        numbers = [...numbers, ...numbers];
        return numbers;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((nums: number): number => nums * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertString = numbers.map((nums: string): number =>
        parseInt(nums) ? parseInt(nums) : 0
    );
    return convertString;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nonDollar = amounts.map((nums: string): number =>
        parseInt(nums.replace("$", "")) ? parseInt(nums.replace("$", "")) : 0
    );
    return nonDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const words = messages.filter((s: string): boolean => !s.endsWith("?"));
    return words.map((s: string): string =>
        s.endsWith("!") ? s.toUpperCase() : s
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const word = addends.join("+");
        return sum.toString() + "=" + word;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const loc = values.findIndex(
        (negativeNum: number): boolean => negativeNum < 0 //this finds the index of the number and returns a boolean and if it is true then the number will be less than 0
    );
    if (loc === -1) {
        const addSum = values.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...values, addSum];
    } else {
        const begin = values.slice(0, loc); //the beginning of the array before the negative number
        const end = values.slice(loc + 1, values.length); //the end of the array after the negative number
        //console.log(end);
        const addSum = begin.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...begin, values[loc], addSum, ...end];
    }
}