// state 0
// nothing
const interviewer = 'Marco'
// state 1
// interviewer => Marco
let interviewee = 'Elly'
// state 2
// interviewee => Elly, interviewer => Marco
interviewee = interviewee.toLowerCase()
// state 3
// interviewee => elly, interviewer => Marco

/******************************************
 * checks with the string includes method if 'arc'
 * is included in the string
 * @param {string} testString - the string that has to be tested
 * @returns {boolean} - returns the result of the test
 * ***************************************/
const hasArc = (testString) => testString.includes('arc')

// function hasArc (testString) {
//     return testString.includes('arc')
// }

// const hasArc = function (testString) {
//     return testString.includes('arc')
// }
console.log(hasArc)
// state 4
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc]

const validCandidate = hasArc(interviewee)
// state 5
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc], validCandate => false

const coffeeMachine = (option) => {
    if (option === 1) return 'expresso'
    else if (option === 2) return 'macchiato'
    else return "we don't have this coffee here"
}
// state 6
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc]
// validCandate => false, coffeeMachine => [Function coffeeMachine]
const testVar = 'something'