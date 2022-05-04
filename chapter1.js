// Threes and Fives
// Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both . Display the final sum in the console.
// Second: Change your function to make a BetterThreesFives(start,end) where start and end
// values are customizable. You can think of the above ThreesFives() function as
// BetterThreesFives(100,4000000) .

function ThreesFives(num1, num2){
    let sum = 0;
    for(let i=num1; i<=num2; i++){
        if(i%3 == 0 || i%5 == 0){
            sum += i;
        }
    } return console.log(sum);
}

ThreesFives(100, 4000000);