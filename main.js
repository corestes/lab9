function problem6 (x,y) {let sum_of_squares = x*x + y*y
        return sum_of_squares}
function problem9 (a) {if (a>0) { message = 'a is a positive number'}
else if (a<0) {message ='a is a negative number'}
else {message ='a is equal to 0'}
return message
}
function problem3 (r) {let area = 3.14 * r *r
return area}

let solution6 = problem6(3,4)
console.log('Solution of problem 6 for x=3 and y=4:'+ solution6)
let solution9_1 = problem9(7)
console.log('Solution of problem 9 for a=7:'+ solution9_1)
let solution9_2 = problem9(-5)
console.log('Solution of problem 9 for a=-5:'+ solution9_2)
let solution3 = problem3(6)
console.log('Solution of problem 3 for r=6:'+ solution3)
