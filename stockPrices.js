// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.


let best = (arr) => {
    let maxDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] < arr[j] && maxDiff < (arr[j] - arr[i])){
                maxDiff = arr[j] - arr[i]
            }
        }
    }
    return maxDiff
}

console.log(best([7, 9, 5, 6, 3, 2]));


// function best (arr) {
//     // console.log(Math.max(...arr))
//     let profitArr = []
//     while(arr.length > 0){
//         // console.log(arr.length)
//         // console.log(Math.max(...arr), ',', arr[0])
//         if(Math.max(...arr) - arr[0] > 0){
//             profitArr.push(Math.max(...arr) - arr[0])
//         } else {
//             profitArr.push(0)
//         }
//         // console.log(profitArr)
//         arr.shift()
//         // console.log(arr)
//     }

//     console.log(Math.max(...profitArr))
// }
