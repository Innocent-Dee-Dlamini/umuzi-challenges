function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length;
    
    for (let i = 0; i < arr.length; i++){
        if (i > 0){
            positive ++;
        }else if (i < 0) {
            negative ++;
        }else {
            zero ++;
        }
      }  
      
    let fractionOfPositive = positive /length;
    let fractuionOfNegative = negative / length;
    let fractionOfZero = zero / length;
    
    console.log(`${fractionOfPositive.toFixed(6)}\n${fractionOfZero.toFixed(6)}\n${fractuionOfNegative.toFixed(6)}`)
    
}

plusMinus([-4,3,-9,0,4,1])