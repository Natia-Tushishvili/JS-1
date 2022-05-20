/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

var sistername = 'ანა';
var sisterage = 28;
var brothername = 'ლევანი';
var brotherage = 21;
console.log(sisterage - brotherage)

var text = sistername + " " + brothername + "ზე" + " " + (sisterage - brotherage) + " " + "წლით უფროსია";
console.log(text)


/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

var students = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den']
console.log(students[4])


/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
*/

let student = {
    firstName: 'ნათია',
    lastName: 'თუშიშვილი',
    fullname: 'ნათია თუშიშვილი',
    age: 26,
    subject: ['მათემატიკა', 'ფიზიკა', 'ბიოლოგია', 'ქიმია', 'ისტორია', 'გეოგრაფია', 'ინგლისური'],
    roommate: {
        fullName: 'თამარ გაბელია',
        age: 28
    }
}
for (let i = 0; i < student.subject.length; i++)
    console.log(student.subject[i])
var result = student.fullname + " " + "არის" + " " + student.age + " " + "წლის და მისი რუმმეითი არის" + " " + student.roommate.fullName;
console.log(result)


/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

var fruitsArray = ["Banana", "Orange", "Apple", "Mango", 2, 12]
let i = 0;
while (i < fruitsArray.length && typeof fruitsArray[i] === "string") {
    console.log(fruitsArray[i])
    i++
}


/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let numberArray = [12, 23, 43, 11, 9, 2, 121, 90]
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 31 && numberArray[i] % 2 == 0) {
        console.log(numberArray[i] + ' ' + 'Element is greater than provided value and is EVEN')
    } else if (numberArray[i] < 31 && numberArray[i] % 2) {
        console.log(numberArray[i] + ' ' + 'Element is less than provided value and is ODD')
    }
}


/*
    Task 6 : 
     შექმენით ფუნცქია arrayBreaker რომელიც პარამეტრად მიიღებს ორ ცვლადს . პირველია რა მნიშვნელობაზეც
     უნდა შეწყდეს ციკლი ე.წ breakValue და მეორე პარამეტრი იქნება მასივი .
     დაწერეთ იტერაცია , დალოგეთ ელემენტები მანამ სანამ მასივის ელემენტი არ იქნება 12 ის ტოლი . 

     const BREAKVALUE = 12;
     let array = [41,31,81,9,2,12,71,21,32]
*/

const BREAKVALUE = 12;
let array = [41, 31, 81, 9, 2, 12, 71, 21, 32]
for (let i = 0; i < array.length; i++) {
    if (array[i] == BREAKVALUE) {
        break;
    }
    console.log(array[i])
}