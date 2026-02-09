/**
 * reverse এর বিকল্প = unshift দিয়ে লুপ চালানো।
let numbers = [1,2,3,4,5,6,7];
let result =[];
for(const num of numbers){
    result.unshift(num);
}
console.log(result);

*/


// let numbers = [11,21,32,45,53,60,74];

// let result =[];

// for(const num of numbers){
//     result.unshift(num);
// }

// console.log(result);

// for(let x = numbers.length -1; x >= 0; x--){  // array-এর শেষ index থেকে শুরু করে প্রথম index পর্যন্ত যাবে
//      result.push(numbers[x]);
// }
// console.log(numbers[6]);


/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/
let sentence = ['Tom', 'Tim', 'Tin', 'Tik'];
let resultString = [];
for (const str of sentence){
     resultString += str;
}

console.log(resultString);


/**
 * 
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

// let str = 'I am a hard working person';
// let getSpase = str.split(" ");  // split(" ") → sentence কে স্পেস এর ভিত্তিতে word-array বানিয়েছে
// let reversed = getSpase.reverse(); // word গুলোর position উল্টেছে
// let result = reversed.join(" ");  // split(" ") এরে ছিল। এখন আবার সুন্দর স্পেস এর ভিত্তিতে sentence বানিয়েছে । যদি " " দেয়া না হত তাহলে প্রত্যেক শব্দের পরে কমা বসিয়ে দিত। 
// console.log(result);
// for (const str1 of reversed){
//      result.reverse(str1);
    
// }
// //  resultr = reversed.reverse();
// console.log(result);

     let str = 'I am a hard working person';
     let getSpase = str.split(" ");
     let result =[];
     console.log(getSpase);
     for(const word of  getSpase){
          result.reverse().push(word);
     }
     console.log(result);
     let reversed = result.reverse();
     // result.reverse is not a function 👉 এই এররটা আসে যখন তুমি এমন একটা ভ্যারিয়েবলের ওপর .reverse() চালাও, যেটা Array না।
     console.log(reversed);