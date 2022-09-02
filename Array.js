//concate
// function method() {
//   const a = [1, 2, 3];
//   const b = [4, 5, 6];
//   const e = [
//     ["AA", "B"],
//     ["CC", "D"],
//   ];
//   const c = a.concat(b);
//   const d = a.concat("kaival", b, "thakkar");

//   console.log(c);
//   console.log(d);
//   console.log(a.concat(e));
// }
// method();

// function data() {
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   // console.log(arr.copyWithin(2, 4));
//   const test = arr.entries();
//   for (let entry of test) {
//     console.log(entry);
//   }
// }

// data();

// function demo() {
//   const ageArray = [26, 85, 44, 25];
//   let check = ageArray.every((age) => age >= 18);
//   console.log(check);
// }
// demo();

// function fill() {
//   var fruits = ["apple", " graps", "banana", "mengo"];
//   // console.log(fruits.fill("cherry"));
//   console.log(fruits.fill("cherry", 1, 3));
// }
// fill();

// function demoFilter() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   function checkEven(number) {
//     if (number % 2 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   let dammy = arr.filter(checkEven);
//   console.log(dammy);
// }
// demoFilter();

// function priceCheck() {
//   const prices = [1000, 2000, 3000, null, "kaival", "k", 5000];
//   let newPrice = prices.filter((price) => price > 2000);
//   console.log(newPrice);
// }
// priceCheck();

// function checkEven() {
//   let arr = [1, 3, 5, 8, 1, 4];
//   console.log(arr.find((num) => num % 2 == 0));
// }
// checkEven();

// function checkAge() {
//   const data = [
//     { name: "kaival", age: 5 },
//     { name: "viral", age: 5 },
//     { name: "suraal", age: 59 },
//   ];
//   console.log(data.findIndex(({ age }) => age >= 18));
// }

// checkAge();

// function checkflat() {
//   const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
//   console.log(arr.flat(2));
//   console.log(arr.flat(3));
// }
// checkflat();

// function flatmapCheck() {
//   const arr = [1, 2, 3, 4];
//   console.log(arr.flatMap((x) => x * 2));
// }
// flatmapCheck();

// function mapCheck() {
//   const arr = [1, 2, 3, 4];
//   console.log(arr.map((i) => i + 2));
// }
// mapCheck();

// function travel() {
//   let num = [1, 2, 3, 4];
//   function maltiplex(element) {
//     console.log(element * element);
//   }
//   num.forEach(maltiplex);
// }
// travel();

// function fromArray() {
//   console.log(Array.from("abc"));
//   console.log(Array.from("123456789"));
// }
// fromArray();

// function checkIncludes() {
//   const arr = ["java", "javascript", "c++"];
//   console.log(arr.includes("c++", 2));
//   console.log(arr.length);
// }
// checkIncludes();

// function isarrayCheck() {
//   const fruits = ["banana", "apple", "cherry"];
//   const text = "javascript";
//   console.log(Array.isArray(fruits));
//   console.log(Array.isArray(text));
// }
// isarrayCheck();

// function learnJoin() {
//   const arr = ["i", "am", "kaival", 2];
//   console.log(arr.join(" "));
//   console.log(arr.join("|"));
//   console.log(typeof arr);
// }
// learnJoin();

// function checkKey() {
//   const vehicle = ["audi", "maruti", "hundai"];
//   let data = vehicle.keys();
//   for (let key of data) {
//     console.log(key);
//   }
// }
// checkKey();

// function ofCheck() {
//   console.log(Array.of(1, 2, 3));
// }
// ofCheck();

// function checkpop() {
//   const arr = ["kaival", " vishal", "jay", "deep"];
//   console.log(arr.pop());
//   console.log(arr);
// }
// checkpop();

// function checkPush() {
//   const arr = ["tata", "honda", "toyota", "maruti"];
//   console.log(arr.push("hundai"));
//   console.log(arr);
//   console.log(arr.push(1, 2));
//   console.log(arr);
// }
// checkPush();

// function checkReduce() {
//   const arr = ["kaival", "is", "employee"];
//   const demo = arr.reduce((n1, n2) => n1 + n2);
//   console.log(demo);
//   const arr1 = [1, 2, 3, 4, 5];
//   console.log(arr1.reduce((n1, n2) => n1 * n2));
// }
// checkReduce();

// function checkReverse() {
//   const vehicle = ["bike", "activa", "jupiter", "bullet"];
//   console.log(vehicle.reverse());
// }
// checkReverse();

// function checkShift() {
//   const vehicle = ["bike", "activa", "jupiter", "bullet"];
//   console.log(vehicle.shift());
//   console.log(vehicle);
//   console.log(vehicle.length);
// }
// checkShift();

// function checkUnshift() {
//   const vehicle = ["bike", "activa", "jupiter", "bullet"];
//   console.log(vehicle.unshift("data1", "data2"));
// }
// checkUnshift();

// function checkSlice() {
//   const arr = [1, 2, 3, 4, 5, 6];
//   console.log(arr.slice(2));
//   console.log(arr.slice(1, 4));
// }
// checkSlice();

// function checkSome() {
//   const arr = [1, 2, 3, 4];
//   function checkEven(numbers) {
//     return numbers % 2 === 0;
//   }
//   console.log(arr.some(checkEven));
// }
// checkSome();

// function checkAdult() {
//   const arr = [22, 34, 54, 65];
//   function checkAge(number) {
//     return number < 18;
//   }
//   console.log(arr.some(checkAge));
// }
// checkAdult();
// function checkSort() {
//   const arr = ["ccc", "bbb", "zzz", "aaa"];
//   const arr1 = [10, 22, 3, 5, 111];
//   console.log(arr.sort());
//   console.log(arr1.sort());
// }
// checkSort();

// function checkTOLocalString() {
//   const arr = ["kaival", 12, "visnagar"];
//   console.log(arr.toLocaleString());
// }
// checkTOLocalString();

// function madeCurrency() {
//   const arr = [50, 20, 54, 2000];
//   let converted = arr.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   console.log(converted);
// }
// madeCurrency();

// function checkSplice() {
//   const arr = ["hello", "how", "kaival", "thakkar"];
//   const demo = arr.splice(2, 1); //starting
//   // console.log(arr.splice(2, 0, "are", "you")); //add 2 element at 2nd position
//   console.log(demo); //print whole string
// }
// checkSplice();

// function checkTostring() {
//   const arr = ["kaival", "infynno", 2162, 55];
//   console.log(arr.toString());
// }
// checkTostring();

// function checkValues() {
//   const arr = ["kaival", "thakkar", 2266];

//   let iterateObject = arr.values();

//   for (let value of iterateObject) {
//     console.log(value);
//   }
// }
// checkValues();

// function demoExample() {
//   var arr = [
//     {
//       a: 10,
//       b: 20,
//       c: 90,
//     },
//     {
//       a: 10,
//       b: 20,
//       c: 90,
//     },
//     {
//       a: 10,
//       b: 20,
//       c: 90,
//     },
//   ];

//   console.log(
//     arr.reduce(
//       (n1, n2) => {
//         console.log("n1=", n1);
//         console.log("n2=", n2);
//         return {
//           a: n1.a + n2.a,
//           b: n1.b + n2.b,
//           c: n1.c + n2.c,
//         };
//       },
//       {
//         a: 0,
//         b: 0,
//         c: 0,
//       }
//     )
//   );
// }
// demoExample();

// function checkoccurrence() {
//   let arr = ["a", "b", "c", "a", "a", "c"];
//   function getOccurrence(array, value) {
//     console.log("array:" + array);
//     console.log("value:" + value);

//     return array.filter((v) => v === value).length;
//   }

//   console.log(getOccurrence(arr, "a"));
// }
// checkoccurrence();

function checkoccurrence() {
  const count = [];
  const arr = ["a", "b", "c", "d", "a", "b", "a", "a", "d"];
  for (let i = 0; i < arr.length; i++) {
    let keys = arr[i];
    count[keys] = ++count[arr[i]] || 1;
  }
  console.log(count);
}
checkoccurrence();

//Array Methods
//concat : Join 2 Array
//entries: we get seprate element and index in array from whole combine Array
//every:check every value inside
//fill: fill methods fill all array with pass value
//filter : Return new array which pass the test
//find : find check the condition when it get first value wich satisfity it will return that value
//findIndex: it will check the condition and when it will get first match it will return index of that
//flat : create new array by flatting nested array up to specifiy depth also remove empty slot as well
//flatemap:same as map
//foreach :execute provided function for each array element
//from : it divide whole string and give distributed array of cheacters
//includes: it's check whether the string is inside array or not
//indexOf : it check whether the index of perticular word
//isArray : for check define variable is array or not (T/F)
//join : it will join chuck inside array by sapeter
//keys : it will return all key's value for element
//lastIndexOf  : it will iterate in whole array and give which last position this element got and print that index
//of: create Array what ever parameter pass in function of()
//pop: it will remove last element of array or last array from nested array
//push: we will able to push one or more element at last of existing array
//reduce: reduce will concate or sum  of given array element
//reverse : it will return reverse of given array element
//shift: shift will remove first element of array
//unShift: this method add one or more element at the beggining of array
//slice : this method will return peticular index elements from whole array
//some: this will return true if any single value of match in condition from array
//sort : this will sort array in assending order and in number it will do comparasion of first degit
//splice: in splice we will remove element by define and also add element in perticular array index
//toLocaleString : this will conver arr element to string represantation
//toString : this method returns a string formed by the elements of the given array
//values : this will return  each index element

//let : Outside function we can not able to use , let is block scoped , it is possible to update but not we can able to redeclare  , var can be redeclare and update , it will considering only updated value outside of block
//const : const == let (some similarities) , can't updated and reinitialize , hosted to the top but not initialize
//hosting is javascript mechanism where variable and function declaration are moved to to of there scope before code execution

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.

//Morel Always choose let instade of var
