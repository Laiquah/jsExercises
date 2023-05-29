//q1
// variable - a variable is a name of storage locatiion. It could also be defined as a quantity that may be changed accroing to the mathematical problem.

// value - Values in JavaScript include things like Booleans, Strings, arrays, integers, etc. Because values in JavaScript have specific properties that are employed in accordance with requirements and the run-time environment, its behavior is similar to that of other programming languages.

// data type - Data types explain the many forms of data that we will be working with and storing in variables.

// Initialization - Initialization means that memory is allocated for the variable by the JavaScript engine.

// difference between let, var and const is:
// If you never want a variable to change then you use const because it allows for no change of a variable.
// If you want to reassign values and you want hoisting behaviour then var is the keyword to use.
// If you dont want hoisting behaviour but you want to be able to change the variable then you use the keyword let.

// Variable scope - This refers to the current context of code, which determines the accessibility of variables of Javascript.

// you should use a for loop when the number of iterations is known and in case of no condition, the loop will be repeated infinite times.
// you should use a while loop when the number of iterations is unknown and in the case of no condition, an error will be shown.
// you only use a for each loop when you want to loop through all the values in an array or list.
// this loop is the same as the while loop but you use it when you have a single forced loop at the start.

// hoisting - The process by which the interpreter seems to relocate the definition of functions, variables, or classes to the top of their scope prior to code execution is referred to as hoisting.

// variable scoping is defined in line 14, thank you.

function fullName(){
    console.log('Laiquah Cotie')
}

fullName()

//q2
let firstName = 'Laiquah';
let lastName = 'Cotie';
let age = '19';
let listofsubjects = 'mathematics,physical sciences, life orientation, life sciences';
let address = {
    streetname : 'Myna Street' ,
    streetnumber : '8' ,
    suburb :'Pelican Park',
    city :'Cape Town',
    countryname :'South Africa',
}

console.log(firstName, lastName, age, listofsubjects, address)

//q3
const numb1 = document.querySelector('#numb1')
const op = document.querySelector('#operator')
const numb2 = document.querySelector('#Numb2')
const answer = document.querySelector('#result')
const button = document.querySelector('.btn')


button.addEventListener('click',()=>{
    let method = eval(numb1.value + op.value + numb2.value)

    if(numb1,op,numb2 == ''){
        numb1,op,numb2 === ''
    }else{
        answer.innerHTML = method
    }
})

//q4
let subject = "programming";
function backwards(subject) {
    return subject.split('').reverse().join('')
    }
    console.log(backwards(subject))

//q5
let info = [
    {
    name: 'Mish-Al',
    dob: new Date('2002-5-31')
}

]

let birth = info.find(info => info.dob === info.dob)
let today = new Date();


console.log(info[0].dob.getDate() - today.getDate(),"2 Days Left until Mish's birthday");
console.log('Mish is: ', today.getFullYear() - info[0].dob.getFullYear(), "years old!")

//switch exercise
let switchFunction = prompt("Enter a number from 1 - 100: ")
    switch(true){
        case switchFunction >= 90 && switchFunction <= 100:
            // if (switchFunction >= 90 || switchFunction <= 100){
            //     console.log("Well Done!")
            console.log("Well Done!")
            // }
            break
            case switchFunction >= 80 && switchFunction <= 89:
                console.log("Way To Go!")
                break
                case switchFunction >= 75 && switchFunction <= 79:
                        console.log("Keep It Up!")
                    break
                    case (switchFunction >= 60 && switchFunction <= 74):
                        console.log("You Did Good")
                        break
                        case switchFunction >= 50 && switchFunction <= 59:
                            console.log("That Was Good!")
                            break
                            case switchFunction < 50:
                                console.log("You Failed!")
                                break
                                default:
                                    "Nothing was entered"
    }















