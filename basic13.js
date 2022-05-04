// The Basic 13

// 1. Print 1-255
//Print all the integers from 1 to 255.
// function printInt(){
//     for(let i=1; i<=255; i++){
//         console.log(i);
//     }
// }


// 2. Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// let sum = 0;
// for(let i=0; i<=255; i++){
//     sum = sum + i;        
// }
// console.log(sum);

// function printSum() {
//     let sum = 0;
//     for(let i=0; i<=255; i++){
//         sum += i  
//         console.log("New Number:", i, "Sum:", sum);    
//     }
// }

// printSum();

// Find and Print Max
// Given an array, find and print its largest element.
// var arr1 = [1, 4, 25, 7, 80, 100, 3];
// function printArrayMax(arr){
//     if(arr.length == 0){
//         console.log("This array is Empty");
//         return null;
//     }

//     let maxNum = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maxNum){
//             maxNum = arr[i];
//         }
//     }
//     return console.log(maxNum);
// }

// printArrayMax(arr1);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

// function oddsArray(){
//     let oddArray = [];
//     for(let i=1; i<=255; i++){
//         if(i%2 == 1){
//             oddArray.push(i);
//         }
//     } 
//     console.log(oddArray);
// }

// function oddsArray2(){
//     let oddArray = [];
//     for(let i=1; i<=255; i += 2){
//         oddArray.push(i)
//     } 
//     console.log(oddArray);
// }

// oddsArray2();

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.

// let arr2 = [1, 11, 5, 3, 8, 15, 9];


// function numGreaterThanY(arr, y){
//     let counter = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > y){
//             counter++;
//         }
//     } console.log(counter);
// }

// numGreaterThanY(arr2, 10);

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
// let arr3 = [3, 5, 6, 10, 2, 31]

// function maxMinAverage(arr){
//     let max = arr[0];
//     let min = arr[0];
//     let sum = arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         sum += arr[i]
//     }
//     console.log("Max:", max, "Min:", min, "Average:", sum/arr.length);
// }

// maxMinAverage(arr3);



// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo' .

// let arr4 = [3, 5, 1, -3, 2, -5];

// function swapNagValues(arr){
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = "Dojo";
//         }
//     } return console.log(arr);
// }

// swapNagValues(arr4);

// Print Odds 1-255
// Print all odd integers from 1 to 255.
// function printOdds(startNum, endNum){
//     for(let i=startNum; i<= endNum; i++){
//         if(i%2 == 1){
//             console.log(i)
//         }
//     }
// }
// printOdds(1, 255);

// Iterate and Print Array
// Iterate through a given array, printing each value.
// let arr5 = [3, 5, 12, 22, "Annie", 7];

// function iterateAndPrint(arr){
//     for(let i=0; i< arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// iterateAndPrint(arr5);

// Get and Print Average
// Analyze an array’s values and print the average.

// let arr6 = [1, 5, 7, 8, 12];

// function getAverage(arr){
//     let sum = 0;
//     let ave = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];       
//     }
//     ave = sum/arr.length;
//     return console.log(ave);
// }

// getAverage(arr6);

// Square the Values
// Square each value in a given array, returning that same array with changed values.
// function squareVal(arr){
//     for(let i=0; i < arr.length; i++){
//         arr[i] = arr[i] * arr[i];
//     }
//     return console.log(arr);    
// }

// squareVal(arr6);

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

// let arr7 = [ -1, 2, 5, -19, -2];

// function nagativeToZero(arr){
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     } return console.log(arr);
// }

// nagativeToZero(arr7);

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.

// function arrShift(arr){
//     for(let i=1; i < arr.length; i++){
//         arr[i-1]= arr[i];
//     }
//     arr[arr.length-1] = 0;
//     return console.log(arr);
// }

// arrShift(arr7);

