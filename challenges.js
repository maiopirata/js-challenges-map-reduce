/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/
// function nameFn (para1) {

// }

// const nameFn = function (para1) = {

// }

// const nameFn = a => b

// const nameFn = (parameter1, ...) => {
//     return 
// }

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */

// const predicateFn = value => value; // if true keep the element
//                                     // if false discard the element
const removeFalseValues = (booleanArr) => {
    //                                   (value)     => { return false }
    //                                  input [true, true, false, false, true]
    //                                  output []

    //                                   (value)     => { return true }
    //                                  input [true, true, false, false, true]
    //                                  output [true, true, false, false, true]

    //                                   (value)     => !value
    //                                  input [true, true, false, false, true]
    //                                  output [false, false]

    //                                   (value)     => typeof value === 'boolean'
    //                                  input [true, true, false, false, true]
    //                                  output [true, true, false, false, true]

    //                                   (value)     => typeof value === 'string'
    //                                  input [true, true, false, false, true]
    //                                  output []

    //                                   (value, iter) => iter < 3
    //                                  input [true, true, false, false, true]
    //                                  output [true, true, false]
    const resultArr = booleanArr.filter((value) => { return value });
    return resultArr;
}

const booleanArrTest = [true, true, false, false, true]
const removeFalseValuesResult = removeFalseValues(booleanArrTest)

const booleanArrTest2 = [0, 1, 2, 3, 0, 0]
const removeFalseValuesResult2 = removeFalseValues(booleanArrTest2)

const booleanArrTest3 = ['Marco', 'Blanche', '', 'Moni', 'Soude', 'Maryna']
const removeFalseValuesResult3 = removeFalseValues(booleanArrTest3)

const removeFalseValuesStrictlyBooleans = (booleanArr) => {
    if (!booleanArr || !booleanArr.length) { // checks if the parameter is defined and it is an array (or string)
        console.error('you can only use this function with booleans array!!!')
        return
    }
    const isArrayOfBooleans = booleanArr                        // [true, true, false, false, true]
        .map(value => {return (typeof value === 'boolean')})    // [true, true, true, true, true]
        .reduce((previous, current) => {
            return previous && current
        }, true)                                    // true
    if (!isArrayOfBooleans) {
        console.error('you can only use this function with booleans array!!!')
        return
    }

    return booleanArr.filter((value) => { return value });
}

// const removeFalseValuesResult4 = removeFalseValuesStrictlyBooleans(booleanArrTest3)

const removeFalseValuesResult5 = removeFalseValuesStrictlyBooleans(booleanArrTest)

// state of my program now
// booleanArrTest => [.], removeFalseValuesResult => [correct result], removeFalseValues => [Function removeFalseValues]

  /**
   * A function that takes an array of numbers that are between 0 - 1.
   * The function needs to create a new array with the numbers converted into a percentage
   *
   * @param {number[]} numbersArr [1, .5, .7, .25]
   * @return {string[]} ["100%", "50%", "70%", "25%"]
   */
  
const createPercentageList = (numbersArr) => {
    return numbersArr.map(value => {
        // transform 1 => 100
        const percentage = 100 * value;
        // percentage => 100
        // we add % sign => "100%"
        const formattedPercentage = `${percentage}%`;
        return formattedPercentage;
    });
};

const result1 = createPercentageList([1, .5, .7, .25])

const multiplyBy100 = value => { return 100 * value };
const addPercentSign = percentage => { return `${percentage}%` };

const createPercentageListBeautified = (numbersArr) => { // [1, .5, .7, .25]
    const percentArray = numbersArr.map(multiplyBy100) // [100, 50, 70, 25] do (to every element individually) a multiply by 100 
    const formattedArray = percentArray.map(addPercentSign); // ["100%", "50%", "70%", "25%"] do (..) add a percent sign 
    return formattedArray
}

const result2 = createPercentageList([1, .5, .7, .25])

/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */
const namePara = 'school'
const value = 'shoes'
const addNameToString = (name, value) => { return `${name} ${value}` };
const possessions = ["shoes", "jacket", "belt"]

const createListOfPoessessions = (possessionsArr, name) => {
    //                       possessionsArr.map(addNameToString)); ['shoes 0', 'jacket 1' 'belt 2']
    //                                     .map((value, index) => addNameToString(value, index))
    const possessionResult = possessionsArr.map(value => addNameToString(name, value)); // do (to every element individually) add a name string to the possession string
    return possessionResult
}

createListOfPoessessions(possessions, namePara) // ["disco shoes", "disco jacket", "disco belt"]

  /**
   * Intemediate Challenges
   */
  
  /**
   * Have a look at the String method split()
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   *
   * You may need to use it below.
   */
  
/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */
  
const convertStringToNumbersArray = (numberString) => {
    const splittedStringArray = numberString.split('+') //["1", "2", "3", "4", "5"] split it with my divider and give me an array 
    const integerArray = splittedStringArray.map(value => { return parseInt(value) }); // do (to every element individually) convert to integer [1, 2, 3, 4, 5]
    return integerArray;
}
const resultConvert = convertStringToNumbersArray("1+2+3+4+5")
console.log(resultConvert)

/**
   * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
   * Every number in the string will need to checked.
   *
   * @param {string} numberString - "1+2+3+4+5"
   * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
   */
  
const createOddEvenArray = (numberString) => {
    const splittedStringArray = numberString.split('+') // ["1", "2", "3", "4", "5"]
    const oddEvenArray = splittedStringArray.map((value) => {
        if (value % 2 === 0) return 'even';
        else return 'odd';
    })// ['odd', 'even', 'odd', 'even', 'odd']
    return oddEvenArray;
};
  
  /**
   * A function that takes an array of book titles and a search term.
   * The function needs to remove any book titles that do not include the search term.
   *
   * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
   * @param {string} searchTerm - "Google"
   * @return {string[]} - ["The Google story"]
   */
  
// transactions.filter(transaction => transaction === 'idlkajsdflkajsdf')
const filterBooksBySearch = (booksArr, searchTerm) => {
    const filteredBooks = booksArr.filter(bookTitle => {
        const test = bookTitle.includes(searchTerm);
        return test;
    }) // ["The Google story"]
    return filteredBooks;
};
  
  /**
   * Advanced Challenges
   */
  
  /**
   * A function that takes a list, cleans each item and joins them with a +.
   * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
   *
   * This function is failing the test's can you figure out why?
   * The bug is within the function, the test's are fine.
   * Can you get it to pass the tests?
   *
   * @param {string[]} stringArr ["  dIsco", " ShOes "]
   * @return {string} "disco+shoes"
   */
  
const formatStringArray = (stringArr) => {
    // const cleanedArr = stringArr.forEach((string) => {
    //   const cleanStr = string.trim().toLowerCase(); // "  dIsco" => "disco"
    //   return cleanStr;
    // }); // undefined
    const cleanedArr = stringArr.map((string) => {
        const cleanStr = string.trim().toLowerCase(); // "  dIsco" => "disco"
        return cleanStr;
    }); // ["disco", "Shoes"]
    const joinedString = cleanedArr.join("+");
    return joinedString;
};
  
  /**
   * A function that takes a string, cleans it and formats it based on a condition.
   *
   * It will need to remove anything that is NOT a letter from the string.
   * - e.g numbers, punctuation, whitespace.
   *
   * If the index of the letter is even the letter needs to be Uppercase.
   * If the index of the letter is odd the letter needs to be Lowercase.
   *
   * @param {string} string " 22 $$He LL--O!%^& "
   * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
   */
  
const formatString = (string) => {
    const cleanString = string.replace(/[^\w]|[\s\d]/gi, '')//"HeLLO" remove all the char that are not letters 
    const splittedStringArray = cleanString.split('') // ["H", "e", "L", "L", "O"] 
    const resultArray = splittedStringArray.map((letter, index) => {
        if (index % 2 === 0) return letter.toUpperCase()
        else return letter.toLowerCase()
    })     // modifying each letter to be either uppercase or lowercase

    return resultArray;
};
  
  /**
   * Expert Challenge
   */
  
  /**
   * A function that takes an array and FizzBuzzes it.
   *
   * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
   *
   * If we were given [-1, "disco", "3", 5, "15", 2, 0]
   * We would be left with this ["3", 5, "15", 2]
   *
   * It then needs to create a NEW array from this clean array based on the conditons below:
   *export
  
   *
   * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
   * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
   */
  
const fizzBuzz = (mixedArray) => {
    // clean my array [-1, "disco", "3", 5, "15", 2, 0]
    // into this ["3", 5, "15", 2]
    const cleanedArray = mixedArray.filter((value) => {
        if (typeof value === 'number' && value > 0) return true;
        else if (parseInt(value) > 0) return true;
        else return false
    })

    // replace values in the cleaned array
    // const result = cleanedArray.map((value) => {
    //     const valueAsNumber = Number(value) // parseInt, parseFloat
    //     if (valueAsNumber % 3 === 0 && valueAsNumber % 5 === 0 /* multiples of three and five */) {
    //         return 'FizzBuzz'; // replace the number with "FizzBuzz".
    //     } else if (valueAsNumber % 3 === 0/*multiples of three*/) {
    //         return 'Fizz' // replace the number with "Fizz".
    //     } else if (valueAsNumber % 5 === 0 /*multiples of five*/) {
    //         return 'Buzz' // For multiples of five replace the number with "Buzz".
    //     } else {
    //         return '' + value; // `${value}` All the other numbers need to be strings.
    //     }
    // })

    const result = cleanedArray.map((value) => {
        const valueAsNumber = Number(value) // parseInt, parseFloat
        
        let str = '';
        if ((valueAsNumber % 3) === 0) str = str + 'Fizz';
        if ((valueAsNumber % 5) === 0) str = str + 'Buzz';
        
        return str || '' + value; // `${value}` All the other numbers need to be strings.
    })
    return result;
  };

  console.log('fizzbuzz', fizzBuzz([-1, "disco", "3", 5, "15", 2, 0]))