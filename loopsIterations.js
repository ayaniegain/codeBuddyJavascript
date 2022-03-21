// level {2}


// Write a function in Javascript to print the sum of the first n fibonacci numbers.

function fibonaccino(n) {

    let f1 = 0, f2 = 1;

    if (n < 1)
        return

    let sum=0        
    for (let i = 1; i < n+1; i++) {
        sum=  f2+sum
        // console.log(f2)

        let next = f1 + f2
        f1 = f2
        f2 = next
    }

    console.log(sum);
}
fibonaccino(6)