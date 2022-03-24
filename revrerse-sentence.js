
let reverseString = (a) =>  a.split(' ').map(word => word.split('').reverse().join('')).join(' ')
let str = 'emocleW ot siht tpircsavaJ !ediuG';
console.log(reverseString(str));

