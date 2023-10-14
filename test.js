console.log('hello world')

console.log(1 + 10)

// WRITING A COMMENT
/* multi 
line 
comment
*/
// In JS you need to DECLARE your variables
var MyName = 'shoha'
console.log(typeof MyName)
MyName = 'Brendan'
MyName = 9000
console.log(typeof MyName)
console.log(MyName)

// JS hoisting
console.log(age)
var age = 10 
console.log(age)
var variable // DECLARATIOn
variable = 100 // DEFINITION

// instead of VAR use LET or CONST
let myList = [1,2,3,4,5]
console.log(myList)
const nums =[10,9,8,7,6]
console.log(nums)

// Constant varuiables cannot be re-assigned
const favoriteNumber = 10;
console.log(favoriteNumber * 10)
let favoriteColor = "Yellow"
favoriteColor = "Blue"
console.log(favoriteColor)
// use "const" until you have to use "let"

// in JS there is no disticntion between integers and floats
const num1 = 10
const num2 =3.14
console.log(typeof num1)
console.log(typeof num2)

// JS does not care about indentation 
const teacher1 = "Shoha"; const teacher2 = "Brendan"; console.log(teacher1, teacher2)

// list are known as "Arrays" in JS
const names = ["Shoha", "Brendan", 1,2,3, [10,100,10]]
console.log(names[5][1])
console.log(typeof names)






// dictionaries are known as Objects in JS
const obj = { 
    'first name' : "Shoha",
    age: 9001,
    last_name: "Tsuchida",
    'Content-Type': "human"
};
console.log(obj)
console.log(obj['first name']) // bracket notation 
console.log(obj.last_name) // dot notation 

obj['first name'] = "Brendan" // Constant variables are still mutable
console.log(obj) // just not re-assignable

// undeclared / undefined / null
let car // car is no-longer undeclared 
console.log(car) // undefined 
car = null 




























// division 
let quo = 10/3
console.log(quo)
quo/=2
console.log(quo)

// exponentital 
let square = 5**2
console.log(square)
square**=2
console.log(square)

// more math tingz
const floor = Math.floor(24.7)
console.log(floor)
const ceil = Math.ceil(24.7)
console.log(ceil)

const n1 = 2
const n2 = "3"
const res = n1 + n2 
console.log(res, typeof res)

console.log(parseInt('24.7'), typeof parseInt('24.7'))
console.log(parseFloat('24.7'), typeof parseFloat('24.7'))

//FUNCTIONS
console.log('--------------------------')
console.log('FUNCTIONS')
console.log('--------------------------')

// method 1: most similar to python
function nameOfFunction(param1, param2){
    'line1'
    'line2';
    'line3';
    return param1 + param2
}
console.log(nameOfFunction(1,200))

// method 2: nameless function, BUT store it to a varaible
const newFunc = function (x,y){
    'line1';
    'line2';
    return x + y
}
console.log(newFunc(10,20))

// method 3: arrow function 












// arrow function with ONE param 
// parenthesis is not necessary 






// array function with one limne in the body 
// curly braces and RETURN keyword are not necessary 
const multiply = (num1, num2) => num1 * num2
console.log(multiply(5,4))

// simply arrow function with one param and one line
const addTwo = num => num + 2 
console.log(addTwo(10));


// self invoking function
(()=>{
    console.log('i am running on my own')
})()

// closure
const outer = () => {
    let counter = 0; // private variable

    const inner = () => {    
        console.log(counter);
        counter++;
    }

    return inner
}

const result = outer()
result()
result()
result()


// Control Flow
// If Statements 
const ifTest = (num) => {
    if (num < 10){
        console.log('small')
    }
    else if (num>20){
        console.log('big')
    }
    else {
        console.log('medium')
    }
}

ifTest(5)
ifTest(11)
ifTest(2000)

// Ternary Operator 
// SYNTAX: Condition ? ( what happens if true) : (what happens if )
const getFee = isMemeber => {
    return isMemeber ? "2.00" : "10.00"
}
console.log(getFee(true))
console.log(getFee(false))









// loops
// FOR LOOPS

const myNames = ["Shoha", "Brendan", "Maseeh", "Donte"]
// SYNTAX: for ( let variable; condition ; incrementor ) { codeblock}
for (let i = 0; i < myNames.length; i++){
    console.log(i, myNames[i])
};

// ES6
// for - of loop when looping through an array
for (let name of myNames){
    console.log(name)
};

// for - in loops when looping through an object 
const people = {
    'Shoha' : 9000,
    'Brendan' : 9001,
    'Aften' : 9002
}
// for (ler person in people){
//     console.log(person)
// };

// while loops 
// while (condition){ codeblock }
let i = 0;
while (i < 10){
    if (i==4){
        i++
        continue
    }
    else if (i == 8){
        break
    }
    console.log(i)
    i++
};

// do while 
// the codeblock will run ARLEAST 1 time 
i = 100
do {
    console.log('HI')
}
while (i < 10)




// array methods
const my_people = ["Shoha", "Brendan"]
my_people.push("Sam")
my_people.push("Aften")
my_people.push("Kevin")
my_people.push("Mikelynn")
console.log(my_people)
console.log(my_people[1])
console.log(my_people.length)
console.log(my_people.toString())
console.log(my_people.join('##'))
console.log(my_people.slice(1,4))

//splice
console.log(my_people)
console.log(my_people.splice(1,2))
console.log()