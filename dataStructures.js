// level {2}

// 1. Write a function to remove all even numbers from an Array.



let arry = [1, 3, 4, 6, 7, 8]

let value = arry.filter((e) => {

    if (e % 2 !== 0) {
        return e
    }


})

console.log(value);

// 2. Replace all the vowels in a string with uppercase vowels.
// Input string: 'Elie'


let str="Elie"

function vowlupper(str) {

    var N=str.length
    for (let i = 0; i < N; i++) {
        if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ) {
            
            console.log(str[i].toUpperCase())
        }else{
            
            console.log(str[i])
        }
        
    }
    
}
vowlupper(str)



// 3. Write a function to find the maximum number in an array.

let arryval=[1, 3, 4, 6, 7, 8, 2, 5]

let temp=0

arryval.forEach((elem)=>{
    if (temp<elem) {
        temp=elem
    }
})

console.log(temp)

