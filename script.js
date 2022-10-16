//Question 1
randomInt = {
    displayRandom: function() {
        let value = Math.round(Math.random() * 10);
        console.log(`The random value is ${value}`);
    }
};
randomInt.displayRandom()


//Question 2
display = () => {
    const numtwo = Number(document.getElementById("numtwo").value)
    const btntwo = document.getElementById("btntwo")
    const decimaltwo = document.getElementById("decimaltwo").value
    const output = document.getElementById("output")
    const result = numtwo.toFixed(decimaltwo)

    output.innerHTML = `Round up value of ${numtwo} to ${decimaltwo} place(s) is ${result}`;
}

//Question 3
subString = () => {
    const string = "I am learning React"
    const checkString = "learning"
    let result = string.includes(checkString)
    return result
}
console.log(subString())

//Question 4
leapYear = () => {
    const numthree = document.getElementById("numthree").value
    const btnthree = document.getElementById("btnthree")
    const output = document.getElementById("output")

    if ((numthree % 4 === 0) && (numthree % 100 !== 0) || (numthree % 400 === 0)) {
        output.innerHTML = `${numthree} is a leap year`;
    } else {
        output.innerHTML = `${numthree} is not a leap year`;
    }
}

//Question 5
const pinNumber = '1234'
const user = 'Jun Hui'
const value = 1000

enterPassword = () => {
    const inputPw = document.getElementById("password").value

    if (inputPw == pinNumber) {
        document.getElementById('withdraw').style.display = 'block';
        document.getElementById('deposit').style.display = 'block';
        document.getElementById('password').style.display = 'none';
        document.getElementById('enter-pw').style.display = 'none';
        document.getElementById('wrong-pw').style.display = 'none';
        document.getElementById('title').innerHTML = `Hello ${user} !`
    }
    else {
        document.getElementById('wrong-pw').innerHTML = "Wrong Password. Try again!"
    }
}


withdrawCash = () => {
    document.getElementById('title').innerHTML = `Withdraw Cash`
    document.getElementById('deposit').style.display = 'none';
    document.getElementById('withdraw').style.display = 'none';
    document.getElementById('withdrawBtn').style.display = 'block';
    document.getElementById('amount').style.display = 'block';
    document.getElementById('showAmount').style.display = 'block';
    let amountValue = document.getElementById('showAmount')
    amountValue.innerHTML = `Amount: $${value}`

    calcWithdraw = () => {
        let amt = Number(document.getElementById('amount').value)
        let x = value - amt
        localStorage.setItem('password', 'pass');
        let afterWithdraw = document.getElementById('afterWithdraw')
        let afterWithdraw2 = document.getElementById('afterWithdraw2')
        afterWithdraw.innerHTML = `$${amt} successfully withdrawn. `
        afterWithdraw2.innerHTML = `Remaining Amount is $${x}`
        amountValue.innerHTML = `Amount: $${x}`
    }
}
depositCash = () => {
    document.getElementById('title').innerHTML = `Deposit Cash`
    document.getElementById('deposit').style.display = 'none';
    document.getElementById('withdraw').style.display = 'none';
    document.getElementById('depositBtn').style.display = 'block';
    document.getElementById('depoamount').style.display = 'block';
    let amountValue = document.getElementById('showAmount')
    amountValue.innerHTML = `Amount: $${value}`


    calcDeposit = () => {
        let amt = Number(document.getElementById('depoamount').value)
        let x = value + amt
        let afterDeposit = document.getElementById('afterDeposit')
        let afterDeposit2 = document.getElementById('afterDeposit2')
        afterDeposit.innerHTML = `$${amt} successfully deposited. `
        afterDeposit2.innerHTML = `Current Amount is $${x}`
        amountValue.innerHTML = `Amount: $${x}`
    }
}

//Question 6
sumEven =() =>{

    let numOne = Number(document.getElementById("numOne").value)
    let numTwo = Number(document.getElementById("numTwo").value)
    let numThree = Number(document.getElementById("numThree").value)
    let numFour = Number(document.getElementById("numFour").value)
    let result = document.getElementById("result")
    
    let numStr = [numOne, numTwo, numThree, numFour];
    
    const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);
    
    result.innerHTML= `Sum of even numbers are: ${sumEvens(numStr)}`
    
    }


//Question 7
const arr7 = [10, 12, 900, 93, 707]

getMaxEven = () => {
    return Math.max.apply(null, arr7.filter(e => e % 2 === 0));
}
console.log(`Largest even number: ${getMaxEven()}`)



// getMaxOdd = () => {
//     return Math.max.apply(null, arr7.filter(e => e % 2 === 1));
// }
// console.log(`Largest odd number: ${getMaxOdd()}`)


//Question 8
const arr8 = [10, 20, 30];
const arr2 = [1, 2, 3];

const sumArr = arr8.map((a, i) => a + arr2[i]);
console.log(sumArr);


//Question 9
const arr9 = [10, 78, 0,20,22,55];
const arr1 = [];
arr9.forEach(ele => {
    arr1.unshift(ele)
});
console.log(arr1);

//Question 10
reverseString = (str) => {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString('I love ReactJS'))


//Question 11
let arr11 = [10, 50, 20, 67, 10, 20];
let newArr = [...new Set(arr11)];

console.log(newArr);


//Question 12
const arr = [12, 56, 89]
let displayArr = document.getElementById("displayArr")
displayArr.innerHTML = 'Array = [ ' + arr.join(" , ") + ' ]'


delArr = () => {
    let delNum = Number(document.getElementById("delNum").value)
    let displayArr = document.getElementById("displayNewArr")
    console.log(delNum)
    arr.forEach((e, i, a) => {
        if (e === delNum) {
            arr.splice(i, 1);
        }
    });
    displayNewArr.style.color = 'red';
    displayNewArr.innerHTML = 'New Array = [ ' + arr.join(" , ") + ' ]'
}


//Question 13
const arr13 = [10, 12, 900, 93, 707]

getMaxEven = () => {
    return Math.max.apply(null, arr13.filter(e => e % 2 === 0));
}
console.log(`Largest even number: ${getMaxEven()}`)

getMaxOdd = () => {
    return Math.max.apply(null, arr13.filter(e => e % 2 === 1));
}
console.log(`Largest odd number: ${getMaxOdd()}`)


//Question 14

display = () => {
    let inputname = document.getElementById("name").value
    let age = document.getElementById("age").value
    let designation = document.getElementById("designation").value
    class Employees {
        constructor(name, age, designation) {
            this.name = name;
            this.age = age;
            this.designation = designation;
        }
    }

    const newEmployee = new Employees(inputname, age, designation)

    console.log(newEmployee)
}

//Question 15
class car {
    constructor(name, brand, color, manufacture, maxSpeed) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.man = manufacture;
        this.maxSpeed = maxSpeed;
    }

      city() {
        console.log(`Manufactured from ${this.man}`)
      }

      specialFeature() {
        console.log(`${this.brand} ${this.name} can travel up to ${this.maxSpeed}km`);
      }
}

let newCar = new car('R8', 'Audi', 'White', 'Singapore',200);
console.log(newCar);
newCar.city();
newCar.specialFeature();


//Question 16
class book {
    constructor(title, numOfPages, typeOfPages, author, yearWritten) {
        this.title = title;
        this.numOfPages = numOfPages;
        this.typeOfPages = typeOfPages;
        this.author = author;
        this.yearWritten = yearWritten;
    }

    type_of_book() {
        console.log(`Type of Book: ${this.title}, ${this.numOfPages}, ${this.typeOfPages}, ${this.author}`);
      }
}

let book1 = new book('Twilight', '420', 'Hard Cover', 'Stephenie Meyer', '2005');
console.log(book1);
book1.type_of_book();


//Question 17
class animal {
    constructor(gender, name, disease, run, food, climbOn) {
        this.gender = gender;
        this.name = name;
        this.dis = disease;
        this.run = run;
        this.food = food;
        this.climbOn = climbOn;
    }

    walk() {
        console.log(`${this.name} walks at a max speed of ${this.run}km`);
    }

    eat() {
        console.log(`${this.name} eats ${this.food}`);
    }

    climb() {
        console.log(`${this.name} climbs ${this.climbOn}`);
    }
}

let newCat = new animal('Female', 'Mandu', 'Diarrhoea', 20, 'tuna', 'trees');
console.log(newCat);
newCat.walk();
newCat.eat();
newCat.climb();


//Question 18
class Electronics {
    constructor(name, version, company){
        this.name = name
        this.version = version
        this.company = company
    }
}

class laptop extends Electronics{
    constructor(name, version, company){
        super(name, version, company)
    }
    config(space) {
        this.config = space
    }

    price(price) {
        this.price = price
    }
}

class tablet extends Electronics{
    constructor(name, version, company){
        super(name, version, company)
    }
    config(space) {
        this.config = space
    }

    price(price) {
        this.price = price
    }
}

class mobile extends Electronics{
    constructor(name, version, company){
        super(name, version, company)
    }
    config(space) {
        this.config = space
    }

    price(price) {
        this.price = price
    }
}

const newMobile = new mobile("iPhone","14","Apple")
console.log(newMobile)
newMobile.config("256GB")
newMobile.price("$1400")





