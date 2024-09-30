// type coercion

let x ;
x= 5+'5' // 55 string -- type coercion 
x= 5+Number('5') // 10 number 
x = 5 * '5' // 25 number 
x = Number(null)
x = Number(true)
x = Number(false)
x = 5+ true
x = 5+ false
x = 5 + undefined
x = 5 + NaN
console.log(x,typeof x); 